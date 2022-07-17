import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './userhome/home.component';
import { PropertyComponent} from './property/property.component';
import { OrderComponent} from './order/order.component';
import { Home1Component } from './home1/home1.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'home1',
    component: Home1Component
  },

  {
    path: 'order',
    component: OrderComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'Property',
    component: PropertyComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
