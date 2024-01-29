import { Component } from '@angular/core';
import { Hive } from '../app/hive-interface';

@Component({
  selector: 'app-hives',
  standalone: true,
  imports: [],
  templateUrl: './hives.component.html',
  styleUrl: './hives.component.css'
})
export class HivesComponent {
  private hives: Hive[] = []

  ngOnInit(): void {
    // this.keeperService.getKeepers().subscribe(keepers => {
    //   this.keepers = keepers
    // });

  }
}
