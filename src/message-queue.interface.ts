export interface IMessage {}

export type QueueMessageSubscriber = (message: IMessage) => Promise<void>;

export interface IMessageQueue {
    push(message: IMessage): Promise<void>;
    subscribe(subscriber: QueueMessageSubscriber): void;
}