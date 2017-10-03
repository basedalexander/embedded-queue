import { Container } from 'container-ioc';
import { IContainer } from 'container-ioc/dist/lib/container.interface';
import { App } from './app';
import { Service } from './service';
import { Provider } from './provider';

let container: IContainer = new Container();

container.register([
    App,
    { token: 'IService', useClass: Service},
    { token: 'IProvider', useClass: Provider }
]);

let app: App = container.resolve(App);

app.run();