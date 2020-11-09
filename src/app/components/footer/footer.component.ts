import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  CodeServiceText: string = 'Code de service';

  constructor() { }

  ngOnInit(): void {
  }
  
  ChangeText(){
    document.getElementById("BtCodeService").innerText = "901 450";
  }
}

