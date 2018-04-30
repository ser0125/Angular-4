import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const authRoutes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SiginComponent}
];


@NgModule({
    imports: [RouterModule.forChild(authRoutes) ],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
