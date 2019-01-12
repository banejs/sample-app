import { types, IAnyModelType, IAnyType, ModelPropertiesDeclaration } from 'mobx-state-tree';

import StoreCollectionInterface from './StoreCollectionInterface';
import InvalidArgumentException from './Exceptions/InvalidArgumentException';

export default class StoreCollection implements StoreCollectionInterface {
    private collection: { [identifier: string]: ModelPropertiesDeclaration } = {};

    /**
     * Register store object.
     *
     * @param {string} identifier - Store name.
     * @param {ModelPropertiesDeclaration} store - Store object.
     *
     * @throws {InvalidArgumentExceptionInterface}
     */
    public register(identifier: string, store: ModelPropertiesDeclaration): void {
        if (typeof this.collection[identifier] !== 'undefined') {
            throw new InvalidArgumentException(`Identifier "${identifier}" already exists in store`);
        }

        this.collection[identifier] = store;
    }

    public create(): IAnyType {
        const storeModel: IAnyModelType = types.model();

        return storeModel.create({});
    }
}
