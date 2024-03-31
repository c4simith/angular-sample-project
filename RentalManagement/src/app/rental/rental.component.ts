import { Component, OnInit } from '@angular/core';
import { RentalService } from './rental.service'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {
  apidata:any ;

  constructor(private rentalService : RentalService){

  }
  ngOnInit() {
      this.rentalService.getData().subscribe((data) => {
        console.log(data);
        this.apidata = data;
      });
  }
}
