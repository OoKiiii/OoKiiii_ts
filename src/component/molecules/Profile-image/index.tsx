import React from 'react';
import Image from 'next/image';

// store
import { useStore } from 'src/store';

// style
import { ProfileImageWrap, ProfileImageBox } from './style';

export const ProfileImage = () => {
    const { auth } = useStore();
    // console.log(auth.profileImage);

    return (
        <ProfileImageWrap>
            <ProfileImageBox size="large">
                <Image src={auth.profileImage} alt="profile" layout={'fill'} />
            </ProfileImageBox>
        </ProfileImageWrap>
    );
};
