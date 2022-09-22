// store
import { useStoreAuth } from './storeAuth';

export const useStore = () => ({
    auth: useStoreAuth(),
});
