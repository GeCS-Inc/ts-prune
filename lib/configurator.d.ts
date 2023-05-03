export interface IConfigInterface {
    project?: string;
    ignore?: string;
    error?: string;
    skip?: string;
    unusedInModule?: string;
}
export declare const getConfig: () => IConfigInterface;
