import InvalidArgumentExceptionInterface from './InvalidArgumentExceptionInterface';

import StoreException from './StoreException';

export default class InvalidArgumentException extends StoreException implements InvalidArgumentExceptionInterface {
    public name: string = 'InvalidArgumentException';

    public constructor(message?: string, code: string = 'E_STORE_INVALID_ARGUMENT', status: number = 500) {
        super(message || 'Invalid store argument', code, status);

        // Set the prototype explicitly.
        // @see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Reflect.setPrototypeOf(this, InvalidArgumentException.prototype);
    }
}
