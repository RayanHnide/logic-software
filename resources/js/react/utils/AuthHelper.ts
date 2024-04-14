
export const AuthHelper = {
    token: () => {
        if (localStorage.hasOwnProperty("t")) {
            return "Bearer " + localStorage.getItem("t");
        }
        return undefined;
    },
    setToken : (token : string) => {
        localStorage.setItem("t",token)
    },
    logout : () => {
        localStorage.removeItem('t');
    }
}
