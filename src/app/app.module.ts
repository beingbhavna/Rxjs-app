import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { FirstComponentComponent } from './component/first-component/first-component.component';
// import { SecondComponentComponent } from './component/second-component/second-component.component';
// import { ThirdComponentComponent } from './component/third-component/third-component.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        // FirstComponentComponent,
        // SecondComponentComponent,
        // ThirdComponentComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
