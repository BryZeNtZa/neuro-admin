import { Injector, Type } from '@angular/core';

/**
 * Custom service locator for DI purpose
 */
export class AppServiceLocator {

  static injector: Injector;

  public static getInstance<T>(serviceName: Type<T>): T {
    return this.injector.get(serviceName);
  }

  public static setInjector(injector: Injector) {
    this.injector = injector;
  }

}
