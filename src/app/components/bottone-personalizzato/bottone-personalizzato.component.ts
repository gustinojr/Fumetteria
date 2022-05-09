import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottone-personalizzato',
  templateUrl: './bottone-personalizzato.component.html',
  styleUrls: ['./bottone-personalizzato.component.scss'],
})
export class BottonePersonalizzatoComponent implements OnInit {
  @Input() testo:string;
  indirizzi:string[]=[];
  @Input() indirizzo:string;
  
  constructor() { }

  ngOnInit() {
    this.indirizzi.push(this.indirizzo);
  }

}
