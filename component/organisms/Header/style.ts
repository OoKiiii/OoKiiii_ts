import { styled } from '../../../stitches.config';

export const HeaderWrap = styled('div', {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    minHeight: '70px',
    m: '5px',
    p: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});

export const HeaderListBox = styled('ul', {
    display: 'flex',
});

export const HeaderList = styled('li', {
    margin: '0 10px',

    a: {
        fontSize: '16px',
        fontWeight: '500',
        color: 'black',
    },

    variants: {
        active: {
            true: {
                borderBottom: '.2px solid #FFFFFF',
            },
        },
    },
});
