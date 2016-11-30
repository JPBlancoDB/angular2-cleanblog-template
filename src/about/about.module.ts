import {NgModule} from '@angular/core';

import {AboutComponent} from './about.component';
import {Routing} from './about.routes';

@NgModule({
    imports: [Routing],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule {
}
