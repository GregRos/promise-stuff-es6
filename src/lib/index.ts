import {PromiseStuff, ExtendedPromise, ExtendedPromiseConstructor} from 'promise-stuff';

PromiseStuff.extendExisting(Promise);

declare global {
    interface Promise<T> extends ExtendedPromise<T> {

    }

    interface PromiseConstructor extends ExtendedPromiseConstructor {

    }
}