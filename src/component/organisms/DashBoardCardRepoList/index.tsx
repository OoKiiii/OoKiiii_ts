import React, { useEffect } from 'react';

// style
import { DashBoardCard } from './style';

// atoms
import { RepositoryList } from '@/component/molecules/RepositoryList';
import { CardTitle } from '@/component/molecules/CardTitle';

export const DashBoardCardRepoList = () => {
    return (
        <>
            <DashBoardCard size={'medium'}>
                <CardTitle title={'Repository'} />
                <RepositoryList />
            </DashBoardCard>
        </>
    );
};
