import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private router: Router) {}

  // Método para redirecionar para a página correspondente à categoria
  irParaCategoria(rota: string): void {
    this.router.navigate([rota]);
  }

  // Método para fazer o scroll horizontal
  scrollDireita(): void {
    const container = document.querySelector('.categorias-container') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
}