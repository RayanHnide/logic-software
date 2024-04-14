import {useCallback, useEffect, useState} from 'react';
import {Api} from "../utils/Api.ts";
import {useParams} from "react-router-dom";

const useLatestWorkSource = (details = false) => {
    const {slug} = useParams();
    const [data, setData] = useState( details ? null : [])
    const [loading, setLoading] = useState(true)
    const refresh = useCallback(() => {
        setLoading(true)
        Api.get({
            path: `/latest-work${details ? "/details" : ""}`,
            hideMessage: true,
            hasToken: false,
            data: details ? {slug} : null
        }).then(r => {
            if (r.data) {
                setData(r.data)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        refresh()
    }, []);
    return {
        data,
        loading,
        refresh
    };
};

export default useLatestWorkSource;
