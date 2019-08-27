import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';



import { MatExpansionModule } from '@angular/material/expansion';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import { RouterModule, Routes, Router } from '@angular/router';
import {  MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceService } from './service.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { RecommendComponent } from './recommend/recommend.component';
import { RecommendService } from './recommend.service';
import { UnrecommendService } from './unrecommend.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { RouterService } from './router.service';




const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'recommend', component: RecommendComponent,canActivate: [AuthGuard] },
  { path: 'searchbar', component: SearchbarComponent,canActivate: [AuthGuard] },
  { path: 'updateprofile', component:UpdateprofileComponent,canActivate: [AuthGuard] }
  /*{ path: 'add-user', component: }*/
 

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SignUpComponent,
    
  
    
    RecommendComponent,
    
    SearchbarComponent,
    
    UpdateprofileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   

    
  

    
    
    
  ],
  providers: [UserService,RecommendService,UnrecommendService,HttpClient,
    AuthenticationService,
    RouterService,
    AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
