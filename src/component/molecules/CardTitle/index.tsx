import React from 'react';

import { TextAtoms } from '@/component/atoms/Text';

interface Props {
    title: string;
}

export const CardTitle = ({ title }: Props) => {
    return <TextAtoms text={title} textType={'subBodyText'} />;
};
