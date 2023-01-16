import { ChangeDetectorRef, Component, INJECTOR, Input, OnInit } from '@angular/core';
import { exportDataGrid as exportPdfDataGrid } from 'devextreme/pdf_exporter';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { jsPDF } from 'jspdf';
// import { Workbook } from 'exceljs';
import * as Excel from 'exceljs';
import { saveAs } from 'file-saver';
import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';

@Component({
  selector: 'app-tables-widget13',
  templateUrl: './tables-widget13.component.html',
  styleUrls: ['./tables-widget13.component.scss'],
})
export class TablesWidget13Component implements OnInit {
  @Input() dataSource: any;
  @Input() dataSource1:any;
  allowSearch: boolean;
  columnChooserModes: any;
  closeOnSelect: boolean = false;
  isDisableCheckBox: boolean = true;
  selectionChangedEvent: any = null;
  defaultVisible = false;
  
    IDWidth = ""
    CompanyNameWidth= ""
    AddressWidth = ""
    CityWidth = "" 
  

  constructor(private ref: ChangeDetectorRef) {
    this.onReorder = this.onReorder.bind(this); // drag module
    this.cloneIconClick = this.cloneIconClick.bind(this); //duplicate
  }

  ngOnInit(): void { 
    this.dataSource.map((el: any) => el.isHighlighted =false);
    this.IDWidth =  this.dataSource1[0].IDWidth;
    console.log("==this.IDWidth ",this.IDWidth);
    this.CompanyNameWidth = this.dataSource1[0].CompanyNameWidth;
    console.log("==this.CompanyNameWidth ",this.CompanyNameWidth);
    this.AddressWidth = this.dataSource1[0].AddressWidth;
    console.log("==this.AddressWidth ",this.AddressWidth);
    this.CityWidth = this.dataSource1[0].CityWidth;
    console.log("==this.CityWidth ",this.CityWidth);
   
  }
  // drag start
  async onReorder(e: any) {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.dataSource.findIndex(
      (item: any) => item.ID === visibleRows[e.toIndex].data.ID
    );
    const fromIndex = this.dataSource.findIndex(
      (item: any) => item.ID === e.itemData.ID
    );

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
      this.onExportingExcel(e);
    }
  }

  // duplicate record start
  isCloneIconVisible(e: any) {
    return !e.row.isEditing;
  }

  cloneIconClick(e: any) {
    const clonedItem =
    {
      ...e.row.data, ID: this.dataSource.length + 1,
      Address: e.row.data.isCopied ? e.row.data.Address : `${e.row.data.Address} ( copy )`,
      isCopied: true
    }; //commented by gaurav
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
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          'DataGrid.xlsx'
        );
      });
    });
    e.cancel = true;
  }

  highlightRecord(item: any) {
    console.log('item: ', item);
    this.dataSource.map((el: any) => {
      if (el.ID == item.data.ID) {
        el.isHighlighted = !el.isHighlighted;
      }
    });
    console.log('this.dataSource: ', this.dataSource);
  }
  selectionChanged(e: any) {
    e.component.collapseAll(-1);
    // e.component.expandRow(e.currentSelectedRowKeys[0]); //commented by gaurav 
    this.isDisableCheckBox = false;
    this.selectionChangedEvent = e;
  }
  handleValueChange(e: any) {
    if (this.selectionChangedEvent) {
      this.selectionChangedEvent.component.collapseAll(-1);
      this.selectionChangedEvent = null;
      this.isDisableCheckBox = true;
    }
    setTimeout(() => {
      this.closeOnSelect = false;
      this.ref.detectChanges();
    }, 300);
  }

  toggleDefault() {
    this.defaultVisible = !this.defaultVisible;
  }

}
