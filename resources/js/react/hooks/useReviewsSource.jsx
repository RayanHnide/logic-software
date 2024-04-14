import {useCallback, useEffect, useState} from 'react';
import {Api} from "../utils/Api.ts";

const useReviewsSource = () => {
    const [data, setData] = useState( [])
    const [loading, setLoading] = useState(true)
    const refresh = useCallback(() => {
        setLoading(true)
        Api.get({
            path: `/reviews`,
            hideMessage: true,
            hasToken: false
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

export default useReviewsSource;
