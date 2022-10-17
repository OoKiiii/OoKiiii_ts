import React from 'react';
import Link from 'next/link';
import { TextAtoms } from '@/component/atoms/Text/index';

import { Types } from '@/component/atoms/Text/type';

interface Props {
    text: string;
    textType: Types['textType'];
    position: string;
    href: string;
}

export const LinkBox = ({ text, textType, position, href }: Props) => {
    return (
        <TextAtoms text={text} textType={textType} position={position}>
            <Link href={href} style={{ width: '100%' }}>
                {href}
            </Link>
        </TextAtoms>
    );
};
