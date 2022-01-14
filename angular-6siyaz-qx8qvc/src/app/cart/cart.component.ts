import { Component, OnInit } from '@angular/core';

// New for Managing Data
import { CartService } from '../cart.service';

//New for Using Forms for User Input
import {FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent { //outcomment: implements OnInit {

  items = this.cartService.getItems();
//New for Using Forms for User Input
checkoutForm = this.formBuilder.group({
  nmae: '',
  adress:''
});

  constructor( private cartService: CartService, private formBuilder: FormBuilder,) {
   
  }

  onSubmit(): void{
    //process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has ben submitted', this.checkoutForm.value);
    this.checkoutForm.reset()
  }
  ngOnInit(): void {
  }

}
