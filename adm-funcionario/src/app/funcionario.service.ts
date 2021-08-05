import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private baseURL = "http://localhost:8080/api/v1/funcionarios";

  constructor(private httpClient: HttpClient) { }

  getListaFuncionarios(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(`${this.baseURL}`);
  }

  criarFuncionario(funcionario: Funcionario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, funcionario);
  }

  getFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(`${this.baseURL}/${id}`);
  }

  atualizarFuncionario(id: number, funcionario: Funcionario): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, funcionario);
  }

  deletarFuncionario(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
