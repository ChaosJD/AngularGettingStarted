import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
// Diese oberen Dateien befinden sich im selben Ordner.
// The @Component() definition also exports the class, ProductAlertsComponent, which handles functionality for // the component.


export class ProductAlertsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter;
  constructor(){}

  ngOnInit() {}

}
