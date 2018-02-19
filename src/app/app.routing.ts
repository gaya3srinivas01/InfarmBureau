import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search-component/search.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
]

export const routing = RouterModule.forRoot(APP_ROUTES);