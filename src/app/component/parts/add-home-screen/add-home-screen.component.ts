import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-home-screen',
  templateUrl: './add-home-screen.component.html',
  styleUrls: ['./add-home-screen.component.css']
})
export class AddHomeScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goAddHomeScreen() {
    this.router.navigate(['addHome']);
  }

}
