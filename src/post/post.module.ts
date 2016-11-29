import {NgModule} from '@angular/core';

import { PostComponent }   from './post.component';
import { Routing } from './post.routes';

@NgModule({
    imports: [Routing],
    exports: [],
    declarations: [PostComponent],
    providers: [],
})
export class PostModule {
}
