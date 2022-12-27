import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { exportDataGrid as exportPdfDataGrid } from 'devextreme/pdf_exporter';
import {exportDataGrid} from 'devextreme/excel_exporter';
import { jsPDF } from 'jspdf';
// import { Workbook } from 'exceljs';
import * as Excel from "exceljs";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tables-widget13',
  templateUrl: './tables-widget13.component.html',
  styleUrls: ['./tables-widget13.component.scss']
})
export class TablesWidget13Component implements OnInit {
  @Input() dataSource: any;

  constructor(private ref: ChangeDetectorRef) {
    this.onReorder = this.onReorder.bind(this); // drag module
    this.cloneIconClick = this.cloneIconClick.bind(this); //duplicate
  }

  ngOnInit(): void {}
  // drag start
  async onReorder(e: any) {
    // e.promise = this.processReorder(e);
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.dataSource.findIndex((item:any) => item.ID === visibleRows[e.toIndex].data.ID);
    const fromIndex = this.dataSource.findIndex((item:any) => item.ID === e.itemData.ID);

    this.dataSource.splice(fromIndex, 1);
    this.dataSource.splice(toIndex, 0, e.itemData);
    await e.component.refresh();
  }
  // drag end

  onExporting(e: any) {
    if (e.format == 'pdf') {
      const doc = new jsPDF();
      exportPdfDataGrid({
        jsPDFDocument: doc,
        component: e.component,
        indent: 5,
      }).then(() => {
        doc.save('Companies.pdf');
      });
    } else {
      this.onExportingExcel(e)
    }
  }

  // duplicate record start
  isCloneIconVisible(e: any) {
    return !e.row.isEditing;
  }

  cloneIconClick(e: any) {
    const clonedItem = { ...e.row.data, ID: this.dataSource.length + 1 };
    this.dataSource.splice(e.row.rowIndex, 0, clonedItem);
    this.ref.detectChanges();
    e.event.preventDefault();
  }
  // duplicate record end

  onExportingExcel(e: any) {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Employees');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer: any) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }
}
