import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { SimulationComponent } from './simulation/simulation.component';
import { ParameterComponent } from './parameter/parameter.component';
import { ResultComponent } from './result/result.component';
import { OptionComponent } from './option/option.component';


@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    ParameterComponent,
    ResultComponent,
    OptionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
