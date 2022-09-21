import type { AppProps } from 'next/app';
import '../styles/common/index.scss';

import { DefaultLayout } from '../common/layout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
}

export default MyApp;
