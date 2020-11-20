import { Component, OnInit } from '@angular/core';
import { ICtu } from '../../model/ctu';
import { CtuService } from '../../ctu.service';

@Component({
  selector: 'app-ctu-list',
  templateUrl: './ctu-list.component.html',
  styleUrls: ['./ctu-list.component.css']
})
export class CtuListComponent implements OnInit {

  ctuList: ICtu[];
  message: string;

  currentCtu: ICtu;

  constructor(private ctuService : CtuService) { }

  ngOnInit(): void {
    this.ctuService.getCtus().subscribe({
      next: (value: ICtu[] )=> this.ctuList = value,
      complete: () => console.log('ctu service finished'),
      error: (mess) => this.message = mess
    })
  }

}
