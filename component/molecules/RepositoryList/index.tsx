import React, { useEffect } from 'react';
import { Text } from '../../atoms/Text/index';

import { RepositoryListStyle } from './style';

import { useStore } from '../../../store';

export const RepositoryList = () => {
    const { auth, language } = useStore();

    // 날짜순으로 정렬 후 인덱스 0~5개만 가지고 옴
    const orderedDate = auth.repository
        ?.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 5);

    useEffect(() => {
        // Default로 첫번째 data를 호출
        if (orderedDate) {
            const data = {
                endPoint: orderedDate[0].languages_url,
                repositoryName: orderedDate[0].name,
                deployUrl: orderedDate[0].homepage,
                htmlUrl: orderedDate[0].html_url,
            };
            language.getLanguage?.(data);
        }
    }, [auth.repository]);

    return (
        <>
            {orderedDate?.map((item, index) => {
                return (
                    <RepositoryListStyle key={index}>
                        <Text
                            typography={'explain'}
                            position={'left'}
                            css={{ margin: '5px 0', cursor: 'pointer' }}
                            onClick={() =>
                                language.getLanguage?.({
                                    endPoint: item.languages_url,
                                    repositoryName: item.name,
                                    deployUrl: item.homepage,
                                    htmlUrl: item.html_url,
                                })
                            }
                        >
                            {item.name}
                        </Text>
                        <Text typography={'explain'} position={'right'}>
                            {item.pushed_at.slice(0, -10)}
                        </Text>
                    </RepositoryListStyle>
                );
            })}
        </>
    );
};
