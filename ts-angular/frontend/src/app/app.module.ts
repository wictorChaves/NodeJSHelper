import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';
import { UsersComponent }                   from './pages/users/users.component';
import { HttpClientModule }                 from '@angular/common/http';
import { ListComponent }                    from './pages/users/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent }                     from './pages/users/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
