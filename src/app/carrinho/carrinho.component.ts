import { Component, OnInit } from '@angular/core';
import { CarrinhoDeComprasService } from '../carrinho-de-compras.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{

  carrinhoDeCompras: IProdutoCarrinho[] = [];
  total = 0;


  constructor( public carrinho: CarrinhoDeComprasService, private notificacao: NotificacaoService, private router: Router
  ){
  }

  ngOnInit(): void {
    this.carrinhoDeCompras = this.carrinho.obtemCarrinho();
    this.total = this.carrinho.calculaTotal();
  }

  removerDoCarrinho(produtoID: number) {
    this.carrinhoDeCompras = this.carrinhoDeCompras.filter( item => item.id != produtoID);
    this.carrinho.removerDoCarrinho(produtoID);
    this.atualizaTotal();
  }

  atualizaTotal() {
    this.carrinho.carrinhoDeCompras = this.carrinhoDeCompras;
    this.carrinho.atualizaCarrinho();
    this.total = this.carrinho.calculaTotal();
  }

  comprar() {
    this.notificacao.notificar("Compra efetuada com sucesso", "Continuar comprando");
    this.limparCarrinho();
    this.router.navigateByUrl('produtos');
  }

  limparCarrinho() {
    this.carrinhoDeCompras = [];
    this.atualizaTotal();
  }

}
