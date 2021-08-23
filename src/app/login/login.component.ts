import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  origBodyClass :string;
  constructor (@Inject(DOCUMENT) private document: Document,private route:ActivatedRoute,private router:Router) {}

  doLogin(){
    let url = this.route.snapshot.paramMap.get('returnUrl');
    console.group('Url---------');
    console.log(url);
    console.groupEnd();
    localStorage.setItem('token','123');
    this.router.navigateByUrl(url);
  }
  ngOnInit(): void {
    this.origBodyClass = this.document.body.className;
    this.document.body.className = "bg-gradient-primary";
  }
  ngOnDestroy(): void {
    this.document.body.className = this.origBodyClass;
  }
}
