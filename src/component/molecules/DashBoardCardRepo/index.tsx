import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { DashBoardCard, RepositoryList, RepositoryListContent } from './style';

import { useStore } from '@/store';

// Atoms
// import { CardTitleAtoms } from '@/component/atoms/CardTitle';
import { TextAtoms } from '@/component/atoms/Text';
import { IconAtoms } from '@/component/atoms/Icon';

export const DashBoardCardRepo = () => {
    const { auth } = useStore();

    // 날짜순으로 정렬 후 인덱스 0~5개만 가지고 옴
    const orderedDate = auth.repository
        ?.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 5);

    const CardTitle = [
        {
            title: '레포지토리 이름',
        },
        {
            title: '업데이트 날짜',
        },
        {
            title: 'Github 이동',
        },
    ];

    console.log(orderedDate);

    return (
        <>
            <DashBoardCard size={'medium'}>
                {/*<CardTitleAtoms item={CardTitle} />*/}
                {orderedDate?.map((item, index) => {
                    return (
                        <RepositoryList key={index}>
                            <TextAtoms
                                text={item.name}
                                textType={'explain'}
                                position={'left'}
                                css={{ margin: '5px 0' }}
                            />
                            <TextAtoms text={item.pushed_at.slice(0, -10)} textType={'explain'} />

                            <IconAtoms css={{ width: '30px', height: '15px', cursor: 'pointer' }}>
                                <Link href={item.html_url} target="_blank">
                                    <Image src={'/link.png'} layout={'fill'} alt={'github으로 이동'} />
                                </Link>
                            </IconAtoms>
                        </RepositoryList>
                    );
                })}
            </DashBoardCard>
        </>
    );
};
