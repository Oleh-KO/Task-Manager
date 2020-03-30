import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalregComponent } from './modalreg/modalreg.component';
import { ModallogComponent } from './modallog/modallog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModalComponent,
    ModalregComponent,
    ModallogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MainComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
