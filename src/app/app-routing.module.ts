import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimulationComponent }  from './simulation/simulation.component'
import { OptionComponent }  from './option/option.component'

const routes: Routes = [
  { path: 'simulation', component: SimulationComponent },
  { path: 'option', component: OptionComponent},
  { path: '', redirectTo: '/simulation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
