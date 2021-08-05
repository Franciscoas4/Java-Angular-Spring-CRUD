import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.css']
})
export class FuncionarioListaComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  private getFuncionarios() {
    this.funcionarioService.getListaFuncionarios().subscribe(data => {
      this.funcionarios = data;
    });
  }

  detalhesFuncionario(id: number) {
    this.router.navigate(['detalhes-funcionario', id]);
  }

  atualizarFuncionario(id: number) {
    this.router.navigate(['atualizar-funcionario', id]);
  }

  deletarFuncionario(id: number) {
    this.funcionarioService.deletarFuncionario(id).subscribe( data => {
      console.log(data);
      this.getFuncionarios();
    })
  }

}
