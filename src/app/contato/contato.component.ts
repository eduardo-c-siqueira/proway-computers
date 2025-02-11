import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  standalone: false,
  
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  private fb = inject(FormBuilder);

  formContato = this.fb.group({
    nome: ["", [Validators.minLength(4), Validators.required]],
    assunto:["", [Validators.minLength(10), Validators.required]],
    telefone:["", [Validators.minLength(11), Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    mensagem: ["", [Validators.minLength(20), Validators.required]]
  })

  constructor ( private notificacao: NotificacaoService) {  }

  enviarFormulario() {
    this.notificacao.notificar("A mensagem foi enviada com sucesso!", "Ok")
    this.formContato.reset();
  }
}
