import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string=""
  @Input()
  gameDemo:string=""
  @Input()
  gameName:string=""
  @Input()
  gamePrice:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
