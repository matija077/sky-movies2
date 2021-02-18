import React, { useState, useEffect } from 'react';

function useError() {
    var [error, setError] = useState<any>(undefined);

    if (error) {
        throw error;
    }

    return [error, setError];
}

function useLogger<T>(message: string = "", value: T) {
    useEffect(() => {
        console.log(`logger -> ${message} : ${value}`);
    }, [value]);
}

function useFetch<T>(url: string): [T | undefined, boolean] {
    const [_, setError] = useError();
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(url).then(function resolved(result) {
            return result.json();
        })
        .then(function data(data: any) {
            console.log(data);
            setData(data);
        })
        .catch(function rejected(error: any) {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

        setLoading(true);
    }, [url, setError]);

    return [data, loading]
}

export {
    useFetch,
    useError,
    useLogger
}