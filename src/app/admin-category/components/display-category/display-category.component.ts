import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent {
  public categoryData: any[] = []; // Initialize as an empty array
  // or
  constructor(public categoryService: CategoryService) { 
    this.categoryService.getCategory()// Initialize in the constructor
  }
}
