import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.routes';

import {AppComponent}   from './app.component';
import {FooterComponent}   from './footer/footer.component';
import {HeaderComponent}   from './header/header.component';
import {NavigationComponent}   from './navigation/navigation.component';
import {MainComponent}   from './home/main/main.component';
import {PostPreviewComponent}   from './home/post-preview/post-preview.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        Routing
    ],
    exports: [],
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavigationComponent,
        MainComponent,
        PostPreviewComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
