export interface StoreAuthTypes {
    profileImage: string;
    name: string | null;
    email: string | null;
    url: string | null;
    repository:
        | [
              {
                  id: number;
                  name: string;
                  updated_at: string;
                  html_url: string;
                  issue_open: number;
              },
          ]
        | null;

    getUserInfo?: () => void;
    getUserRepository?: () => void;
}

export interface getUserInfoResponseTypes {
    data: {
        id?: number;
        name?: string;
        avatar_url?: string;
        html_url?: string;
        login?: string;
    };
}

export interface getUserRepositoryResponseTypes {
    data: [
        {
            id: number;
            name: string;
            updated_at: string;
            html_url: string;
            issue_open: number;
        },
    ];
}
