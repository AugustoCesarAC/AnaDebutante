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

  private textoParaCopiar: string = '00020101021126330014br.gov.bcb.pix0111539706258825204000053039865802BR5917ANA L DA S AMORIM6009SAO PAULO62070503***6304BE2A';

  copiarTexto(): void {
    navigator.clipboard.writeText(this.textoParaCopiar).then(() => {
      alert('Código copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar o código: ', err);
      alert('Erro ao copiar o código.');
    });
  }

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
