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



// OAuth
  oauth(){
    this.apiService.oauth().toPromise().then(r=>{
      const o = r as any;
      console.log(r);
      this.apiService.accessToken=o.access_token;
      // this.apiService.refresh_token=o.refresh_token;
    }).catch(e=>{
      console.log(e);
      
    }
    )
    }


    oauth1(){
      this.apiService.oauth1().toPromise().then(r=>{
        // const o = r as any;
        console.log(r);
        // this.apiService.accessToken=o.access_token;
      }).catch(e=>{
        console.log(e);
        
      }
      )
      }
    // LockAPI

    Lockinitialize(){
      this.apiService.Lockinitialize().toPromise().then(r=>{
        const o = r as any;
        console.log(r);
        this.apiService.accessToken=o.access_token;
        this.apiService.lockId=o.lockId;
      }).catch(e=>{
        console.log(e);
        
      }
      )
      }

      // Get the lock list of an account
      Getthelocklistofanaccount(){
      this.apiService.Getthelocklistofanaccount().toPromise().then(r=>{
        // const o = r as any;
        console.log(r);
        // this.apiService.accessToken=o.access_token;
      }).catch(e=>{
        console.log(e);
        
      }
      )
      }
      // Get lock details
      Getlockdetails(){
        this.apiService.Getlockdetails().toPromise().then(r=>{
          // const o = r as any;
          console.log(r);
          // this.apiService.accessToken=o.access_token;
        }).catch(e=>{
          console.log(e);
          
        }
        )
        }
        // Delete lock

        Deletelock(){
          this.apiService.Deletelock().toPromise().then(r=>{
            // const o = r as any;
            console.log(r);
            // this.apiService.accessToken=o.access_token;
          }).catch(e=>{
            console.log(e);
            
          }
          )
          }
          
          // Updatelockdataresetekey
          Updatelockdataresetekey(){
            this.apiService.Updatelockdataresetekey().toPromise().then(r=>{
              // const o = r as any;
              console.log(r);
              // this.apiService.accessToken=o.access_token;
            }).catch(e=>{
              console.log(e);
              
            }
            )
            }


            // Change lock name
              
            
            Changelockname(){
                this.apiService.Changelockname().toPromise().then(r=>{
                  // const o = r as any;
                  console.log(r);
                  // this.apiService.accessToken=o.access_token;
                }).catch(e=>{
                  console.log(e);
                  
                }
                )
                }
      // Change the super passcode

      Changethesuperpasscode(){
        this.apiService.Changethesuperpasscode().toPromise().then(r=>{
          // const o = r as any;
          console.log(r);
          // this.apiService.accessToken=o.access_token;
        }).catch(e=>{
          console.log(e);
          
        }
        )
        }

        // Transfer Lock

        TransferLock(){
          this.apiService.TransferLock().toPromise().then(r=>{
            // const o = r as any;
            console.log(r);
            // this.apiService.accessToken=o.access_token;
          }).catch(e=>{
            console.log(e);
            
          }
          )
        }



        // Send ekey
        Sendekey(){
          this.apiService.Sendekey().toPromise().then(r=>{
            // const o = r as any;
            console.log(r);
            // this.apiService.accessToken=o.access_token;
          }).catch(e=>{
            console.log(e);
            
          }
          )
        }

        // Get the eKey list of an account
        GettheeKeylistofanaccount(){
          
            this.apiService.GettheeKeylistofanaccount().toPromise().then(r=>{
              // const o = r as any;
              console.log(r);
              // this.apiService.accessToken=o.access_token;
            }).catch(e=>{
              console.log(e);
              
            }
            )
          }
        
}


