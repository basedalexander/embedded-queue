import { Injectable } from 'container-ioc';

@Injectable()
export class Provider {
    public get(): string {
        return 'value';
    }
}