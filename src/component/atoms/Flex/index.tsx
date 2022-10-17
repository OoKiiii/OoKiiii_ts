import React from 'react';

import { styled } from '@stitches/react';

interface Props {
    children: React.ReactNode;
    css?: {};
}

export const Flex = ({ children, css }: Props) => {
    return <FlexBox css={{ ...css }}>{children}</FlexBox>;
};

const FlexBox = styled('div', {
    display: 'flex',
});
