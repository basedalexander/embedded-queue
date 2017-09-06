import { IMessage, IMessageQueue } from './message-queue.interface';
import { IMessageQueueProvider } from './message-queue-provider.interface';

export class MessageProcessor {
    private messageQueue: IMessageQueue;

    constructor(private messageQueueProvider: IMessageQueueProvider) {
    }

    public async connect(): Promise<void> {
        this.messageQueue = await this.messageQueueProvider.create();
    }

    public listen(): void {
        this.messageQueue.subscribe((message: IMessage) => {
            // * get the message's handler
            // * execute handler against the message
            // * get the message that handler passed
            // * push that message to the queue
            return Promise.resolve([]);
        });
    }
}