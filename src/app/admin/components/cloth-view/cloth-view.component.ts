import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Cloth } from '../../model/cloth.model';
import { CothService } from '../../service/coth.service';

@Component({
  selector: 'app-cloth-view',
  templateUrl: './cloth-view.component.html',
  styleUrls: ['./cloth-view.component.scss']
})
export class ClothViewComponent implements OnInit {

  public cloth:Cloth=new Cloth();
  public id :any;
  public view:any
  public getsingleList: any;
  public button = 'Save';
  constructor(private clothService:CothService,private config: NgSelectConfig,private activateroute:ActivatedRoute,
    private router:Router) {

    this.activateroute.queryParams.subscribe((res:any)=>{
      console.log('res',res);

      this.id=res.id
      console.log('edit',this.id);
    })
   }

  ngOnInit(): void {
      this.getSingleCloth();
  }

 public type=['Men','Women']

  saveCloth(){

    if(this.id){
      this.button='Update'
      this.clothService.updateCloth(this.cloth).subscribe((res:any)=>{
        console.log('res',res);

      })
    }
    else
    {
      this.button='Save'
      this.clothService.ClothSave(this.cloth).subscribe((res:any)=>{
        console.log('data',res);

      })

    }
  }

  getSingleCloth(){
     this.clothService.getSingleCloth(this.id).subscribe((res:any)=>{
      console.log('getSingleCloth',res);
      this.getsingleList=res?.result
      this.cloth= this.getsingleList
     })
  }


  // edit(id:any){
  //   this.clothService.updateCloth().subscribe((res:any)=>{
  //     console.log('res',res);

  //   })
  // }
  }


