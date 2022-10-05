import React from 'react';

import { DashBoardCard } from './style';

import { useStore } from '@/store';

export const DashBoardCardRepo = () => {
    const { auth } = useStore();

    const orderedDate = auth.repository
        ?.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 5);

    return (
        <>
            <DashBoardCard size={'medium'}>
                {orderedDate?.map((item, index) => {
                    return <div key={index}>{item.name}</div>;
                })}
            </DashBoardCard>
        </>
    );
};
