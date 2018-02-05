import { Injectable } from '@angular/core';
import {Robot} from './robot';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RobotService {

	private apiUrl = 'http://localhost:8080/robots';
  	constructor(private http: Http) {
	  }
	 
	  findAll(): Observable<Robot[]>  {
	    return this.http.get(this.apiUrl)
	      .map((res:Response) => res.json())
	      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	  }
	 
	  findById(id: number): Observable<Robot> {
		return this.http.get(this.apiUrl + '/' + id).map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
	  }
	 
	  saveRobot(robot: Robot): Observable<Robot> {
	    return this.http.post(this.apiUrl, robot)
	    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
	  }
	 
	  deleteRobotById(id: number): Observable<boolean> {
	    return this.http.delete(this.apiUrl + '/' + id).map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	  }
	 
	  updateRobot(robot: Robot): Observable<Robot> {
	    return this.http.put(this.apiUrl, robot).map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	  }
}
