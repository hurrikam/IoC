'use strict';

export default class IoC {

    private readonly dependencies: {[dependencyType: string]: object} = { };

    public register(serviceType: string, service: object): void {
        if (!serviceType) {
            throw new Error('dependencyType must be a non empty string');
        }
        this.dependencies[serviceType] = service;
    }

    public resolve(dependencyType: string) {
        if (!dependencyType) {
            throw new Error('dependencyType must be a non empty string');
        }      
        return this.dependencies[dependencyType];
    }
}
