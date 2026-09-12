import { Context } from './Context';
declare class ClaudeError extends Error {
    isClaudeError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ClaudeError };
