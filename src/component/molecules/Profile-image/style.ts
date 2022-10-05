import { styled } from '@stitches/react';

export const ProfileImageWrap = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '30px 0',
});

export const ProfileImageBox = styled('div', {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '150px',
    borderRadius: '50%',
    overflow: 'hidden',

    variants: {
        size: {
            small: {},
            medium: {},
            large: {
                maxWidth: '150px',
                maxHeight: '150px',
            },
        },
    },
});
