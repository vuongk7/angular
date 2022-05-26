import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }