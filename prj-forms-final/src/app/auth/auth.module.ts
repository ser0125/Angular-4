import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [SiginComponent, SignupComponent],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {

}
