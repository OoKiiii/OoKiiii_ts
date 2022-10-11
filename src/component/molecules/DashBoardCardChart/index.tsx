import React, { useState } from 'react';

import { useStore } from '@/store';

import { Line, Doughnut, Pie, Chart } from 'react-chartjs-2';

import { DashBoardCard, RepositoryList, RepositoryListContent } from './style';
import { DataColorSwitch } from '@/component/molecules/DashBoardCardChart/DataColor';

interface DataTypes {
    labels: string[];
    datasets: [
        {
            type: string;
            label: string;
            backgroundColor: any[];
            data: number[];
            width: string;
            borderWidth: number;
        },
    ];
}

export const DashBoardCardChart = () => {
    const { language } = useStore();

    const createPercentValue = () => {
        const objectValues: number[] = Object.values(language.language);
        let allValue: number = 0;
        let percentValue: number = 0;
        let percentValueArray: number[] = [];
        for (const bb of objectValues) {
            allValue += bb;
        }
        objectValues.map(item => {
            percentValue = (item / allValue) * 100;
            percentValueArray.push(Math.round(percentValue));
        });
        return percentValueArray;
    };

    const createChartLabel = () => {
        const objectKeys: string[] = Object.keys(language.language);
        let objectKeysArray: string[] = [];
        objectKeys.map(item => {
            objectKeysArray.push(item);
        });
        return objectKeysArray;
    };

    const createBackgroundColor = () => {
        let backgroundColorArray: any = [];
        if (createChartLabel()) {
            createChartLabel().map(item => {
                backgroundColorArray.push(DataColorSwitch(item));
            });
        }
        return backgroundColorArray;
    };

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
        <DashBoardCard>
            {/*@ts-ignore*/}
            <Doughnut data={data} width={100} height={50} options={{ maintainAspectRatio: false }} type={'doughnut'} />
        </DashBoardCard>
    );
};
