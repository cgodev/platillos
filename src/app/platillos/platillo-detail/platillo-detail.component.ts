import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from 'src/app/models/platillo.model';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-platillo-detail',
  templateUrl: './platillo-detail.component.html',
  styleUrls: ['./platillo-detail.component.scss']
})
export class PlatilloDetailComponent implements OnInit {
  
  currentPlatillo: Platillo | undefined;

  constructor(private rutaActiva: ActivatedRoute, private platillosService: PlatillosService) { }

  ngOnInit(): void {
    console.log('Platillo detail initialized');
    
    const id = this.rutaActiva.snapshot.params['id'];
    console.log(id);
    this.platillosService.fetchPlatilloById(id).subscribe((data: any) => this.currentPlatillo = data[0]);
  }

}
