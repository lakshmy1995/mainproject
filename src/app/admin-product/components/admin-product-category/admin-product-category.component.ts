import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-product-category',
  templateUrl: './admin-product-category.component.html',
  styleUrls: ['./admin-product-category.component.css']
})
export class AdminProductCategoryComponent {
  public categoryData: any[] = []; // Initialize as an empty array
  // or
  constructor(public categoryService: CategoryService) { 
    this.categoryService.getCategory()// Initialize in the constructor
  }
}
