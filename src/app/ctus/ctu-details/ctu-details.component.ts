import { Component, OnInit, Input } from '@angular/core';
import { ICtu } from '../../model/ctu';

@Component({
  selector: 'app-ctu-details',
  templateUrl: './ctu-details.component.html',
  styleUrls: ['./ctu-details.component.css']
})
export class CtuDetailsComponent implements OnInit {

  @Input() ctu : ICtu;

  constructor() { }

  ngOnInit(): void {
  }

}
