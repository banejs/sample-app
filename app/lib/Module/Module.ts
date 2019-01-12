import ModuleInterface from './ModuleInterface';
import StoreInterface from '../Store/StoreInterface';

export default class Module implements ModuleInterface {
    /**
     * Register method, called when application started.
     */
    public register(): void {}

    /**
     * Boot method, called right before the request route.
     */
    public boot(): void {}

    /**
     * Registers stores.
     *
     * @return {{[storeName: string]: StoreInterface}}
     */
    public registerStore(): { [storeName: string]: StoreInterface } {
        return {};
    }
}
