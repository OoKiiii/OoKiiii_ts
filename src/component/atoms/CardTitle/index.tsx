import React from 'react';

// types
import { Props } from './index.d';

// style
import { CardTitleBox, CardTitle } from './style';

export const CardTitleAtoms = ({ item }: Props) => {
    console.log(item);
    return (
        <CardTitleBox>
            {item.map((item, index) => {
                return <CardTitle key={index}>{item.title}</CardTitle>;
            })}
        </CardTitleBox>
    );
};
