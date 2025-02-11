import { TestBed } from '@angular/core/testing';

import { ServicoProdutosService } from './servico-produtos.service';

describe('ServicoProdutosService', () => {
  let service: ServicoProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
