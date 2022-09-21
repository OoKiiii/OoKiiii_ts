import React from 'react';

import { DefaultLayoutWrapper, DefaultLayoutContainer } from './style/DefaultLayout.style';

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
    return (
        <DefaultLayoutWrapper>
            <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
        </DefaultLayoutWrapper>
    );
};
