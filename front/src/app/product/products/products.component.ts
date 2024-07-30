import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/products';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  sortOptions: SelectItem[];
  sortKey: string;
  sortOrder: number;
  sortField: string;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {  
    this.productService.getProducts().subscribe(data => {
      this.products = data.data;
    });

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];  
  } 

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
