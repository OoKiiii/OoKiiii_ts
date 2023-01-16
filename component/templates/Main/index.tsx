import React from 'react';

import { HeaderOrganisms } from '../../organisms/Header';

import { DashBoardCardRepoList } from '../../organisms/DashBoardCardRepoList';
import { DashBoardCardChart } from '../../organisms/DashBoardCardChart';
import { LNBNavigation } from '../../organisms/Navigation';

export const Main = () => {
    return (
        <>
            <HeaderOrganisms />
            <div style={{ display: 'flex' }}>
                <LNBNavigation />
                <DashBoardCardRepoList />
                <DashBoardCardChart />
            </div>
        </>
    );
};
