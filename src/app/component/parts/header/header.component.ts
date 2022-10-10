import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public primaryBackGroundColor: string | undefined;
  public primaryTextColor: string | undefined;
  public style: Object | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.primaryStyle();
  }

  goTop() {
    this.router.navigate(['']);
  }

  goInfo() {
    this.router.navigate(['info']);
  }

  goPickUp() {
    this.router.navigate(['pickUp']);
  }

  primaryStyle() {
    this.primaryBackGroundColor = '#F7B233';
    this.primaryTextColor = '#FFFFFF';
    this.style = {'background-color': this.primaryBackGroundColor, 'color': this.primaryTextColor };
  }

}
