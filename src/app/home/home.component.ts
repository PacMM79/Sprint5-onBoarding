import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { CommonModule } from '@angular/common';
import { iStep } from '../i-step';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  frasesArray: iStep[] = [];

  constructor(private stepService: StepsService) {}

    ngOnInit(): void {
      this.frasesArray = this.stepService.getFrasesArray();
    }
}
