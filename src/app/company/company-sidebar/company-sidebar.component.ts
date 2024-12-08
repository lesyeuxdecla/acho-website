import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-company-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-sidebar.component.html',
  styleUrl: './company-sidebar.component.css'
})
export class CompanySidebarComponent implements OnInit {
  selectedButton: string = '';
  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateSelectedButton();

  
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedButton();
      });
  }

  updateSelectedButton(): void {
    const currentRoute = this.router.url;

    if (currentRoute.includes('/company/perfil')) {
      this.selectedButton = 'perfil';
    } else if (currentRoute.includes('/company/inscricoes')) {
      this.selectedButton = 'inscricoes';
    } else if (currentRoute.includes('/company/authsessions')) {
      this.selectedButton = 'autenticacao';
    } else if (currentRoute.includes('/company/notificacoes')) {
      this.selectedButton = 'notificacoes';
    } else {
      this.selectedButton = '';
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    this.router.navigate(['/home']);
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebarElement = document.querySelector('.retangulo');
    if (this.sidebarVisible) {
      sidebarElement?.classList.remove('hidden');
    } else {
      sidebarElement?.classList.add('hidden');
    }
  }
}
