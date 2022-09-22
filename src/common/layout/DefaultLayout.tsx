import React from 'react';

// style
import { DefaultLayoutWrapper, DefaultLayoutContainer } from './style/DefaultLayout.style';

// components
import { LNBNavigation } from '../navigation/LNBNavigation';

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
    return (
        <DefaultLayoutWrapper>
            <DefaultLayoutContainer>
                <LNBNavigation />
                {children}
            </DefaultLayoutContainer>
        </DefaultLayoutWrapper>
    );
};
