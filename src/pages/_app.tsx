import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/common/index.scss';

import { DefaultLayout } from '../common/layout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
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
