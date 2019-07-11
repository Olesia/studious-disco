import {ProductCategory} from 'src/app/products/models/product-category.enum';

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
  }

export class ProductModel implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public isAvailable: boolean,
    public category: ProductCategory,
    public availableSizes: number[]
  ) {
    this.id = id || null;
    this.name = name;
    this.description = description;
    this.price = price || 0;
    this.isAvailable = isAvailable || false;
    this.category = category;
    this.availableSizes = availableSizes || [];
  }
}
