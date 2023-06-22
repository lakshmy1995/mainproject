import { Component } from '@angular/core';
import { AllproductsService } from '../../services/allproducts.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {
  constructor(public productService: AllproductsService) { 
    this.productService.getProducts()// Initialize in the constructor
  }
}
