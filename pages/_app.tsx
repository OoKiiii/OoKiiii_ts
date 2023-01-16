import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/common/index.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
} from 'chart.js';

import { DefaultLayout } from '../component/atoms/Layout';

// ChartJS 생성자 함수에 플러그인을 등록합니다.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip);

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
