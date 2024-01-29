import { Component } from '@angular/core';
import { GetKeepersService } from '../services/get-keepers.service';
import { Keeper } from '../keeper-interface';

@Component({
  selector: 'app-keepers',
  standalone: true,
  imports: [],
  templateUrl: './keepers.component.html',
  styleUrl: './keepers.component.css'
})
export class KeepersComponent {
  constructor(private keeperService: GetKeepersService) { }
  keepers: Keeper[] = [];

  ngOnInit(): void {
    this.keeperService.getKeepers().subscribe(keepers => {
      this.keepers = keepers
    });

  }
}
