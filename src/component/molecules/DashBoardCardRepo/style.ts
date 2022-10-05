import { styled } from '@stitches/react';

export const DashBoardCard = styled('div', {
    width: '100%',
    height: '300px',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'rgb(21, 76, 189)',
    borderRadius: '8px',
    boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.1)',

    variants: {
        size: {
            smaill: {
                maxWidth: '300px',
            },
            medium: {
                maxWidth: '500px',
            },
            large: {
                maxWidth: '700px',
            },
        },
    },
});
