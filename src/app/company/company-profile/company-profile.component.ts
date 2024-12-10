import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

  constructor(private router: Router) {}

  navegarParaFormulario() {
    window.scrollTo(0, 0);
    this.router.navigate(['/forms_school']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }
}
