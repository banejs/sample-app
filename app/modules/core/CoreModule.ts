import StoreInterface from '../../lib/Store/StoreInterface';

import Module from '../../lib/Module/Module';

export default class CoreModule extends Module {
    public register(): void {}

    public boot(): void {}

    public registerStore(): { [storeName: string]: StoreInterface } {
        return {};
    }
}
