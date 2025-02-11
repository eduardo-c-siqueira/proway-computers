import { Injectable } from '@angular/core';
import { IProdutoCarrinho, IProduto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoDeComprasService {

  carrinhoDeCompras: IProdutoCarrinho[] = [];
  total = 0;

  constructor() { }

  obtemCarrinho() {
    this.carrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.carrinhoDeCompras;
  }

  atualizaCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(this.carrinhoDeCompras))
  }

  adicionarAoCarrinho(item: IProduto, quantidade: number) {
    const cesta: IProdutoCarrinho = { ...item, quantidadeCarrinho: quantidade};
    this.carrinhoDeCompras?.push(cesta);
    this.atualizaCarrinho();
    }

  removerDoCarrinho(produtoID: number) {
    this.carrinhoDeCompras = this.carrinhoDeCompras.filter(item => item.id != produtoID);
    this.atualizaCarrinho();
  }

  calculaTotal() {
    this.total = this.carrinhoDeCompras.reduce( (prev, curr) => prev + (curr.preco*curr.quantidadeCarrinho), 0 );
    return this.total;
  }

  limparCarrinho() {
    this.carrinhoDeCompras = [];
    this.atualizaCarrinho();
  }

}