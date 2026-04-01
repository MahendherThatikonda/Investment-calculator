import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Header,UserInput,InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Investment-calculator');
  annualData: any[] = [];

onCalculate(data: any[]) {
  this.annualData = data;
}
}
