import { ClaudeEntityBase } from '../ClaudeEntityBase';
import type { ClaudeSDK } from '../ClaudeSDK';
import type { Control } from '../types';
import type { Message, MessageCreateData } from '../ClaudeTypes';
declare class MessageEntity extends ClaudeEntityBase<Message> {
    constructor(client: ClaudeSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    create(this: any, reqdata?: MessageCreateData, ctrl?: Control): Promise<MessageEntity>;
}
export { MessageEntity };
