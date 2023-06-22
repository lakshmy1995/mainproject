export class Category
{ 
    category_id:number;
    image:string;
    category_name:string;

    constructor(category_id:number, image:string, category_name:string){
        this.category_id=category_id;
        this.image=image;
        this.category_name=category_name;
    }

}