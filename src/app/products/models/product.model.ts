import { ProductCategory } from 'src/app/products/models/product-category.enum';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}

export class ProductModel implements IProduct {
  constructor(
    public id: number = null,
    public name: string,
    public description: string,
    public price: number = 0,
    public isAvailable: boolean = false,
    public category: ProductCategory,
    public availableSizes: number[] = [],
    public selectedSize: number = 0,
    public reviews: string[] = []
  ) {
  }
}
