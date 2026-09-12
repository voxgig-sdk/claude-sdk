export interface Message {
    content?: any[];
    id?: string;
    max_tokens: number;
    messages: any[];
    metadata?: Record<string, any>;
    model?: string;
    role?: string;
    stop_reason?: string;
    stop_sequence?: string;
    stop_sequences?: any[];
    stream?: boolean;
    system?: string;
    temperature?: number;
    top_k?: number;
    top_p?: number;
    type?: string;
    usage?: Record<string, any>;
}
export interface MessageCreateData {
    content?: any[];
    id?: string;
    max_tokens: number;
    messages: any[];
    metadata?: Record<string, any>;
    model?: string;
    role?: string;
    stop_reason?: string;
    stop_sequence?: string;
    stop_sequences?: any[];
    stream?: boolean;
    system?: string;
    temperature?: number;
    top_k?: number;
    top_p?: number;
    type?: string;
    usage?: Record<string, any>;
}
