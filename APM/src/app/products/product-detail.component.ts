import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'


@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _router: Router,
            private _route: ActivatedRoute,
            private _productService: ProductService) { }

    ngOnInit(): void { 
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
       //this.product = this._productService.getProduct(id);
        

    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}