import { styled } from '@stitches/react';

export const DefaultLayoutWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
});

export const DefaultLayoutContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    height: '100%',
    minHeight: '100vh',
    marginTop: '70px',
    border: '1px solid #ececec',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});
