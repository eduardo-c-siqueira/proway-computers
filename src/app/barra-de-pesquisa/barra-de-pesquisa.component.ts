import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  standalone: false,
  
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrl: './barra-de-pesquisa.component.css'
})
export class BarraDePesquisaComponent {

  descricao: string = "";

  constructor(private router: Router) { }

  pesquisar() {
    if(this.descricao) {
      this.router.navigate(['produtos'], { queryParams: { descricao: this.descricao } });
      return
    }
  }
}