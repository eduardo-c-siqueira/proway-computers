import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ServicoProdutosService } from '../servico-produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: false,
  
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor( private servicoProdutos: ServicoProdutosService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const produtos = this.servicoProdutos.getAll();
    this.activatedRoute.queryParamMap.subscribe(params => { 
      const descricao = params.get("descricao")?.toLowerCase();
      if (descricao) {
        this.produtos = produtos?.filter(produto => produto.descricao.toLowerCase().includes(descricao));
      return
      }
      this.produtos = produtos;
      
    })
  }
}
