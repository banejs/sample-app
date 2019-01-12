import Exception from '@banejs/exceptions/Exception';

import StoreExceptionInterface from './StoreExceptionInterface';

/**
 * Base interface representing a generic exception in a store.
 */
export default class StoreException extends Exception implements StoreExceptionInterface {
    public name: string = 'StoreException';

    public constructor(message?: string, code: string = 'E_STORE_EXCEPTION', status: number = 500) {
        super(message || 'Unexpected store exception', code, status);

        // Set the prototype explicitly.
        // @see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Reflect.setPrototypeOf(this, StoreException.prototype);
    }
}
