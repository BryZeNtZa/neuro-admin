import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Import our global variables and settings
import { AppGlobalSettings } from '@shared/settings/app.global.settings';
import { AppUtils } from '@shared/helpers/app.utils';

// Import vendors (third parties) modules
import { AngularMaterialModule } from '@shared/vendors/angular-material.module';

// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

// Import shares modules
import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { EnumValue } from './helpers/enum.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppWidgetsModule, // .forRoot(),
    NgbModule, // pay attention might already imported in AppWidgetsModule
    AppLayoutsModule,
    FontAwesomeModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule,
    FontAwesomeModule
  ]
})
export class AppSharedModules {
  static forRoot() {
    return {
      ngModule: AppSharedModules,
      providers: [
        AppGlobalSettings,
        AppUtils,
      ]
    };
  }
}
