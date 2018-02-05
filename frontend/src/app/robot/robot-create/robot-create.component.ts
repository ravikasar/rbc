import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RobotService} from "../robot.service";
import {Robot} from "../robot";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-robot-create',
  templateUrl: './robot-create.component.html',
  styleUrls: ['./robot-create.component.css'],
  providers: [RobotService]
})
export class RobotCreateComponent implements OnInit, OnDestroy {

  id: number;
  robot: Robot;

  robotForm: FormGroup;
  
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private robotService: RobotService) { }

  ngOnInit() {
	this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.robotForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

	if (this.id) { //edit form
      this.robotService.findById(this.id).subscribe(
        robot => {
            this.id = robot.id;
            this.robotForm.patchValue({
            name: robot.name,
          });
         },error => {
          console.log(error);
         }
      );
 
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onSubmit() {

    if (this.robotForm.valid) {
      if (this.id) {
        let robot: Robot = new Robot(this.id,
          this.robotForm.controls['name'].value);
        this.robotService.updateRobot(robot).subscribe();
      } else {
        let robot: Robot = new Robot(null,
          this.robotForm.controls['name'].value);
        this.robotService.saveRobot(robot).subscribe();
 
      }
      this.robotForm.reset();
      this.router.navigate(['/robot']);
      }
  }

  redirectRobotPage() {
    this.router.navigate(['/robot']);

  }
}