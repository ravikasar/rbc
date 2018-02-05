import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCreateComponent } from './robot-create/robot-create.component';
 
const routes: Routes = [
  {path: 'robot', component: RobotListComponent},
  {path: 'robot/create', component: RobotCreateComponent},
  {path: 'robot/edit/:id', component: RobotCreateComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotRoutingModule { }
