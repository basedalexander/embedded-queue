import { IMessage, IMessageQueue, QueueMessageSubscriber } from './message-queue.interface';
import { MessageSerializer } from './message-serializer';

export class EmbeddedMessageQueue implements IMessageQueue {
    private queue: string[] = [];
    private subscriber: QueueMessageSubscriber;
    private processing: boolean = false;
    private instance: IMessageQueue;

    constructor(private serializer: MessageSerializer) {
        if (this.instance) {
            return this.instance;
        }

        this.instance = this;
        return this.instance;
    }

    public push(message: IMessage): Promise<void> {
        let serializedMessage: string = this.serializer.serialize(message);
        this.queue.push(serializedMessage);

        return Promise.resolve();
    }

    public subscribe(subscriber: QueueMessageSubscriber): void {
        this.subscriber = subscriber;
    }

    private processQueue(): void {
        if (this.processing) {
            return;
        }

        this.processing = true;

        let serializedMessage: string = this.queue.shift();

        let message: IMessage = this.serializer.deserialize(serializedMessage);

        this.subscriber(message)
            .then((messages: IMessage[]) => {
                messages.forEach(m => {
                    this.queue.push(this.serializer.serialize(m));
                });

                this.processing = false;

                if (this.queue.length) {
                    this.processQueue();
                }
            })
            .catch(error => {
                // todo handle error
            })
    }
}