import React from 'react';

import { DashBoardCardWrap } from './style';

import { Props } from './index.d';

export const DashBoardCard = ({ size }: Props) => {
    return <DashBoardCardWrap size={size}></DashBoardCardWrap>;
};
