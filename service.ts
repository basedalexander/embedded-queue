import { Injectable } from 'container-ioc';

@Injectable()
export class Service {
    public capitalize(str: string): string {
        return str.toUpperCase();
    }
}