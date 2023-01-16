// store
import { useStoreAuth } from './storeAuth';
import { useStoreLanguage } from './storeLanguage';

export const useStore = () => ({
    auth: useStoreAuth(),
    language: useStoreLanguage(),
});
