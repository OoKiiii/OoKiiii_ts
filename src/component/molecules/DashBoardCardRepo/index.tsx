import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { DashBoardCard, RepositoryList } from './style';

import { useStore } from '@/store';

// Atoms
import { TextAtoms } from '@/component/atoms/Text';
import { IconAtoms } from '@/component/atoms/Icon';

interface test {
    id: number;
    label: string;
    data: [];
}

export const DashBoardCardRepo = () => {
    const { auth, language } = useStore();

    // 날짜순으로 정렬 후 인덱스 0~5개만 가지고 옴
    const orderedDate = auth.repository
        ?.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 5);

    useEffect(() => {
        // Default로 첫번째 data를 호출
        if (orderedDate) {
            language.getLanguage?.(orderedDate[0].languages_url);
        }
    }, []);

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
                                css={{ margin: '5px 0', cursor: 'pointer' }}
                                onClick={() => language.getLanguage?.(item.languages_url)}
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
