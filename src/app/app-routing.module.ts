import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TipsComponent } from './tips/tips.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

