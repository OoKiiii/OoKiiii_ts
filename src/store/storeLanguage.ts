import create from 'zustand';
import { StoreLanguageTypes } from './storeLanguage.d';
import axios from 'axios';

const initialState: StoreLanguageTypes = {
    language: '',
};

export const useStoreLanguage = create<StoreLanguageTypes>(set => ({
    ...initialState,
    getLanguage: async payload => {
        try {
            const response = await axios.get(payload);
            set(() => ({
                language: response.data,
            }));
        } catch {}
    },
}));
