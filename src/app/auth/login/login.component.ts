import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LoginDashboardComponent } from "./login-dashboard/login-dashboard.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, LoginDashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  isSuccessVisible: boolean = false; // Variável para controlar a visibilidade do pop-up de sucesso

  constructor(private router: Router) {}

  // Função que simula o login
  realizarLogin() {
    // Aqui você pode simular a verificação de login (exemplo: comparação simples)
    if (this.email === 'abc@email.com' && this.senha === 'senha123') {
      // Caso as credenciais sejam corretas, armazene um valor no localStorage para simular o login
      localStorage.setItem('usuario_logado', this.email);
      this.isSuccessVisible = true; // Exibe o pop-up de sucesso
    } else {
      alert('Credenciais inválidas');
    }
  }

  // Função para redirecionar para a página inicial após login bem-sucedido
  voltarHome() {
    this.router.navigate(['/home']); // Redireciona para a página inicial (home)
  }

  // Função para fechar o pop-up de sucesso (opcional, caso queira fechar manualmente)
  fecharModal() {
    this.isSuccessVisible = false;
  }

  navegarParaCadastro() {
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/sign-up']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }

}