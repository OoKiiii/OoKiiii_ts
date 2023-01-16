import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Link from 'next/link';

// hooks
import { useStore } from '../../../store';
import useCreateHandler from './handler';

// atom
import { Text } from '../../atoms/Text/index';
import { Flex } from '../../atoms/Flex';

// styles
import { DashBoardCard, ChartBox, LinkWrapper } from './style';

export const DashBoardCardChart = () => {
    const { language } = useStore();
    const { createPercentValue, createBackgroundColor, createChartLabel } = useCreateHandler();

    const data: DataTypes = {
        labels: createChartLabel(),
        datasets: [
            {
                type: 'doughnut',
                label: 'Dataset 1',
                backgroundColor: createBackgroundColor(),
                borderWidth: 1,
                data: createPercentValue(),
                width: '150px',
            },
        ],
    };

    return (
        <DashBoardCard size={'medium'}>
            {/*<Divider />*/}
            <Text>{language.name}</Text>
            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
                <ChartBox>
                    {/*@ts-ignore*/} {/*prettier-ignore*/}
                    <Doughnut data={data} width={400} height={400} options={{ maintainAspectRatio: false }} type={'doughnut'} />
                </ChartBox>
                <LinkWrapper>
                    <Flex css={{ alignItems: 'center' }}>
                        <Text typography={'explain'} position={'left'}>
                            Deploy:{' '}
                        </Text>
                        {language.deployUrl && <Link href={language.deployUrl}>{language?.deployUrl}</Link>}
                    </Flex>
                    <Flex css={{ alignItems: 'center' }}>
                        <Text typography={'explain'} position={'left'}>
                            Github:{' '}
                        </Text>
                        <Link href={language.htmlUrl}>{language.htmlUrl}</Link>
                    </Flex>
                </LinkWrapper>
            </Flex>
        </DashBoardCard>
    );
};
