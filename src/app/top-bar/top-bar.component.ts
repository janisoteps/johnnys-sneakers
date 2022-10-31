import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../products";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
    items: Array<Product>;

    constructor(
        private cartService: CartService
    ) {
        this.items = cartService.items;
    }

    ngOnInit(): void {
        this.cartService.itemObserver.subscribe((newItemList: Array<Product>) => {
            this.items = newItemList;
        });
    }
}
