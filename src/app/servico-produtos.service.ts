import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ServicoProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): IProduto[] | undefined {
    return this.produtos;
  }

  getOne(produtoId: number): IProduto | undefined {
    return this.produtos.find( produto => produto.id == produtoId);
  }

}
