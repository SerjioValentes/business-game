import axios from 'axios';

export const Api = axios.create({

    baseURL: process.env.REACT_APP_API_URL,
    timeout: 100000,
});

Api.interceptors.request.use(function (config: any) {

    const authToken = window.localStorage.getItem('authToken');
    if (authToken) {
        config.headers = {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        };
    }

    return config;
});

// Api.interceptors.response.use(
//
// );



export const apiPost: any = async({url, postData = {}, headerList = {}} : {url: string, postData: any, headerList: any}) => {
    const res = await Api.post(url, postData, {headers: headerList});

    return res;
};

export const apiGet = async ({url, headerList = {}}: {url: string, headerList: any}) => {
    const res = await Api.get(url, {headers: headerList});

    return res;
};
