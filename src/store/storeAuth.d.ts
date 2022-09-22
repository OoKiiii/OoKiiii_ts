export interface StoreAuthTypes {
    profileImage: string;
    name: string | null;
    email: string | null;
    url: string | null;

    getUserInfo?: () => void;
}

export interface getUserInfoResponseTypes {
    data: {
        id?: number;
        name?: string;
        avatar_url?: string;
        html_url?: string;
        login?: string;
    }
}