import { Component, OnInit } from '@angular/core';
//My imports
import { ActivatedRoute } from '@angular/router';
import {Product, products } from '../products';
// New for Managing Data
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //Define the product property
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }

  ngOnInit(){
    //First geth the product id form the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number (routeParams.get('productId'));

    //Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
