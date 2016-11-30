import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about.component';

export const routes: Routes = [
    {path: '', component: AboutComponent},
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);