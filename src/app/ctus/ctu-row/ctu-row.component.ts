import { Component, Input, OnInit } from '@angular/core';
import { ICtu } from 'src/app/model/ctu';

@Component({
  selector: 'app-ctu-row',
  templateUrl: './ctu-row.component.html',
  styleUrls: ['./ctu-row.component.css']
})
export class CtuRowComponent implements OnInit {

  @Input() ctu : ICtu;

  constructor() { }

  ngOnInit(): void {
  }

}
