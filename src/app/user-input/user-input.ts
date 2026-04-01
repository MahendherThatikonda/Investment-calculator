import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule,],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
@Output() calculate = new EventEmitter();
  enteredInitialInvestment = 10000;
  enteredAnnualInvestment = 1;
  enteredExpectedReturn = 5;
  enteredDuration = 10;
  isVisible: boolean = false;
  annualData: any[] = [];

  onCalculate() {
    this.isVisible = true;
    this.annualData = [];

    let investmentValue = this.enteredInitialInvestment;

    for (let i = 0; i < this.enteredDuration; i++) {
      const year = i + 1;

      const interestEarnedInYear = 
        investmentValue * (this.enteredExpectedReturn / 100);

      investmentValue += 
        interestEarnedInYear + this.enteredAnnualInvestment;

      const totalInterest =
        investmentValue - 
        this.enteredAnnualInvestment * year - 
        this.enteredInitialInvestment;

      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.enteredAnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: 
          this.enteredInitialInvestment + 
          this.enteredAnnualInvestment * year,
      });
    }
    this.calculate.emit(this.annualData);
  }
}
