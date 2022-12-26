import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent {
  constructor() {}
  
  showFilter: boolean = false;
  filter()
  {
    this.showFilter = !this.showFilter;
  }
}
