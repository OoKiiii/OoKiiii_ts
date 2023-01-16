export interface Types {
    typography: 'title' | 'subTitle' | 'bodyText' | 'subBodyText' | 'explain';
    target: '_blank' | '_self' | '_parent' | '_top';
    position: 'left' | 'right';
}

export interface Props {
    typography?: Types['typography'];
    position?: Types['position'];
    onClick?: () => void;
    children: React.ReactNode;
    css?: object;
}
