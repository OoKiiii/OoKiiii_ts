import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/common/index.scss';

import { DefaultLayout } from '@/component/atoms/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
        <>
            {!isSSR && (
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            )}
        </>
    );
}

export default MyApp;
