import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { ProductsAddComponent } from './pages/products-add/products-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    ProductsDetailComponent,
    ManagerProductComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }