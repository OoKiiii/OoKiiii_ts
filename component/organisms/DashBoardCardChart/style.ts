import { styled } from '../../../stitches.config';
import { BoxStyled } from '../../atoms/Box';

export const DashBoardCard = styled(BoxStyled, {
    width: '100%',
    height: 'auto',
    m: '5px',
    p: '10px',
    backgroundColor: '$background',
    borderRadius: '8px',
    boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.1)',
});

export const ChartBox = styled('div', {
    width: '100%',
    maxWidth: '100px',
    height: '100%',
    maxHeight: '100px',
    marginTop: '20px',
});

export const LinkWrapper = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '120px',
    marginLeft: '30px',
});
