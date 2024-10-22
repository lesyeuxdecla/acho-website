import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Review {
  username: string;
  profilePic: string;
  date: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {

  @Input() averageRating: number = 0;
  @Input() reviewCount: number = 0;
  @Input() reviews: Review[] = [];

  newReview: string = '';
  newRating: number = 0;

  addReview() {
    const date = new Date().toLocaleDateString();
    this.reviews.push({
      username: 'Usuário', // Aqui você pode substituir pelo nome do usuário logado
      profilePic: 'path/to/user.jpg', // Aqui você pode substituir pela foto do usuário logado
      date,
      comment: this.newReview,
      rating: this.newRating
    });
    this.newReview = '';
    this.newRating = 0;
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push('filled');
      } else if (i < rating) {
        stars.push('half-filled');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }
}
