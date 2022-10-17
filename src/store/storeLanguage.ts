import create from 'zustand';
import { StoreLanguageTypes } from './storeLanguage.d';
import axios from 'axios';

const initialState: StoreLanguageTypes = {
    language: '',
    name: '',
    deployUrl: '',
    htmlUrl: '',
};

export const useStoreLanguage = create<StoreLanguageTypes>(set => ({
    ...initialState,
    getLanguage: async ({ endPoint, repositoryName, deployUrl, htmlUrl }) => {
        try {
            const response = await axios.get(endPoint);
            set(() => ({
                language: response.data,
                name: repositoryName,
                deployUrl: deployUrl,
                htmlUrl: htmlUrl,
            }));
        } catch {}
    },
}));
