import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { NewsComponent } from './news/news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: NewsComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit-news/:id',
    component: EditNewsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // NgxPopper,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewsComponent]
})
export class AppModule { }
