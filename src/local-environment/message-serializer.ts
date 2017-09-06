import { IMessage } from '../message-queue.interface';

export class MessageSerializer {
    public serialize(message: IMessage): string {
        return JSON.stringify(message);
    }

    public deserialize(serializedMessage: string): IMessage {
        return JSON.parse(serializedMessage);
    }
}