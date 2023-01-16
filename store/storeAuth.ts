import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// types
import { StoreAuth, getUserInfoResponse, repositoryResponse } from 'store/storeAuth';

// api
import { CustomAPI } from '../pages/api/customAPI';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type MyPersist = (config: StateCreator<StoreAuth>, options: PersistOptions<StoreAuth>) => StateCreator<StoreAuth>;

const initialState: StoreAuth = {
    profileImage: '',
    name: null,
    email: null,
    url: null,
    repository: null,
};

export const useStoreAuth = create<StoreAuth>(
    (persist as unknown as MyPersist)(
        (set, get) => ({
            ...initialState,
            getUserInfo: async () => {
                const { githubInstance } = CustomAPI();
                const req: AxiosRequestConfig = {
                    data: 'initOki',
                };
                try {
                    const response: getUserInfoResponse = await githubInstance.get('/users/' + req.data);
                    if (response.data.id === 61795897) {
                        set(() => ({
                            profileImage: response.data.avatar_url,
                            name: response.data.login,
                            url: response.data.html_url,
                        }));
                    }
                } catch {}
            },
            getUserRepository: async () => {
                const { githubInstance } = CustomAPI();
                const req: AxiosRequestConfig = {
                    data: 'initOki',
                };
                try {
                    const response: repositoryResponse = await githubInstance.get('/users/' + req.data + '/repos');
                    set(() => ({
                        repository: response.data,
                    }));
                } catch {}
            },
        }),
        {
            name: 'me',
            getStorage: () => sessionStorage,
        },
    ),
);
