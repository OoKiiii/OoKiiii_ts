import { styled } from '@stitches/react';

export const CardTitleBox = styled('div', {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #e5e5e5',
    padding: '5px 0 10px 0',
});

export const CardTitle = styled('h5', {
    fontSize: '14px',
    fontWeight: '500',
    flex: '0 1 1',
});
