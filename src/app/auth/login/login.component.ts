import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LoginDashboardComponent } from "./login-dashboard/login-dashboard.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, LoginDashboardComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isModalVisible: boolean = false; 
  email: string = ''; 
  senha: string = '';  

  constructor(private router: Router) {}

  
  enviarFormulario() {
    
    if (this.email && this.senha) {
      console.log("Formulário enviado!");
      
      this.isModalVisible = true;
    } else {
      console.log("Preencha todos os campos!");
    }
  }

  
  fecharModal() {
    this.isModalVisible = false;
  }

 
  redirecionarParaHome() {
    this.router.navigate(['/home']);
    this.fecharModal();
  }

  navegarParaCadastro(event: Event) {
    event.preventDefault(); 
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/signup']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}