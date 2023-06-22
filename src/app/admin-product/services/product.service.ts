import { Injectable } from '@angular/core';
import { productData } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
    productData : productData[] =[
    {
      id:1,
      image:"../../assets/images/Rectangle 5.png",
      category: 'Skin Care',
      productName:'ASUS X144SUV',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    },
    {
      id:2,
      image:"../../assets/images/Rectangle 5-1.png",
      category: 'Laptops & PC',
      productName:'Iphone 14',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    },
    {
      id:3,
      image:"../../assets/images/Rectangle 5-2.png",
      category: 'Smartphones',
      productName:'ASUS Zenbook',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    },
    {
      id:4,
      image:"../../assets/images/Rectangle 5-3.png",
      category: 'Fashion',
      productName:'SAMSUNG A51',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    },
    {
      id:5,
      image:"../../assets/images/Rectangle 5-4.png",
      category: 'Electronics',
      productName:'Baju Wanita',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    },
    
    {
      id:6,
      image:"../../assets/images/Rectangle 5-5.png",
      category: 'Lifestyle',
      productName:'Tas Kece',
      productDesc:'lorem ipsum decorum consectetur',
      amount:2800
    }
    
    

  ]

  getProducts(){
    return this.productData;
  }
}
