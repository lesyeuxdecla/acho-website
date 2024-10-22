import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {

  ativoBotao: string = 'practiceyourhobby';

  constructor(private router: Router) {}

  carregarComponente(componente: string) {
    this.ativoBotao = componente;
    this.router.navigate([componente]);
  }
}