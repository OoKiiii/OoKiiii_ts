import { forwardRef, memo } from 'react';

// style
import { TextStyled } from './style';

// types
import { Props } from './index';

export const Text = memo(
    forwardRef<HTMLParagraphElement, Props>(({ typography, position, onClick, children, ...restProps }) => {
        return (
            <>
                <TextStyled typography={typography} position={position} css={{ ...restProps.css }} onClick={onClick}>
                    {children}
                </TextStyled>
            </>
        );
    }),
);
