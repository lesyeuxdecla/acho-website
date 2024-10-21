import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
    ativoBotao: string = 'pratique-seu-hobby'; // Define o botão ativo padrão
  
    carregarComponente(componente: string) {
      this.ativoBotao = componente; // Atualiza o botão ativo
      // Aqui você pode adicionar a lógica para carregar o componente correspondente
      console.log(`Carregando o componente: ${componente}`);
    }
}
