import {NgModule} from '@angular/core';

import {ContactComponent}   from './contact.component';
import {Routing} from './contact.routes';

@NgModule({
    imports: [Routing],
    exports: [],
    declarations: [ContactComponent],
    providers: [],
})
export class ContactModule {
}
