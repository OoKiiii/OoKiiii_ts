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
