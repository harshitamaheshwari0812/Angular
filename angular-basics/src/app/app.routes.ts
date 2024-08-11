import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NoLayoutComponent } from './no-layout/no-layout.component';
import { ProductCardComponent } from './components/directves/product-card/product-card.component';

export const routes: Routes = [
    {path:'',component:AppLayoutComponent,
        children:[{path:'home',component:HomeComponent},
            {path:'',component:HomeComponent},
            {path:'directives',component:DirectivesComponent},
            {path:'product',component:ProductCardComponent}
        ],
    },
    {path:'',component:NoLayoutComponent,children:[
        {path:'**',component:PagenotfoundComponent}
    ]}
];
