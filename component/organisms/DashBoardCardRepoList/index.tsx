import React, { useEffect } from 'react';

// style
import { DashBoardCard } from './style';

// atoms
import { Text } from '../../atoms/Text/index';
import { RepositoryList } from '../../molecules/RepositoryList';
import { Box } from '../../atoms/Box';

export const DashBoardCardRepoList = () => {
    return (
        <DashBoardCard size={'medium'}>
            <Text>Repository</Text>
            <RepositoryList />
        </DashBoardCard>
    );
};
