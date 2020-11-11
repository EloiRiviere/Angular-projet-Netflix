import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() listFilm;
  tmpFilm;

  environment = environment;
  isModalActive: boolean = false;


  constructor(private modalService: NgbModal, private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  clickImage(film) {
    this.tmpFilm = film;
    this.toggleModal();
  }

  addFavoris() {
    this.authService.addFavoris(this.tmpFilm);
  }
}
