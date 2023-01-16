import React, { useEffect } from 'react';
import Link from 'next/link';

// components
import { ProfileImage } from '../../molecules/Profile-image';
import { Divider } from '../../atoms/Divider';

// style
import { NavigationWrap } from './style';
import { Text } from '../../atoms/Text/index';

// store
import { useStore } from '../../../store';

export const LNBNavigation = () => {
    const { auth } = useStore();

    useEffect(() => {
        auth.getUserInfo?.();
        auth.getUserRepository?.();
    }, []);

    return (
        <NavigationWrap>
            <ProfileImage />
            <Text typography="subTitle">{auth?.name}</Text>
            <Link href={auth.url && auth.url}>
                <a href={auth?.url} target="_blank">
                    {auth?.url}
                </a>
            </Link>
            <Divider />
        </NavigationWrap>
    );
};
