import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LoginDashboardComponent } from '../login/login-dashboard/login-dashboard.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NavbarComponent, LoginDashboardComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}

  navegarParaLogin(event: Event) {
    event.preventDefault(); 
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/login']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }

  navegarParaProfile(event: Event) {
    event.preventDefault(); 
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/login']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
