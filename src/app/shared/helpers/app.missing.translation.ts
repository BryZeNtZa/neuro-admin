import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class AppMissingTranslationHelper implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return params.key;
    }
}
