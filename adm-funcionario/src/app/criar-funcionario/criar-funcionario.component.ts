import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.css']
})
export class CriarFuncionarioComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
  }

  criarFuncionario() {
    this.funcionarioService.criarFuncionario(this.funcionario).subscribe( data => {
      console.log(data);
      this.irParaListaFuncionarios();
    },
    error => console.log(error));
  }

  irParaListaFuncionarios() {
    this.router.navigate(['/funcionarios']);
  }

  onSubmit() {
    console.log(this.funcionario);
    this.criarFuncionario();
  }

}
