import React from 'react';
import { useStore } from '../../../store';
import { DataColorSwitch } from '../../../data/DataColor';

const CreateHandler = () => {
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

    return { createPercentValue, createBackgroundColor, createChartLabel };
};

export default CreateHandler;
