import React from 'react';

// style
import { DefaultLayoutWrapper } from './style';

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
    return (
        <DefaultLayoutWrapper>
            <div style={{ width: '100%' }}>{children}</div>
        </DefaultLayoutWrapper>
    );
};
