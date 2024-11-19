import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mainServer } from './config'

@Injectable()
export class PetvaysServiceService {

  constructor(private http: HttpClient) { 

  }

  post(url: string, body: any, showLoader: boolean) {
    return this.http.post(mainServer + url, body)
  }
}
