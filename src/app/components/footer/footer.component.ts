import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  CodeServiceText: string = 'Code de service';

  constructor() { }

  CodeService() {
    this.CodeServiceText = '901 250'
  }

  ngOnInit(): void {
  }
}
// let BtCodeService = document.querySelector('BtCodeService');

// BtCodeService.addEventListener('click', () => {
//    BtCodeService.innerText = '901 050';
//  }) 
