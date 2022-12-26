import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { DxTabsModule, 
  DxSelectBoxModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxDataGridModule,
  DxCheckBoxModule,
  DxPopupModule, 
  DxButtonModule,
  DxTemplateModule} from 'devextreme-angular';
  import {  } from 'devextreme-angular';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    DxTabsModule,
    DxSelectBoxModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
