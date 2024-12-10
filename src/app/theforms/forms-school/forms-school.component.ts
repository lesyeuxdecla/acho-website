import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavgreenComponent } from "../../shared/components/navbar/navgreen/navgreen.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms-school',
  standalone: true,
  imports: [FormsModule, NavgreenComponent],
  templateUrl: './forms-school.component.html',
  styleUrl: './forms-school.component.css'
})
export class FormsSchoolComponent {
  curso = {
    nome: '',
    cnpj: '',
    cursosOferecidos: '',
    diasFuncionamento: '',
    horarioAtendimento: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    email: '',
    telefone: '',
    infoadc: '',
    imagem: null as File | null 
  };

  imagemPreview: string | ArrayBuffer | null = null;

  
  selecionarImagem() {
    const fileInput = document.getElementById('imagemInput') as HTMLInputElement;
    fileInput.click();
  }

  
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.curso.imagem = file;

  
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  
  onSubmit() {
    console.log('Dados do Curso:', this.curso);

  
    localStorage.setItem('dadosCurso', JSON.stringify(this.curso));
    alert('Formulário enviado e salvo com sucesso!');
  }

  constructor(private router: Router) {}

  navegarParaProfile() {
    window.scrollTo(0, 0);
    this.router.navigate(['/company']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }

}
