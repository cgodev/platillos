import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platillo } from 'src/app/models/platillo.model';
import { PlatillosService } from 'src/app/services/platillos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  platilloData: Platillo[] = [];

  constructor(
    private platillosService: PlatillosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.platillosService.fetchRandomPlatillo().subscribe((data: any) => {
      this.platilloData = data;
      console.log(this.platilloData)
      if (this.platilloData.length > 0) {
        Swal.fire({
          title: 'Hola!',
          text: `Te recomendamos ${this.platilloData[0].strMeal} el dia de hoy.`,
          imageUrl: this.platilloData[0].strMealThumb,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Platillos app',
          allowOutsideClick: false,
          confirmButtonText: `Ver mas!!`
        }).then(response => {
          this.router.navigate(['platillo/',this.platilloData[0].idMeal]);
        })
      }
    });
  }

}
