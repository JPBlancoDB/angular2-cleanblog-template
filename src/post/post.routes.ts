import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostComponent} from './post.component';

const routes: Routes = [
    { path: '', component: PostComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);