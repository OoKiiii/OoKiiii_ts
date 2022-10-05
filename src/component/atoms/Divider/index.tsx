import React from 'react';
import { styled } from '@stitches/react';

export const Divider = () => {
    return <Line> </Line>;
};

export const Line = styled('span', {
    display: 'block',
    width: '100%',
    height: '1px',
    backgroundColor: '#3d76b3',
});
