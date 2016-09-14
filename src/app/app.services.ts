import { Injectable } from '@angular/core';
import { config } from './app.config';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BlogCategory } from './app.classes';

@Injectable()
class AppServices {
	

	constructor(private http:Http) {

	}

	getCateInfo():Promise<BlogCategory[]>{
		return this.http.get(config.getCateInfoServiceUrl)
				.toPromise()
               	.then(response => {
               		return response.json() as BlogCategory[]
               	})
               	.catch(this.handleError);
	}

	handleError():void{
		console.error(arguments);
	}
}



export { AppServices }