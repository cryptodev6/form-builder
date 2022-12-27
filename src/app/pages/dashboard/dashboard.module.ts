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
  DxBulletModule,
  DxTemplateModule} from 'devextreme-angular';
  import {  } from 'devextreme-angular';
import { DashboardService } from './dashboard.service';
import { ConfigureComponent } from '../../_metronic/partials/content/widgets/configure/configure.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'configure',
        component: ConfigureComponent 
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
    DxTemplateModule,
    DxBulletModule,
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
