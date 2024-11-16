import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';

export const routes: Routes = [
    { 
        path: '', 
        component: LayoutComponent, 
        children: [
            {
              path: 'home', // child route path
              component: FirstPageComponent, // child route component that the router renders
            },
        ]
    },
];
