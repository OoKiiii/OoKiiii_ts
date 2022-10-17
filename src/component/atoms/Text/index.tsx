import React from 'react';

// style
import { Text } from './style';

// types
import { Props } from './type.d';

export const TextAtoms = <T,>({ text, textType, href, css, link, target, position, onClick, children }: Props<T>) => {
    return (
        <>
            <Text textType={textType} position={position} css={{ ...css }} onClick={onClick}>
                {text}
                &nbsp;
                {children}
            </Text>
        </>
    );
};
