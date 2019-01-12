import counter from 'app/modules/example/providers/counter';

const Providers = {
    register(name, dependencies, provider) {
        if (!provider) {
            provider = dependencies;
        }

        return this;
    }
};

export default Providers
    .register('counter', counter)
    .register('greeting', ['counter'], (data: { counter: number }): string => (
        `Hello, your desktop counter initial valise is ${data.counter}`
    ));
