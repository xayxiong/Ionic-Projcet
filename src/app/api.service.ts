import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ILogin } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com/todos/'
  constructor(public http: HttpClient) { }
  loadTest() {

    return this.http.get(this.url + '1').toPromise().then(r => {
      console.log(r);

    }).catch(e => {
      console.log(e);

    });
    // fetch(url).then(r=>{
    //   console.log(r.status);
    //   console.log(r.);

    // }).catch(e=>{
    //   console.log(e);

    // })
  }
  loadTest1(x: any) {

    this.http.get(this.url + '1').toPromise().then(r => {
      console.log(r);
      // x = r;
      Object.keys(r).forEach(k => {
        x[k] = r[k]
      })
      console.log('x', x);

    }).catch(e => {
      console.log(e);

    });


    // fetch(url).then(r=>{
    //   console.log(r.status);
    //   console.log(r.);

    // }).catch(e=>{
    //   console.log(e);

    // })
  }
  loadTest2() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.url + '1').toPromise().then(r => {
        resolve(r)
      }).catch(e => {
        console.log(e);
        reject(e)
      });
    })
  }

  loadTest3() {
    return this.http.get(this.url + '1').toPromise();

  }
  loaddData(data: any) {
    data = {
      username: 'sai',
      password: '112324'
    }
    return this.http.post(this.url + '1', data).toPromise();
  }
  login(login: ILogin) {
    return this.http.post(this.url + '1', login).toPromise();
  }
  setpasskeys() {

  }



//Page OAuth
// Get access token

  clientId = "24bd4a0e257a48f1a32b20b52cfbe6db"
  accessToken = "f1611d9a718cb6df1b63dab1870c2cf8"
  username = "+8562077912908"
  password = "bfc6f193a5dbad9f53a37afbddecd81c"
  client_secret = "755b2f580dbb58cbd7bdb8820b7bb706"


  // clientId=''
  // accessToken=''
  oauth() {
    const url = 'https://euapi.sciener.com/oauth2/token';
    let body = new  URLSearchParams()
    body.set('clientId', this.clientId)
    body.set('accessToken', this.accessToken)
    body.set('username', this.username)
    body.set('password', this.password)
    body.set('client_secret', this.client_secret);


    //  oauth(keyName=string,receiverUsername=string){

    // }
    // body.set('keyName', keyName);
    // body.set('receiverUsername', receiverUsername);

    // body.set('date', new Date().getTime() + '');
    return this.http.post(url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        // .set('Origin','*')
    }
    )
  }
}
// Refresh access token


// clientId = "24bd4a0e257a48f1a32b20b52cfbe6db"

// clientSecret = "755b2f580dbb58cbd7bdb8820b7bb706"
// grant_type =" f1611d9a718cb6df1b63dab1870c2cf8"
// refresh_token = "f1611d9a718cb6df1b63dab1870c2cf8"
// oauth1()
//   const url='https://euapi.sciener.com/oauth2/token'
//   let body = new  URLSearchParams()
//   body.set('clientId', this.clienrId),
//   body.set('accessToken', this.clientSecret)
//   body.set('username', this.username)
//   body.set('password', this.password)
//   body.set('client_secret', this.client_secret); 
//   return this.http.post(url, body, {
//     headers: new HttpHeaders()
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       // .set('Origin','*')
//   }


//   headers: new HttpHeaders()


