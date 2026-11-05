import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProductViewService {

  // private product: Product | undefined;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product | undefined> {
    const products = this.productService.getProducts();
        
    return products.pipe(
      map(products => products.find(product => product.id === id))
    );
  }

}
