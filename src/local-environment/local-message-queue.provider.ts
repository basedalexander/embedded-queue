import { IMessageQueue } from '../message-queue.interface';
import { EmbeddedMessageQueue } from './embedded-message-queue';
import { MessageSerializer } from './message-serializer';

export class LocalMessageQueueProvider {
    public create(): Promise<IMessageQueue> {
        let queue: IMessageQueue = new EmbeddedMessageQueue(new MessageSerializer());
        return Promise.resolve(queue);
    }
}