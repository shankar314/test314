import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts() {
    return [ { id: 1, name: 'weewewfdffg' },
    { id: 2, name: 'qwqwqw' },
    { id: 3, name: 'Bombqwqwwasto' },
    { id: 4, name: 'Celeddsdsritas' },
    { id: 5, name: 'Magnddddeta' },
    { id: 6, name: 'RubbefffrMan' },
    { id: 7, name: 'Dynacccma' },
    { id: 8, name: 'Dr ccccIQ' },
    { id: 9, name: 'Magmccccaaaa' },
    { id: 10, name: 'Tornddddwrado' }];
  }
}
