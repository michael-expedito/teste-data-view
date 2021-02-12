import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[] = [];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  @ViewChild('dv', { static: true }) dv!: DataView;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges()
    }, 1000);
  }

  ngOnInit() {
    this.products =
      [
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Bamboo Watch",
          "description": "Product Description",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "Accessories",
          "quantity": 24,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },

      ]
      ;
    this.ref.detectChanges()
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    this.ref.detectChanges()
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
    this.ref.detectChanges()
  }

  add() {
    this.products.push({
      "id": "1003",
      "code": "244wgerg2",
      "name": "Blue T-Shirt",
      "description": "Product Description",
      "image": "blue-t-shirt.jpg",
      "price": 29,
      "category": "Clothing",
      "quantity": 25,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    }
    );
    this.dv.updateTotalRecords();
    this.dv._value.push()
    this.ref.detectChanges()
  }

  remove() {
    this.products = new Array<Product>();
  }
}
