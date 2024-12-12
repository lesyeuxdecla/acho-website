import { Component } from '@angular/core';
import { LoginDashboardComponent } from '../login/login-dashboard/login-dashboard.component';
import { Router } from '@angular/router';
import { NavgreenComponent } from "../../shared/components/navbar/navgreen/navgreen.component";

@Component({
  selector: 'app-company-signup',
  standalone: true,
  imports: [NavgreenComponent, LoginDashboardComponent, NavgreenComponent],
  templateUrl: './company-signup.component.html',
  styleUrl: './company-signup.component.css'
})
export class CompanySignupComponent {
  constructor(private router: Router) {}

  navegarParaLogin(event: Event) {
    event.preventDefault(); 
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/company-login']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
