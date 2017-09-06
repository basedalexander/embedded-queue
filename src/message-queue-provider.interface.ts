import { IMessageQueue } from './message-queue.interface';

export interface IMessageQueueProvider {
    create(): Promise<IMessageQueue>;
}