import React from 'react';

// style
import { Text } from './style';

// types
import { Props } from './index.d';

export const TextAtoms = <T,>({ text, textType, href, css, link, target, position, onClick }: Props<T>) => {
    return (
        <>
            <Text textType={textType} position={position} css={{ ...css }} onClick={onClick}>
                {link ? (
                    <a href={href} target={target}>
                        {text}
                    </a>
                ) : (
                    <>{text}</>
                )}
            </Text>
        </>
    );
};
