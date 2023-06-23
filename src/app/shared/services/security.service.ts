import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DoctorTitleModel} from "../model/doctor-title-model";
import {Constants} from "../constatnts";
import {LoginModel} from "../model/login-model";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }


  getAuthCode(): Observable <any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let codeParams = new HttpParams();
    codeParams = codeParams.append('response_type','code');
    codeParams = codeParams.append('client_id','iti-client');
    codeParams = codeParams.append('scope','openid');
    codeParams = codeParams.append('redirect_uri','http://localhost:4200/login');
    codeParams = codeParams.append('code_challenge','QYPAZ5NU8yvtlQ9erXrUYR-T5AGCjCF47vN-KsaI2A8');
    codeParams = codeParams.append('code_challenge_method','S256');

    return this.httpClient.post<any>(Constants.authURL,{
      params:codeParams, withCredentials:true, headers:headers
    });
  }


  private clientId = 'iti-client';
  private clientSecret = 'iti-secret';
  getJWT(): Observable <any> {
    const credentials = `${this.clientId}:${this.clientSecret}`;
    const encodedCredentials = btoa(credentials);

    // Set the request headers
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${encodedCredentials}`)
      .set('Content-Type', 'application/x-www-form-urlencoded');
    let codeParams = new HttpParams();
    codeParams = codeParams.append('grant_type','client_credentials');

    return this.httpClient.post<any>(Constants.jwtURL,codeParams,{
      withCredentials:true, headers:headers
    });
  }

  login(loginModel:LoginModel): Observable <any> {
    const form = new FormData();
    form.append('username', loginModel.username);
    form.append('password', loginModel.password);
    return this.httpClient.post<any>(Constants.loginURL,form,{
      withCredentials: true
    });
  }
}