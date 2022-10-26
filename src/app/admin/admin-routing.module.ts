import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothComponent } from './components/cloth/cloth.component';

const routes: Routes = [
  {
    path:'cloth',component:ClothComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
