import { Component } from '@angular/core';

@Component({
    selector: 'calc-app',
    template: `
     <div>
            <h2> {{appName}} </h2>
         <div>
                <input type="number" [(ngModel)]="displayValue"> <span style="font-size: 12pt; font-weight: bold">Result: {{result}}</span><br/>

<span *ngIf="ShowOperation()"> {{calculation}}</span>
         </div>
        <div>
                <br/><span style="font-size: 12pt; font-weight: bold">Please choose your operation below:</span><br/><br/>
                <button type="button" (click)="ClearValues()">C</button>
                <button type="button" (click)="DoSum()">+</button>
                <button type="button" (click)="DoSubtract()">-</button>
                <button type="button" (click)="DoMultiply()">*</button>
                <button type="button" (click)="DoDivide()">/</button>
                <button type="button" (click)="CalculateResult()">=</button>
        </div>
    </div>
`,
})
export class AppComponent {
    appName = 'Simple Calculator';
    displayValue: number = 0;
    memory: string = null;
    result: number = 0;
    operation: string = null;
    calculation: string = null;

    SaveInMemory() {
        if (this.memory == null) {
            this.memory = this.displayValue.toString();
        }
    }
    ClearValues() {
        this.operation = null;
        this.memory = null;
        this.displayValue = 0;
        this.result = 0;
        this.calculation = '0';
    }
    DoSum() {
        this.SaveInMemory();
        this.operation = "+";
        this.displayValue = 0;
    }
    DoSubtract() {
        this.SaveInMemory();
        this.operation = "-";
        this.displayValue = 0;
    }
    DoMultiply() {
        this.SaveInMemory();
        this.operation = "*";
        this.displayValue = 0;
    }
    DoDivide() {
        this.SaveInMemory();
        this.operation = "/";
        this.displayValue = 0;
    }
    ShowOperation(): boolean {
        if (this.memory === null || this.operation === null) {
            return true;
        }
        else {
            this.calculation = this.memory + this.operation + this.displayValue;
            return true;
        }
    }
    CalculateResult() {

        try {
            if (this.operation == "+") {

                this.result = parseFloat(this.memory) + this.displayValue;
            }
            else if (this.operation == "-") {

                this.result = parseFloat(this.memory) - this.displayValue;
            }
            else if (this.operation == "*") {

                this.result = parseFloat(this.memory) * this.displayValue;
            }
            else if (this.operation == "/") {
               
                if (this.displayValue === 0 || isNaN(this.displayValue)) {

                    alert("Divide by zero, not allowed!!")
                }
                else {

                    this.result = parseFloat(this.memory) / this.displayValue;
                }
            }

        }
        catch (Error) {
            alert(Error.message);
        }
        finally {
            this.displayValue = 0;
            this.memory = null;
            this.operation = null;
        }
    }
}
