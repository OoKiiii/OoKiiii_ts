import React, { useEffect } from 'react';

// components
import { ProfileImage } from '@/component/molecules/Profile-image';
import { Divider } from '@/component/atoms/Divider';

// style
import { NavigationWrap } from './style';
import { TextAtoms } from '@/component/atoms/Text';

// store
import { useStore } from '@/store';

export const LNBNavigation = () => {
    const { auth } = useStore();

    useEffect(() => {
        auth.getUserInfo?.();
        auth.getUserRepository?.();
    }, []);

    return (
        <NavigationWrap>
            <ProfileImage />
            <TextAtoms text={auth?.name} textType="subTitle" />
            <TextAtoms
                text={auth?.url}
                textType="explain"
                href={auth?.url}
                css={{ marginBottom: '30px' }}
                link={true}
                target={'_blank'}
            />
            <Divider />
        </NavigationWrap>
    );
};
