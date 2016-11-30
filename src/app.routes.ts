import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
    { path: '',       component: MainComponent },
    { path: 'about',   loadChildren: './dist/about/about.module#AboutModule' },
    { path: ':slug',   loadChildren: './dist/post/post.module#PostModule' }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);