import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-adress',
  standalone: true,
  imports: [],
  templateUrl: './no-adress.component.html',
  styleUrl: './no-adress.component.css'
})
export class NoAdressComponent {
  constructor(private router: Router) {}

  adicionarEndereco() {
    this.router.navigate(['/no-adress-edit']);
  }

}
