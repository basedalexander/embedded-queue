import { Inject, Injectable } from 'container-ioc';

@Injectable()
export class App {
    constructor(
        @Inject('IService') private service: any,
        @Inject('IProvider') private provider: any
    ) {
    }

    public run(): void {
        let value: string = this.provider.get();
        let processedValue: string = this.service.capitalize(value);
        console.log(processedValue);
    }
}