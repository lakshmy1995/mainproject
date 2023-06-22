import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {
  public productData: any[] = []; // Initialize as an empty array
  // or
  constructor(public productService: ProductService,public dialog: MatDialog) { 
    this.productService.getProducts()// Initialize in the constructor
  }


  openModal() {
    this.dialog.open(AddProductComponent);
  }
}
