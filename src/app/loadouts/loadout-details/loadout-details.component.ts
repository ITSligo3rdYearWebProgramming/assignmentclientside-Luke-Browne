import { Component, OnInit, Input } from '@angular/core';
import { ILoadout } from '../../model/loadout';

@Component({
  selector: 'app-loadout-details',
  templateUrl: './loadout-details.component.html',
  styleUrls: ['./loadout-details.component.css']
})
export class LoadoutDetailsComponent implements OnInit {

  @Input() loadout : ILoadout;

  constructor() { }

  ngOnInit(): void {
  }

}
