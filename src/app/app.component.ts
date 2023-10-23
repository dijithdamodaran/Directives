import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-diretives-demo';

  displayMessage: boolean = false;

  message(){ 
    this.displayMessage = !this.displayMessage;
  }

  num: number = 12;
  num1: number = 12;
  
  get isEvenNumber() : boolean{

    return this.num % 2 == 0;

  }
  get isOddNumber() : boolean{

    return this.num % 2 != 0;

  }

  ///////////////

  get isEvenNumber1() : boolean{

    return this.num1 % 2 == 0;

  }
  get isOddNumber1() : boolean{

    return this.num1 % 2 != 0;

  }


  //////////////////

  products: any[] = [
    "laptops","keybords","mouse","usb cables","pen-drives","speakers","tabs"
  ]

  numbers : number[] = [ 100, 45, 33, 102, 67, 87,99,49, 54, 66];
  isEvenNumber2(num:number):boolean{
    return num % 2==0;

  }

  isOddNumber2(num:number) :boolean{ 
    return num % 2 != 0;
  }
  
  sports:string="hockey";
}
