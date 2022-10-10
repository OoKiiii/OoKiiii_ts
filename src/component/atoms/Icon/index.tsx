import React from 'react';

// style
import { Icon } from './style';

// types
import { Props } from './index.d';

export const IconAtoms = ({ css, children }: Props) => {
    return <Icon css={{ ...css }}>{children}</Icon>;
};
