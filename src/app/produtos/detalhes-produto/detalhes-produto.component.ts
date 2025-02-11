import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { ServicoProdutosService } from '../../servico-produtos.service';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoDeComprasService } from '../../carrinho-de-compras.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: false,
  
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidadeCarrinho: number = 1;

  constructor(
    private route: ActivatedRoute,
    private servicoProdutos: ServicoProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinho: CarrinhoDeComprasService
    ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.servicoProdutos.getOne(produtoId);

  }

  adicionarAoCarrinho(produto: IProduto | undefined){
    var plural = '';
    if (!this.quantidadeCarrinho || produto == undefined){
      return
    }
    if (this.quantidadeCarrinho>Number(produto?.quantidadeEstoque)){
      this.notificacaoService.notificar("Quantidade insuficiente em estoque", "Ok")
      return
    }
    if (this.quantidadeCarrinho!=1){
      plural = 's'
    }
    this.carrinho.adicionarAoCarrinho(produto, this.quantidadeCarrinho)
    this.notificacaoService.notificar((`${this.produto?.descricao} foi adicionado ao Carrinho [${this.quantidadeCarrinho} unidade${plural}]`), "Ok");
    return
  }

}
