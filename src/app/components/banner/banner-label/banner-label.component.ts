import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-label',
  templateUrl: './banner-label.component.html',
  styleUrls: ['./banner-label.component.scss']
})
export class BannerLabelComponent implements OnInit {
  @Input()
  title: string="";
  @Input()
  content: string="";
  @Input()
  buttonName: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
