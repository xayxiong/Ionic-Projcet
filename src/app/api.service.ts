import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://jsonplaceholder.typicode.com/todos/'
  constructor(public http:HttpClient) { }
  loadTest(){
 
    return this.http.get(this.url+'1').toPromise().then(r=>{
      console.log(r);
      
    }).catch(e=>{
      console.log(e);
      
    });
    // fetch(url).then(r=>{
    //   console.log(r.status);
    //   console.log(r.);
      
    // }).catch(e=>{
    //   console.log(e);
      
    // })
  }
  loadTest1(x:any){
 
     this.http.get(this.url+'1').toPromise().then(r=>{
      console.log(r);
      // x = r;
      Object.keys(r).forEach(k=>{
        x[k]=r[k]
      })
      console.log('x',x);
      
    }).catch(e=>{
      console.log(e);
      
    });


    // fetch(url).then(r=>{
    //   console.log(r.status);
    //   console.log(r.);
      
    // }).catch(e=>{
    //   console.log(e);
      
    // })
  }
  loadTest2(){
    return new Promise<any>((resolve,reject)=>{
       this.http.get(this.url+'1').toPromise().then(r=>{
        resolve(r)
      }).catch(e=>{
        console.log(e);
        reject(e)
      });
    })
  }

  loadTest3(){
      return this.http.get(this.url+'1').toPromise();

  }
  loaddData(data:any){
    data ={
      username:'sai',
      password:'112324'
    }
    return this.http.post(this.url+'1',data).toPromise();
  }
  login(login:ILogin){
    return this.http.post(this.url+'1',login).toPromise();
  }
  setpasskeys(){

  }
}
