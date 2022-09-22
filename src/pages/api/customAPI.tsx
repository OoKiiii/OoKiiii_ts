import React from 'react';
import axios from 'axios';

interface Props {
    endPoint: string;
    params?: object;
}

export const CustomAPI = () => {
    const githubInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
        timeout: 10000,
    });
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        timeout: 10000,
    });

    return { githubInstance, instance };
};
