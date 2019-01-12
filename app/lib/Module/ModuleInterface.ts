import StoreInterface from '../Store/StoreInterface';

export default interface ModuleInterface {
    /**
     * Register method, called when application started.
     *
     * @return {?Promise<void>}
     */
    register(): void | Promise<void>;

    /**
     * Boot method, called right before the request route.
     *
     * @return {?Promise<void>}
     */
    boot(): void | Promise<void>;

    /**
     * Registers stores.
     *
     * @return {{[storeName: string]: StoreInterface}}
     */
    registerStore(): { [storeName: string]: StoreInterface };
}
