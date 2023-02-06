import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pp',
  templateUrl: './card-pp.component.html',
  styleUrls: ['./card-pp.component.scss']
})
export class CardPpComponent implements OnInit {
  @Input()
  gameCover:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
