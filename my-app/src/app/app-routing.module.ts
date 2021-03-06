import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

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
    path: 'detail',
    component: ProductsDetailComponent
  },
  {
    path: 'product/add',
    component: ProductsAddComponent
  },
 {
  path: 'product/edit/:id',
  component: ProductEditComponent
 },
 {
  path : '',
  component: HeaderComponent
},
{
  path : 'signup',
  component: SignupComponent
},
{
  path : 'signin',
  component: SigninComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }