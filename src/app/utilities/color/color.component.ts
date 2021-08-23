import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  type: number;

  constructor(private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
    this.type = 0;
    this.route.snapshot.paramMap.get('type'); // 取得當下的參數值
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.type = +params.get('type'); // 參數變動時取得新值

    });
  }

}
