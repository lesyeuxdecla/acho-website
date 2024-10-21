import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navblue',
  standalone: true,
  imports: [],
  templateUrl: './navblue.component.html',
  styleUrl: './navblue.component.css'
})
export class NavblueComponent {
  @Input() categoryName: string = ''; // Nome da categoria
  @Input() categoryImage: string = ''; 
}

