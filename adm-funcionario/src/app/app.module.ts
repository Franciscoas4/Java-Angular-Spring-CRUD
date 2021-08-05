import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioListaComponent } from './funcionario-lista/funcionario-lista.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';
import { FormsModule } from '@angular/forms';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';
import { DetalhesFuncionarioComponent } from './detalhes-funcionario/detalhes-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListaComponent,
    CriarFuncionarioComponent,
    AtualizarFuncionarioComponent,
    DetalhesFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
