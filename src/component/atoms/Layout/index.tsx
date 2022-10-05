import React from 'react';

// style
import { DefaultLayoutWrapper, DefaultLayoutContainer } from './style';

// components
import { LNBNavigation } from '@/component/organisms/Navigation';

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
    return (
        <DefaultLayoutWrapper>
            <DefaultLayoutContainer>
                <LNBNavigation />
                <div style={{ width: '100%' }}>{children}</div>
            </DefaultLayoutContainer>
        </DefaultLayoutWrapper>
    );
};
