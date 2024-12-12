import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';


interface Hobby {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-quizresult',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './quizresult.component.html',
  styleUrl: './quizresult.component.css'
})
export class QuizresultComponent {
  hobbies: Hobby[] = [
    {
      title: 'Leitura',
      description: 'Leitura é explorar livros, revistas ou artigos para entretenimento ou aprendizado.',
      image: 'images/leituraa.png'
    },
    {
      title: 'Escrita',
      description: 'Escrita Criativa envolve criar histórias, poemas ou textos para expressar ideias e sentimentos.',
      image: 'images/escrita.png'
    },
    {
      title: 'RPG',
      description: 'RPG é um hobby que combina estratégia e narrativa, com aventuras guiadas por um mestre.',
      image: 'images/rpg.png'
    },
    {
      title: 'Idiomas',
      description: 'Estudo de Idiomas é aprender novas línguas, expandindo habilidades de comunicação.',
      image: 'images/idiomas.png'
    },
    {
      title: 'Xadrez',
      description: 'Xadrez é um jogo estratégico que desafia o raciocínio lógico e a tomada de decisões.',
      image: 'images/xadrex.png'
    },
    {
      title: 'Pesquisas',
      description: 'Pesquisas Históricas envolvem explorar fatos do passado para ampliar o conhecimento.',
      image: 'images/pesquisas.png'
    },
    {
      title: 'Programação',
      description: 'Programação cria soluções tecnológicas por meio de códigos.',
      image: 'images/programar.png'
    },
    {
      title: 'Puzzles',
      description: 'Puzzles são desafios de quebra-cabeças que estimulam o cérebro e proporcionam diversão.',
      image: 'images/puzzles.png'
    }
  ];
  
  currentScreenSize: string = 'desktop';

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.observeScreenSize();
  }
  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // <= 480px
      Breakpoints.Small,  // <= 768px
      Breakpoints.Medium, // <= 1024px
      Breakpoints.Large,  // <= 1440px
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentScreenSize = 'mobile';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.currentScreenSize = 'tablet';
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.currentScreenSize = 'desktop-medium';
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.currentScreenSize = 'desktop-large';
        }
      }
    });
  }

  goToDetails(hobbyTitle: string): void {
    if (hobbyTitle === 'Leitura') {
      this.router.navigate(['/reading']);
    } else {
      console.log(`Navegando para detalhes de: ${hobbyTitle}`);
    }
  }
}
