import React from 'react';

import { HeaderOrganisms } from '@/component/organisms/Header';

import { DashBoardCardRepo } from '@/component/molecules/DashBoardCardRepo';
import { DashBoardCardChart } from '@/component/molecules/DashBoardCardChart';

export const Main = () => {
    return (
        <>
            <HeaderOrganisms />
            <div style={{ display: 'flex' }}>
                <DashBoardCardRepo />
                <DashBoardCardChart />
            </div>
        </>
    );
};
