import { Component, OnInit, Input } from '@angular/core';
import { ILoadout } from '../../model/loadout';

@Component({
  selector: 'app-loadout-row',
  templateUrl: './loadout-row.component.html',
  styleUrls: ['./loadout-row.component.css']
})
export class LoadoutRowComponent implements OnInit {

  @Input() loadout : ILoadout;

  constructor() { }

  ngOnInit(): void {
  }

}
