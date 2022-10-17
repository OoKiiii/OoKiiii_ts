export interface StoreLanguageTypes {
    // TODO: any type fix
    language: any;
    name: string;
    deployUrl: string;
    htmlUrl: string;

    getLanguage?: (payload: { repositoryName: string; endPoint: string; deployUrl: string; htmlUrl: string; }) => void;
}