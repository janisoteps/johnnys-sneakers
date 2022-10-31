import {Injectable} from '@angular/core';
import { Product } from '../data/products';
import { HttpClient } from '@angular/common/http';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: Array<Product> = [];
    itemObserver: Subject<Array<Product>> = new Subject<Array<Product>>();

    constructor(
        private http: HttpClient
    ) {
        this.itemObserver.subscribe((value) => {
            this.items = value
        });
    }

    addToCart(product: Product) {
        this.items.push(product);
        this.itemObserver.next(this.items);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        this.itemObserver.next([]);

        return this.items;
    }

    getShippingPrices() {
        return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }
}
