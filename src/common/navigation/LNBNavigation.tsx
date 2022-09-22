import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';

// components
import { ProfileImage } from '../../component/atom/profile-image/ProfileImage';
import { Divider } from '../divider/Divider';

// style
import { NavigationWrap } from './style/style';
import { TextComponent } from '../../component/atom/text/Text';

// store
import { useStore } from 'src/store';

export const LNBNavigation = () => {
    const { auth } = useStore();

    useEffect(() => {
        auth.getUserInfo?.();
    }, []);

    return (
        <NavigationWrap>
            <ProfileImage />
            <TextComponent text={auth?.name} textType="title" />
            <TextComponent
                text={auth?.url}
                textType="subTitle"
                href={auth?.url}
                css={{ marginBottom: '30px' }}
                link={true}
                target={'_blank'}
            />
            <Divider />
        </NavigationWrap>
    );
};
