import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  public categoryData: any[] = []; // Initialize as an empty array
  // or
  constructor(public categoryService: CategoryService) { 
    this.categoryService.getCategory()// Initialize in the constructor
  }
}
