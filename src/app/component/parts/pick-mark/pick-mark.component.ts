import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pick-mark',
  templateUrl: './pick-mark.component.html',
  styleUrls: ['./pick-mark.component.css']
})
export class PickMarkComponent implements OnInit {
  @Input() yoteiId: number;
  @Input() pickIds: Array<number>;
  @Input() pickButtonId: number;

  public buttonId: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    this.pickButtonId;
    // console.log(this.pickButtonId);
  }

}
