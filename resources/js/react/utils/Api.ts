import {AuthHelper} from "./AuthHelper.js";
import {toast} from "react-toastify";
import axios from "axios";
// export const ApiConnection = {
//     host : "127.0.0.1",
//     port : 8000,
//     scheme : "http",
// }
export const ApiConnection = {
    host : "logic-development.net",
    port : 443,
    scheme : "https",
}
// export const ApiConnection = {
//     host: "logic.cobyte01.com",
//     port: 443,
//     scheme: "https",
// }

const domain = `${ApiConnection.scheme}://${ApiConnection.host}:${ApiConnection.port}`;
export const apiFullPath = (path : string) => domain + path;
export const Api = {
    post: async function ({
                              path,
                              data = {},
                              hasToken = true,
                              hideMessage = false,
                              method = "post",
                          } : {path: string, data?: any,hideMessage?:boolean, hasToken?: boolean, method?: string}) {
        let result: { data: undefined; success: boolean; message?: string } = {
            message: undefined,
            success: false,
            data: undefined
        };
        try {
            let r = await axios.request({
                method: method.toUpperCase(),
                url: apiFullPath(`/api${path}`),
                data: method.toUpperCase() !== "GET" ? data : null,
                params: method.toUpperCase() === "GET" ? data : null,
                headers: hasToken && AuthHelper.token() ? {
                    Authorization: AuthHelper.token(),
                    Accept: "application/json"
                } : {
                    Accept: "application/json"
                }
            });
            if (r.data) {
                result = r.data;
            }
        } catch (e : any) {
            if (e.response?.data?.message) {
                result = {...result, message: e.response.data.message}
            } else {
                result = {...result, message: "Something Went Wrong!!"}
            }
        }
        if (!hideMessage && ((method !== "GET" || (method === "GET" && !result.success)) && ((!result.success) || result.message))) {
            const msgs = result.message;
            let msg = "";
            if (typeof (msgs) === "object") {
                Object.entries(msgs).forEach(([k, v]) => {
                    msg += `[${k}] : ${v}\n`;
                })
            } else if (typeof (msgs) === "string") {
                msg = msgs;
            } else {
                msg = "something went wrong!!";
            }
            toast(msg, {type: result.success ? "success" : "error"})
        }
        return Promise.resolve(result);
    },
    get: async ({
                    path,
                    data = {},
                    hasToken = true,
                    hideMessage = false,
                } : {path: string, data?: any,hideMessage?: boolean, hasToken?: boolean}) => Api.post({
        path,
        data,
        hideMessage,
        hasToken,
        method: "GET",
    }),
}
