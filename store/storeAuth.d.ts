export interface StoreAuth {
    profileImage: string;
    name: string | null;
    email: string | null;
    url: string;
    repository:
        | [
              {
                  id: number;
                  name: string;
                  updated_at: string;
                  pushed_at: string;
                  html_url: string;
                  issue_open: number;
                  languages_url: string;
                  homepage: string;
              },
          ]
        | null;
    getUserInfo?: () => void;
    getUserRepository?: () => void;
}

export interface getUserInfoResponse {
    data: {
        id?: number;
        name?: string;
        avatar_url?: string;
        html_url?: string;
        login?: string;
    };
}

export interface getUserRepositoryResponse {
    data: [
        {
            id: number;
            name: string;
            updated_at: string;
            pushed_at: string;
            html_url: string;
            issue_open: number;
            languages_url: string;
        },
    ];
}

export interface repositoryResponse {
    data:
        | [
              {
                  id: number;
                  name: string;
                  updated_at: string;
                  pushed_at: string;
                  html_url: string;
                  issue_open: number;
                  languages_url: string;
                  homepage: string;
              },
          ]
        | null;
}
