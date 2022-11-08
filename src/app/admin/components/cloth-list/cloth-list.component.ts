import { Component, OnInit } from '@angular/core';
import { CothService } from 'src/app/admin/service/coth.service';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.scss']
})
export class ClothListComponent implements OnInit {

  public clothList:any;

  constructor(private clothService:CothService) { }

  ngOnInit(): void {
    this.getAllcloth()
  }
 getAllcloth(){
  this.clothService.getAllCloth().subscribe((res:any)=>{
    console.log('get all',res);
    this.clothList = res?.result;
    console.log('this.clothList',  this.clothList);

  })
 }



}
