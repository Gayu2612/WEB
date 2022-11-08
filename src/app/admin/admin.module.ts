import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { ClothViewComponent } from './components/cloth-view/cloth-view.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
   ClothListComponent,
   ClothViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgSelectModule

  ]
})
export class AdminModule { }
