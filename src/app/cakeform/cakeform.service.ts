import { Injectable } from '@angular/core';
import { Product } from '../cart/entity/product.entity';

@Injectable()
export class CartService {
    public cakedetail: Array<Product> = [];

    StoreAllCakeDetails(data) {
        this.cakedetail = data;
        // console.log(this.cakedetail);
    }

    findAll(): Product[] {
            return this.cakedetail;
        }

    find(id: string): Product {
            return this.cakedetail[this.getSelectedIndex(id)];
        }

        private getSelectedIndex(id: string) {
                for (let i = 0; i < this.cakedetail.length; i++) {
                    if (this.cakedetail[i].id === id) {
                        return i;
                    }
                }
                return -1;
            }

}
