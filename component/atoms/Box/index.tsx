import { styled } from '@stitches/react';

export const BoxStyled = styled('div', {
    width: '100%',
    height: '100%',
    backgroundColor: '$background',

    variants: {
        size: {
            small: {
                maxWidth: '300px',
            },
            medium: {
                maxWidth: '500px',
                maxHeight: '200px',
            },
            large: {
                maxWidth: '700px',
            },
        },
    },
});

interface Props {
    children: React.ReactNode;
}
export const Box = ({ children }: Props) => {
    return <BoxStyled>{children}</BoxStyled>;
};
