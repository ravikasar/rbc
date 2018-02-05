import { Component, OnInit } from '@angular/core';
import { Robot } from "../robot";
import { RobotService } from "../robot.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css'],
  providers: [RobotService]
})
export class RobotListComponent implements OnInit {

  private robots: Robot[];

  constructor(private router: Router, private robotService: RobotService) { }

  ngOnInit() { //when component loading get all robots and set the robots[]
    this.getAllRobots();
  }

  getAllRobots() {
    this.robotService.findAll().subscribe(
      robots => {
        this.robots = robots;
      },
      err => {
        console.log(err);
      }

    );
  }

  
  redirectNewRobotPage() {
    this.router.navigate(['/robot/create']);
  }
 
  editRobotPage(robot: Robot) {
    if (robot) {
      this.router.navigate(['/robot/edit', robot.id]);
    }
  }
 
  deleteRobot(robot: Robot) {
    if (robot) {
      this.robotService.deleteRobotById(robot.id).subscribe(
        res => {
          this.getAllRobots();
          this.router.navigate(['/robot']);
          console.log('done');
        }
      );
    }
  }

}