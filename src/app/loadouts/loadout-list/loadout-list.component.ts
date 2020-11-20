import { Component, OnInit } from '@angular/core';
import { ILoadout } from '../../model/loadout';
import { LoadoutService } from '../../loadout.service';

@Component({
  selector: 'app-loadout-list',
  templateUrl: './loadout-list.component.html',
  styleUrls: ['./loadout-list.component.css']
})
export class LoadoutListComponent implements OnInit {

  loadoutList: ILoadout[];
  message: string;

  currentLoadout: ILoadout;

  constructor(private loadoutService: LoadoutService) { }

  ngOnInit(): void {
    this.loadoutService.getLoadouts().subscribe({
      next: (value: ILoadout[] )=> this.loadoutList = value,
      complete: () => console.log('loadout service finished'),
      error: (mess) => this.message = mess
    })
  }

}
