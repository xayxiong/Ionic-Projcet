import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { ILogin } from '../model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  production = 'product';
  showTime = new Date().getTime();
  sampleData:any={};
  loginData={} as ILogin
  
  constructor(public apiService:ApiService) {}
  test(){
    this.apiService.loadTest();
  }
  test1(){
    this.apiService.loadTest1(this.sampleData);
  }
  test2(){
    this.apiService.loadTest2().then(r=>{
      this.sampleData=r;
    }).catch(e=>{
      console.log(e);
    })
  }
  test3(){
    this.apiService.loadTest3().then(r=>{
      this.sampleData=r;
    }).catch(e=>{
      console.log(e);
    })

    console.log('A');
    
  }
  async test4(){
    const a =await this.apiService.loadTest3();
    this.sampleData = a;
  }
  login(){
    this.apiService.login(this.loginData).then(r=>{
      console.log(r);
      
    }).catch(e=>{
      console.log(e);
      
    });
  }
  oauth(){
    this.apiService.oauth().toPromise().then(r=>{

    }).catch(e=>{
      console.log(e);
      
    })
    }
    oauth1(){
      this.apiService.oauth().toPromise().then(r=>{
  
      }).catch(e=>{
        console.log(e);
        
      })
      }



  save(){
    const production = 'ok ';
    // const x = prompt('saving this value '+this.production);
    // if(x=='ok'){
    //   alert('save ok')
    // }else{
    //   alert('changed has been canceled')
    // }
    const x = confirm('saving this value '+this.production);
      if(x){
      alert('save ok')
    }else{
      alert('changed has been canceled')
    }
  }
  save1(){
    const production = 'ok ';
    // const x = prompt('saving this value '+this.production);
    // if(x=='ok'){
    //   alert('save ok')
    // }else{
    //   alert('changed has been canceled')
    // }
    const x = confirm('saving this value '+this.production);
      if(x){
      alert('save ok')
    }else{
      alert('changed has been canceled')
    }
  }
}


