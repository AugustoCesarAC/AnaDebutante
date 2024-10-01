import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DebutanteNiver';

  activeTab: string = 'todasPostagens'; // Aba inicial
  nome: string = ''; // Nome do usuário que confirma presença
  presencaConfirmada: boolean = false; // Controle de presença
  listaDePresentes: string[] = []; // Lista de presentes confirmados

  // Função para alterar a aba ativa
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Função para confirmar presença
  confirmarPresenca() {
    if (this.nome) {
      this.listaDePresentes.push(this.nome); // Adiciona o nome à lista de presentes
      this.presencaConfirmada = true; // Sinaliza que a presença foi confirmada
      this.nome = ''; // Limpa o campo de nome após confirmar
    }
  }

}
