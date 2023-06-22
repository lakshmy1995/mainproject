import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categoryData : Category[] =[
    {
      category_id:1,
      image:"../../../assets/images/image 12.png",
      category_name: 'Skin Care',
    },
    {
      category_id:2,
      image:"../../../assets/images/image 12-1.png",
      category_name: 'Laptops & PC'
    },
    {
      category_id:3,
      image:"../../../assets/images/image 12-5.png",
      category_name: 'Smartphones'
    },
    {
      category_id:4,
      image:"../../../assets/images/image 12-3.png",
      category_name: 'Fashion'
    },
    {
      category_id:5,
      image:"../../../assets/images/image 12-5.png",
      category_name: 'Electronics'
    },
    
    {
      category_id:6,
      image:"../../../assets/images/image 12-4.png",
      category_name: 'Lifestyle'
    }

  ]


  getCategory(){
    return this.categoryData;
  }

}
