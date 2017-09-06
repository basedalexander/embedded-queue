import { MessageProcessor } from './message-processor';
import { LocalMessageQueueProvider } from './local-environment/local-message-queue.provider';
import { IMessageQueueProvider } from './message-queue-provider.interface';
import { FirstQueueMessage } from './messages/first-queue-message';
import { SecondQueueMessage } from './messages/second-queue-message';

let messageQueueProvider: IMessageQueueProvider = new LocalMessageQueueProvider();
let messageProcessor: MessageProcessor = new MessageProcessor(messageQueueProvider);

messageProcessor.connect()
    .then(() => {
        messageProcessor.listen();
    });

messageQueueProvider.create()
    .then(mq => {
        mq.push(new FirstQueueMessage());
        mq.push(new SecondQueueMessage());
    });