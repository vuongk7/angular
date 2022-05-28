import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path : 'home',
    component: HomepageComponent
  },
  {
    path: "product",
    component: ProductsComponent
  },
  {
    path:'manager',
    component: ManagerProductComponent
  },
  {
    path: 'detail',
    component: ProductsDetailComponent
  },
  {
    path: 'product-add',
    component: ProductsAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }