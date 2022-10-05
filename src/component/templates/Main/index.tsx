import React from 'react';

import { HeaderOrganisms } from '@/component/organisms/Header';

import { DashBoardCardRepo } from '@/component/molecules/DashBoardCardRepo';

export const Main = () => {
    return (
        <>
            <HeaderOrganisms />
            <DashBoardCardRepo />
        </>
    );
};
