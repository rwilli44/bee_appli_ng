import { Routes } from '@angular/router';
import { KeepersComponent } from './keepers/keepers.component';
import { HivesComponent } from '../hives/hives.component';

export const routes: Routes = [{ path: "keepers", component: KeepersComponent }, { path: "hives", component: HivesComponent }];
