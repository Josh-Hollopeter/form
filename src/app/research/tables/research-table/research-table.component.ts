import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-table',
  templateUrl: './research-table.component.html',
  styleUrls: ['./research-table.component.css']
})
export class ResearchTableComponent{

  @Input()formValues: any;

  constructor() { }

}
