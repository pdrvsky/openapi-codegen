import { ConfigBase, Context } from "./types";
declare type Config = ConfigBase;
/**
 * Generate schemas types (components & responses)
 * @param context CLI Context
 * @param config Configuration
 */
export declare const generateSchemaTypes: (context: Context, config?: Config) => Promise<{
    schemasFiles: {
        requestBodies: string;
        schemas: string;
        parameters: string;
        responses: string;
        utils: string;
    };
}>;
export {};
