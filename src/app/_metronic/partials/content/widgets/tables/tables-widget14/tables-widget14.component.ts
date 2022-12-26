import { Component, Input, OnInit } from '@angular/core';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';

@Component({
  selector: 'app-tables-widget14',
  templateUrl: './tables-widget14.component.html',
  styleUrls: ['./tables-widget14.component.scss']
})
export class TablesWidget14Component implements OnInit {

  @Input() dataSource:any
  constructor() { }
  ngOnInit(): void {
  }

}
