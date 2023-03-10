import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../../../partials';
import {
  ConfigureService,
  Longtab,
  SimpleProduct,
  Tab,
} from './configure.service';
import { lastValueFrom } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent {

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
  gridBoxValue1: number[] = [3];
  isGridBoxOpened: boolean;
  gridDataSource: any;
  gridDataSource1: any;
  gridColumns = ['CompanyName', 'City', 'Phone'];
  popupVisible = false;
  popupVisible1=false;
  popupTitle: string;
  demo = [
    {
      Nombre: 'Nombre personalización 1',
      Abreviatura: 'A',
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
      Nombre: 'Nombre personalización 2',
      Abreviatura: 'B',
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
      Nombre: 'Nombre personalización 3',
      Abreviatura: 'C',
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
      Nombre: 'Nombre personalización 4',
      Abreviatura: 'D',
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
      Nombre: 'Nombre personalización 5',
      Abreviatura: 'E',
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
      Nombre: 'Nombre personalización 6',
      Abreviatura: 'F',
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
      Nombre: 'Nombre personalización 7',
      Abreviatura: 'G',
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
      Nombre: 'Nombre personalización 8',
      Abreviatura: 'H',
      Descripción: 'Nombre del filtro por defecto que tendra el listado',
      Obligatorio: 'No',
      Único: 'No',
      Posición: '1',
      'Nro Secuencia': '1',
      'Tipo de Dato': 'Caracteres',
      Máscara: '',
      Dominio: '',
      'Por Defecto': 'I',
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
  // @ViewChild('modal') private modalComponent1: ModalComponent;

  constructor(
    private configureService: ConfigureService,
    private httpClient: HttpClient
  ) {

    console.log("==  configuaration  cccccccccccc")
    this.longtabs = configureService.getLongtabs();
    this.tabs = configureService.getTabs();
    this.tabContent = this.tabs[0].content;
    this.simpleProducts = configureService.getSimpleProducts();
    this.isGridBoxOpened = false;
    this.gridDataSource = this.makeAsyncDataSource(
      this.httpClient,
      'customers.json'
    );
    this.gridDataSource1 = this.makeAsyncDataSource(
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

    console.log("==  configuaraiont model clicked");
    return await this.modalComponent.open();
  }

  onGridBoxOptionChanged(e: any) {
 
    
    if (e.name === 'text') {
      console.log("===== <<< event ===  onGridBoxOptionChanged",e);
        this.isGridBoxOpened = false;
      }
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
    }
  }
  
  onGridBoxOptionChanged1(e: any) {

    if (e.name === 'text') {
      
    console.log("===== <<< event ===  onGridBoxOptionChanged1",e);
      this.isGridBoxOpened = false;
    }
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
    }
  }

  gridBox_displayExpr(item: any) {
    return item && `${item.CompanyName} <${item.Phone}>`;
  }
  selectTab(event: any) {
    // console.log('event: ', event);
    // console.log('event event : ', event.event);
    // console.log('event.element: ', event.element);
    // console.log('event.compenent: ', event.compenent);
    // console.log('event.itemData.text:',event.itemData.text);
    // console.log('this.tabs[e.itemIndex].content',this.tabs[event.itemIndex].content)


    
    
    if(event.itemData.text=='Listado'){
      console.log('modalComponent');
      this.popupVisible = true;
      this.popupTitle = event.itemData.text;
    }
    else{
      console.log('modalComponent1');
      this.popupVisible1 = true;
      this.popupTitle = event.itemData.text;
    }
  }
  closePopup(){
    this.popupVisible = false;
    this.popupVisible1 = false;
  }
}
