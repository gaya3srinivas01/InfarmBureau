import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { NoresultComponentComponent } from './noresult-component/noresult-component.component';
import { SearchComponent } from './search-component/search.component';
import { routing } from './app.routing';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './services/client.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorComponentComponent,
    NoresultComponentComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
        FormsModule,
        routing,
    ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
