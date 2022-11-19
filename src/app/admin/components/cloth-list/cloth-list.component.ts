import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CothService } from 'src/app/admin/service/coth.service';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.scss']
})
export class ClothListComponent implements OnInit {

  public clothList:any;
	closeResult = '';
  public id:any;
  constructor(private clothService:CothService,private modalService: NgbModal) { }

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

 open(model:any) {
  // console.log('id',id);
  this.modalService.open(model, { ariaLabelledBy: 'modal-basic-title' }).result.then(

    (result) => {
      this.id = `Closed with: ${result}`;
    },
    (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}
delete(){
  
}
}
