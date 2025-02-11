import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor( private snackBar: MatSnackBar) { }

  notificar(mensagem: string, acao: string){

    this.snackBar.open(mensagem, acao, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })

  }

}
