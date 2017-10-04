import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth-guard.service';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { WorkoutComponent } from '../workout/workout.component';

const approutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        component: WorkoutComponent,
      }
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(approutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
