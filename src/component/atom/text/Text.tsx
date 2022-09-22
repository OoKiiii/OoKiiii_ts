import React from 'react';

// style
import { Text } from './style/style';

interface Types {
    textType: 'title' | 'subTitle' | 'bodyText' | 'subBodyText';
    target: '_blank' | '_self' | '_parent' | '_top';
}

interface Props<T> {
    text: any;
    textType?: Types['textType'];
    href?: any;
    link?: boolean;
    css?: object;
    target?: Types['target'];
}

export const TextComponent = <T,>({ text, textType, href, css, link, target }: Props<T>) => {
    return (
        <>
            <Text textType={textType} css={{ ...css }}>
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
