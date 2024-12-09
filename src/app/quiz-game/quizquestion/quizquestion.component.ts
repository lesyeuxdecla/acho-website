import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



interface Question {
  question: string;
  options: string[];
}

@Component({
  selector: 'app-quizquestion',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './quizquestion.component.html',
  styleUrl: './quizquestion.component.css'
})
export class QuizquestionComponent {
  questions: Question[] = [
    {
      question: "1. Se você pudesse passar um dia fazendo qualquer atividade sem se preocupar com tempo ou dinheiro, o que você escolheria?",
      options: [
        "Participar de uma aventura ao ar livre, como trilhas ou ciclismo",
        "Aprender uma nova habilidade, como tocar um instrumento ou fazer artesanato",
        "Preparar e experimentar pratos e receitas diferentes",
        "Passar um tempo relaxando com leitura ou assistindo documentários",
      ],
    },
    {
      question: "2. Quanto tempo você consegue reservar por semana para se dedicar a um hobby, considerando sua rotina diária?",
      options: [
        "Menos de 1 hora – minha rotina é extremamente agitada e só consigo pequenos intervalos",
        "1-3 horas – consigo ajustar meu tempo para atividades curtas durante a semana",
        "3-5 horas – tenho uma rotina moderada e consigo separar um tempo razoável para um hobby",
        "Mais de 5 horas – consigo organizar minha agenda para dedicar bastante tempo a atividades de lazer",
      ],
    },
    {
      question: "3. Qual tipo de desafio mais te motiva a continuar?",
      options: [
        "Superar barreiras físicas, como esportes e exercícios",
        "Resolver mistérios e quebra-cabeças que exigem raciocínio",
        "Criar algo do zero e ver o resultado final",
        "Explorar temas profundos e complexos em estudos e pesquisas",
      ],
    },
    {
      question: "4. Como você lida com a ideia de investir financeiramente em um novo hobby?",
      options: [
        "Estou disposto(a) a gastar acima de R$500 em equipamentos de qualidade para ter a melhor experiência possível",
        "Prefiro começar com um investimento inicial de até R$100 e aumentar conforme meu interesse cresce",
        "Gosto de encontrar opções sustentáveis e de baixo custo, investindo entre R$100 e R$300 de forma controlada",
        "Prefiro hobbies que quase não exigem investimento financeiro e pesquiso alternativas gratuitas antes de começar",
      ],
    },
    {
      question: "5. Como você se sentiria em participar de atividades com outras pessoas que compartilham dos mesmos interesses?",
      options: [
        "Animado(a) para interagir, trocar experiências e aprender em conjunto",
        "Confortável, mas prefiro que seja em um grupo pequeno e mais íntimo",
        "Prefiro começar observando e me integrando gradualmente à medida que me sinto à vontade",
        "Não sou fã de atividades em grupo; gosto mais de hobbies que posso fazer sozinho(a)",
      ],
    },
    {
      question: "6. Quando você termina uma atividade, o que faz você sentir que aproveitou bem seu tempo?",
      options: [
        "Ver um projeto criativo ganhar vida, como uma obra de arte ou um texto escrito por mim",
        "Sentir que aprendi ou desenvolvi algo técnico, como novas habilidades em programação ou reparos",
        "Concluir uma atividade que exigiu tanto criatividade quanto planejamento, como uma sessão de fotografia ou um projeto DIY (faça você mesmo)",
        "Simplesmente me divertir e relaxar com algo leve, como jogos ou cozinhar uma receita simples",
      ],
    },
    {
      question: "7. Como você prefere usar seu tempo livre em termos de movimento?",
      options: [
        "Em atividades intensas",
        "Em atividades moderadas",
        "Em um equilíbrio entre intenso e moderado",
        "Em atividades sedentárias",
      ],
    },
    {
      question: "8. Se você tivesse que escolher o ambiente ideal para seus hobbies, qual seria?",
      options: [
        "Ao ar livre, explorando trilhas, praias ou parques em diferentes climas",
        "Em um estúdio ou espaço fechado, com tudo organizado para criar ou praticar um hobby",
        "Combinando os dois, variando entre locais internos e externos de acordo com a ocasião",
        "Em qualquer lugar onde eu possa ter novas experiências, seja em casa ou fora",
      ],
    },
  ];
  

  currentQuestionIndex: number = 0;
  selectedOption: number | null = null;

  constructor(private router: Router,  private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(index: number): void {
    this.selectedOption = index;
  }

  nextQuestion(): void {
    if (this.selectedOption !== null) {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = null;
      } else {
        
        this.router.navigate(['/quizresult']);
      
      }
    }
  }

  get progressPercentage(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  getOptionLabel(index: number): string {
    return String.fromCharCode(97 + index).toLowerCase(); 
  }


  
  currentScreenSize: string = 'desktop';
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
}