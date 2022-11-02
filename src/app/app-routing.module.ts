import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CartComponent} from "./components/cart/cart.component";
import {ShippingComponent} from "./components/shipping/shipping.component";

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        title: 'Johnny\'s sneakers'
    },
    {
        path: 'products/:productId',
        component: ProductDetailsComponent,
        title: 'Johnny\'s sneakers'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Johnny\'s sneakers'
    },
    {
        path: 'shipping',
        component: ShippingComponent,
        title: 'Johnny\'s sneakers'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
