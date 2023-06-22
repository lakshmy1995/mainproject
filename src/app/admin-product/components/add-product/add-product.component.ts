import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  myform!:FormGroup;

  constructor(private addproductService: ProductService)
  {
    
  }
  ngOnInit(){

    this.myform=new FormGroup ({
        pname:new FormControl(null,[Validators.required]),
        pcat:new FormControl(null,[Validators.required]),
       
        pstock:new FormControl(null,[Validators.required]),
        pprice:new FormControl(null,[Validators.required]),
        pdes:new FormControl(null,[Validators.required]),


        
      });

     

  }

  onSubmitForm() {
    console.log(this.myform);
    const inputdata = {
      pname: this.myform.value.pname,
      pcat: this.myform.value.pcat,
      pstock: this.myform.value.pstock,
      pprice: this.myform.value.pprice,
      pdes: this.myform.value.pdes,
    };
 
  }
 
}
