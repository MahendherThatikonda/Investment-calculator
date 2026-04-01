import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
 @Input() results: any[] = []
 
}
