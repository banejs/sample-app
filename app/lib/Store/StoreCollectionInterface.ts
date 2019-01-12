export default interface StoreCollectionInterface {
    /**
     * Register store object.
     *
     * @param {string} identifier - Store name.
     * @param {*} store - Store object.
     *
     * @throws {InvalidArgumentExceptionInterface}
     */
    register(identifier: string, store: any): void;

    create(): any;
}
