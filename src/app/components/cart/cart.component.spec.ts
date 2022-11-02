import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {CartComponent} from './cart.component';
import {FormBuilder} from "@angular/forms";

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CartComponent],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                FormBuilder
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
