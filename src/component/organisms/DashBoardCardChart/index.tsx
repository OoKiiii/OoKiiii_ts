import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Link from 'next/link';

// hooks
import { useStore } from '@/store';
import useCreateHandler from './handler';

// styles
import { DashBoardCard, ChartBox, LinkWrapper } from './style';
import { Flex } from '@/component/atoms/Flex';

// molecules
import { CardTitle } from '@/component/molecules/CardTitle';
import { LinkBox } from '@/component/molecules/LinkBox';

// atoms
import { TextAtoms } from '@/component/atoms/Text';

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

    console.log('123');

    return (
        <DashBoardCard>
            <CardTitle title={language.name} />
            {/*<Divider />*/}
            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
                <ChartBox>
                    {/*@ts-ignore*/} {/*prettier-ignore*/}
                    <Doughnut data={data} width={400} height={400} options={{ maintainAspectRatio: false }} type={'doughnut'} />
                </ChartBox>
                <LinkWrapper>
                    <LinkBox text={'deploy:'} textType={'explain'} position={'left'} href={language.deployUrl} />
                    <LinkBox text={'github:'} textType={'explain'} position={'left'} href={language.htmlUrl} />
                </LinkWrapper>
            </Flex>
        </DashBoardCard>
    );
};
