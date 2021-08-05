import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {

  id: number;
  funcionario: Funcionario = new Funcionario();

  constructor(private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.funcionarioService.getFuncionarioPorId(this.id).subscribe(data => {
      this.funcionario = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.funcionarioService.atualizarFuncionario(this.id, this.funcionario).subscribe(data => {
      this.irParaListaFuncionarios();
    }, error => console.log(error));
  }

  irParaListaFuncionarios() {
    this.router.navigate(['/funcionarios']);
  }

}
