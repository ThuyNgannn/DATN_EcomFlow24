import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ProductComponent } from './client/product/product.component';
import { PagenotfoundComponent } from './client/pagenotfound/pagenotfound.component';


const appRouter : Routes = [
  {
      path : '',
      component: HomeComponent
  },
  {
      path : 'product',
      component: ProductComponent
  },
  {
      // khi một router nào được gọi mà không có trong phần appRouter thì NotFoundComponent được gọi ra
      path : '**',  
      component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
