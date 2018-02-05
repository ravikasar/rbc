import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotRoutingModule } from './robot-routing.module';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCreateComponent } from './robot-create/robot-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RobotRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RobotListComponent, RobotCreateComponent]
})
export class RobotModule { }
