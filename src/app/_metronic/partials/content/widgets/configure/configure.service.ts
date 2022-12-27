// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConfigureService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';

export class Tab {
  id: number;

  text: string;

  icon: string;

  content: string;
}

export class Longtab {
  text: string;
}

const tabs: Tab[] = [
  {
    id: 0,
    text: 'user',
    icon: 'user',
    content: 'User tab content',
  },
  {
    id: 1,
    text: 'comment',
    icon: 'comment',
    content: 'Comment tab content',
  },
  {
    id: 2,
    text: 'find',
    icon: 'find',
    content: 'Find tab content',
  },
];

const longtabs: Longtab[] = [
  { text: 'Listado' },
  { text: 'Lista de Valores' },
];


export class SimpleProduct {
  Name: string;

  ID: number;
}

const simpleProducts:SimpleProduct[] = [
  { Name: 'HD Video Player', ID: 0 },
  { Name: 'SuperHD Video Player', ID: 1 },
  { Name: 'SuperPlasma 50', ID: 2 },
  { Name: 'SuperLED 50', ID: 3 },
  { Name: 'SuperLED 42', ID: 4 },
  { Name: 'SuperLCD 55', ID: 5 },
  { Name: 'SuperLCD 42', ID: 6 },
  { Name: 'SuperPlasma 65', ID: 7 },
  { Name: 'SuperLCD 70', ID: 8 },
  { Name: 'Projector Plus', ID: 9 },
  { Name: 'Projector PlusHT', ID: 10 },
  { Name: 'ExcelRemote IR', ID: 11 },
  { Name: 'ExcelRemote Bluetooth', ID: 12 },
  { Name: 'ExcelRemote IP', ID: 13 },
];

@Injectable()
export class ConfigureService {

  constructor() { }

  getTabs(): Tab[] {
    return tabs;
  }

  getLongtabs(): Longtab[] {
    return longtabs;
  }
  getSimpleProducts(): SimpleProduct[] {
    return simpleProducts;
  }
}
