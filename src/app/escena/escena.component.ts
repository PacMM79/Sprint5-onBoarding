import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input() frasesArray: iStep[] = [];
}
