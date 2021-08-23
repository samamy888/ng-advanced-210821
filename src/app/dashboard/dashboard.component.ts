import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { $ } from 'protractor';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute) { }

  ngOnInit():void{
    chartAreaDemo();
    chartPieDemo();
  }
  gotoUtilitiesColor1(type:number,name:string){
    this.router.navigate([`/utilities/color/${type}`],{
        queryParams:{
          name:name
        }
    });
  }
  gotoUtilitiesColor2(type:number,name:string){
    this.router.navigateByUrl('/utilities/color/'+type+'?name='+name);
  }
}
