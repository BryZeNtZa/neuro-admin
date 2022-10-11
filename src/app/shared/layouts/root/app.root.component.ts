import { Component } from '@angular/core';

import { AppCoreComponent } from '@app/app.core.component';
import { AppServiceLocator } from '@app/app.service.locator';
import { AppAuthService } from '@modules/auth/services/app.auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.root.component.html',
})
export class AppRootComponent extends AppCoreComponent {
}
