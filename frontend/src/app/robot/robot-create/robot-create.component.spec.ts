import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotCreateComponent } from './robot-create.component';

describe('RobotCreateComponent', () => {
  let component: RobotCreateComponent;
  let fixture: ComponentFixture<RobotCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
