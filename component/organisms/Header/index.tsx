import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HeaderWrap, HeaderListBox, HeaderList } from './style';

export const HeaderOrganisms = () => {
    const router = useRouter();
    const activePath = router.pathname;
    return (
        <HeaderWrap>
            <HeaderListBox>
                <HeaderList active={activePath === '/'}>
                    <Link href="/Users/ookiiii/Documents/_Git/OoKiiii_ts/pages">Main</Link>
                </HeaderList>
                <HeaderList active={activePath === '/board'}>
                    <Link href="/Users/ookiiii/Documents/_Git/OoKiiii_ts/pages">Board</Link>
                </HeaderList>
            </HeaderListBox>
        </HeaderWrap>
    );
};
