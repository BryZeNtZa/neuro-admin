import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AppGlobalSettings {
    static readonly appName: string = 'Acajou DSF';
    static readonly apiUrl: string = `${env.host}:${env.port}`;
    static readonly appAssetsPath: string = 'MyApplication/';
}
