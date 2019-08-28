import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './signup/signup.component';
import { RecommendComponent } from './recommend/recommend.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [

    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'recommend', component: RecommendComponent,canActivate: [AuthGuard] },
    { path: 'searchbar', component: SearchbarComponent,canActivate: [AuthGuard] },
    { path:'edit',component:EditComponent},
    { path: 'updateprofile', component:UpdateprofileComponent,canActivate: [AuthGuard] }
    /*{ path: 'add-user', component: }*/
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
