import { Component } from '@angular/core';
import { CarrinhoDeComprasService } from '../carrinho-de-compras.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor (public carrinho: CarrinhoDeComprasService) {}

}
