import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClothListComponent } from './components/cloth/cloth-list/cloth-list.component';
import { ClothViewComponent } from './components/cloth-view/cloth-view.component';


@NgModule({
  declarations: [
   ClothListComponent,
   ClothViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
