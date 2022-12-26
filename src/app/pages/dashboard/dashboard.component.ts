import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import {
  DashboardService,
  Longtab,
  SimpleProduct,
  Tab,
} from './dashboard.service';
import { lastValueFrom } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  longtabs: Longtab[];
  simpleProducts: SimpleProduct[];
  searchModeOption = 'contains';
  searchExprOption: any = 'Name';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;
  showDataBeforeSearchOption = false;
  tabs: Tab[];
  tabContent: string;
  gridBoxValue: number[] = [3];
  isGridBoxOpened: boolean;
  gridDataSource: any;
  gridColumns = ['CompanyName', 'City', 'Phone'];
  popupVisible = false;
  popupTitle: string;
  demo = [
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
    {
      Nombre: 'Nombre personalización',
      Abreviatura: '',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': '',
      '% Promedio de Uso': '',
      'Longitud Máxima': '100',
      'Número decimales': '',
      'Fórmula Cálculo': '',
      Nota: '',
    },
  ];

  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel',
  };
  @ViewChild('modal') private modalComponent: ModalComponent;

  constructor(
    private dashboardService: DashboardService,
    private httpClient: HttpClient
  ) {
    this.longtabs = dashboardService.getLongtabs();
    this.tabs = dashboardService.getTabs();
    this.tabContent = this.tabs[0].content;
    this.simpleProducts = dashboardService.getSimpleProducts();
    this.isGridBoxOpened = false;
    this.gridDataSource = this.makeAsyncDataSource(
      this.httpClient,
      'customers.json'
    );
  }

  makeAsyncDataSource(http: HttpClient, jsonFile: string) {
    return new CustomStore({
      loadMode: 'raw',
      key: 'ID',
      load() {
        return lastValueFrom<any>(
          http.get(
            `https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/${jsonFile}`
          )
        );
      },
    });
  }

  // selectTab(e: any) {
  //   this.tabContent = this.tabs[e.itemIndex].content;
  // }

  async openModal() {
    return await this.modalComponent.open();
  }

  onGridBoxOptionChanged(e: any) {
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
    }
  }
  gridBox_displayExpr(item: any) {
    return item && `${item.CompanyName} <${item.Phone}>`;
  }
  selectTab(event: any) {
    console.log('event: ', event);
    this.popupVisible = true;
    this.popupTitle = event.itemData.text;
  }
  closePopup(){
    this.popupVisible = false;

  }
}
