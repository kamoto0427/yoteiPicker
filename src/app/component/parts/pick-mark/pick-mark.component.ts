import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pick-mark',
  templateUrl: './pick-mark.component.html',
  styleUrls: ['./pick-mark.component.css']
})
export class PickMarkComponent implements OnInit {
  @Input() yoteiId: number;
  @Input() pickIds: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
