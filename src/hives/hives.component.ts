import { Component } from '@angular/core';
import { Hive } from '../app/hive-interface';
import { GetHivesService } from '../app/services/get-hives.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hives',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hives.component.html',
  styleUrl: './hives.component.css'
})
export class HivesComponent {
  hives: Hive[] = []
  nextUrl: string | null = null;
  previousUrl: string | null = null;

  constructor(private hiveService: GetHivesService) { }

  ngOnInit(): void {
    this.loadHives();

  }

  loadHives(url?: string): void {
    this.hiveService.getHives(url).subscribe(
      (response) => {
        this.hives = response.results;
        this.nextUrl = response.next;
        this.previousUrl = response.previous;
      },
      (error) => {
        console.log(error);
        this.hives = []
      }
    );
  }

  loadNextPage(): void {
    if (this.nextUrl) {
      this.loadHives(this.nextUrl);
    }
  }


  loadPreviousPage(): void {
    if (this.previousUrl) {
      this.loadHives(this.previousUrl);
    }
  }

}
