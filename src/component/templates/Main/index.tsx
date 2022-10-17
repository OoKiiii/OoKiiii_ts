import React from 'react';

import { HeaderOrganisms } from '@/component/organisms/Header';

import { DashBoardCardRepoList } from '@/component/organisms/DashBoardCardRepoList';
import { DashBoardCardChart } from '@/component/organisms/DashBoardCardChart';

export const Main = () => {
    return (
        <>
            <HeaderOrganisms />
            <div style={{ display: 'flex' }}>
                <DashBoardCardRepoList />
                <DashBoardCardChart />
            </div>
        </>
    );
};
