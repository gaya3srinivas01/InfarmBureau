import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search-component/search.component";
import { ClientListComponent } from "./client-list/client-list.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'clientList', component: ClientListComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);