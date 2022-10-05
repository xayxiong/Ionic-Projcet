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

  clientId1 = "24bd4a0e257a48f1a32b20b52cfbe6db"
  accessToken1 = "f1611d9a718cb6df1b63dab1870c2cf8"
  username = "+8562077912908"
  password = "bfc6f193a5dbad9f53a37afbddecd81c"
  client_secret = "755b2f580dbb58cbd7bdb8820b7bb706"


// –disable-web-security –disable-gpu –user-data-dir=~/chromeTemp

//   clientId=''
//   accessToken=''


  oauth() {
    const url = 'https://euapi.sciener.com/oauth2/token';
    let body = new  URLSearchParams()
    body.set('clientId', this.clientId)
    body.set('accessToken', this.accessToken)
    body.set('username', this.username)
    body.set('password', this.password)
    body.set('client_secret', this.client_secret);


  //   //  oauth(keyName=string,receiverUsername=string){

  //   // }
  //   // body.set('keyName', keyName);
  //   // body.set('receiverUsername', receiverUsername);

  //   // body.set('date', new Date().getTime() + '');
    return this.http.post(url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        // .set('Origin','*')
    }
    )
  }
// Refresh access token
  clientId3 = "24bd4a0e257a48f1a32b20b52cfbe6db"
clientSecret = "755b2f580dbb58cbd7bdb8820b7bb706"
grant_type = "f1611d9a718cb6df1b63dab1870c2cf8"
refresh_token = "8e35975ee600a7052398830a7d8c4f09"

  oauth1() {
    const url = 'https://euapi.sciener.com/oauth2/token';
    let body = new  URLSearchParams()
    body.set('clientId', this.clientId3)
    body.set('clientSecret', this.clientSecret)
    body.set('grant_type', this.grant_type)
    body.set('refresh_token', this.refresh_token)
    


  //   //  oauth(keyName=string,receiverUsername=string){

  //   // }
  //   // body.set('keyName', keyName);
  //   // body.set('receiverUsername', receiverUsername);

  //   // body.set('date', new Date().getTime() + '');
    return this.http.post(url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        // .set('Origin','*')
    }
    )
  }




  // Lock APIs
  // Lock initialize

    clientId? = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken? = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockData = "kfRHEPts2FJOSuTgvQEjwuFzL8OxOBHBOC7d+6BrY4xvRhocJjGnw0nWNXFEUEQEDleaLfmSmGIfqGsK7jo1xfqV52+Kvx0FURZwPQSa640I5V/QWARDmhesXh3KLFcvBAFdpV2P8DB35jy01hX7pWqGvoGIfmF23VUs61U3bYeEwhw/Be7KxW9oEGnHxASZn6Kzic7PnTeZBNRcE/x/b9oDXDvDoTWw+5641MDks3XJLc8W4+fRSpUHTC2FuW9ktU1oUW9UxiOVZH3MKmLYxSRAZ9NLwTEBEB9dx2Fi3pNqgVZH2XcR806DmnUv02nmrxMwhLilmddE9j2aFdvZzj4jmOxukJh1iQytF2j4jvFrboUcdj62DjIn3c1vaEWILCo7Pu1Na9AZFQqbpzc2233U1+gg7Rf5u1Td/397ZpYQVw0nU1r4JJRVoEFFV7pqPcP/wTca4DzZiPUliC7EASaSyKw9Eh+XQoxeZ39ugp7RM7UUMuVRMws7ZimOwAGFR96Zo7tm/MmvIGS4zkEGvqKwE2dDCydpdmXMiFwPH7CpGShdWIn0jRUcfqGiAEN4SGjxqN3GYa1lhzwRa+Ep4PH0rxeF72TML+kUoQ6H3k2/c593gYZ5yIeW4286luR4vx2U6ITcmnwdpewE/rc/aVD+Oo8X562K+QuIL8qQscb8g5jTsvtSw3vC3FEpYMpHpowEwz3wD9SXx1nYhRYQLaGgY0zk0fr+4QhnXzSfKG7LKfg94kzh8qmyeITOhVPLKe5UsCvGYhnrfT24ugGPIuhwcSmXlg=="
    lockAlias
    groupId
    nbInitSuccess
    date ="1663905790288"


    Lockinitialize() {
      const url = 'https://euapi.sciener.com/v3/lock/initialize';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId)
      body.set('accessToken', this.accessToken)
      body.set('lockData', this.lockData)
      body.set('lockAlias', this.lockAlias)
      body.set('groupId', this.groupId);
      body.set('nbInitSuccess', this.nbInitSuccess); 
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }
    // Get the lock list of an account



    clientId2 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken2 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockAlias2
    groupId2
    pageNo = "1"
    pageSize = "20"
    // date1 = "1663831526335"
    Getthelocklistofanaccount() {
      const url = 'https://euapi.sciener.com/v3/lock/list?clientId=24bd4a0e257a48f1a32b20b52cfbe6db&accessToken=f1611d9a718cb6df1b63dab1870c2cf8&pageNo=1&pageSize=20&date=1664352062331';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId2)
      body.set('accessToken', this.accessToken2)
      body.set('lockAlias', this.lockAlias2)
      body.set('groupId', this.groupId2)
      body.set('pageNo', this.pageNo);
      body.set('pageSize', this.pageSize); 
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }

    // Get lock details
    clientId4 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken3 = "f1611d9a718cb6df1b63dab1870c2cf8"
   lockId = "6523400"
   date2 ="1664353753012"

    Getlockdetails() {
      const url = 'https://euapi.sciener.com/v3/lock/detail?clientId=24bd4a0e257a48f1a32b20b52cfbe6db&accessToken=f1611d9a718cb6df1b63dab1870c2cf8&lockId=6523400&date=1664353753012';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId4)
      body.set('accessToken', this.accessToken3)
      body.set('lockId', this.lockId)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }

    // Delete lock


    clientId5 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken4 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockId2 = "6523400"
    date3 = "1663906771702"
    Deletelock() {
      const url = 'https://euapi.sciener.com/v3/lock/delete';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId4)
      body.set('accessToken', this.accessToken3)
      body.set('lockId', this.lockId)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }
    // Update lock data(reset ekey


    clientId6 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken5 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockId3 = "6523400"
    lockData2 = "kfRHEPts2FJOSuTgvQEjwuFzL8OxOBHBOC7d+6BrY4xvRhocJjGnw0nWNXFEUEQEDleaLfmSmGIfqGsK7jo1xfqV52+Kvx0FURZwPQSa640I5V/QWARDmhesXh3KLFcvBAFdpV2P8DB35jy01hX7pWqGvoGIfmF23VUs61U3bYeEwhw/Be7KxW9oEGnHxASZn6Kzic7PnTeZBNRcE/x/b9oDXDvDoTWw+5641MDks3XJLc8W4+fRSpUHTC2FuW9ktU1oUW9UxiOVZH3MKmLYxSRAZ9NLwTEBEB9dx2Fi3pNqgVZH2XcR806DmnUv02nmrxMwhLilmddE9j2aFdvZzj4jmOxukJh1iQytF2j4jvFrboUcdj62DjIn3c1vaEWILCo7Pu1Na9AZFQqbpzc2233U1+gg7Rf5u1Td/397ZpYQVw0nU1r4JJRVoEFFV7pqPcP/wTca4DzZiPUliC7EASaSyKw9Eh+XQoxeZ39ugp7RM7UUMuVRMws7ZimOwAGFR96Zo7tm/MmvIGS4zkEGvqKwE2dDCydpdmXMiFwPH7CpGShdWIn0jRUcfqGiAEN4SGjxqN3GYa1lhzwRa+Ep4PH0rxeF72TML+kUoQ6H3k2/c593gYZ5yIeW4286luR4vx2U6ITcmnwdpewE/rc/aVD+Oo8X562K+QuIL8qQscb8g5jTsvtSw3vC3FEpYMpHpowEwz3wD9SXx1nYhRYQLaGgY0zk0fr+4QhnXzSfKG7LKfg94kzh8qmyeITOhVPLKe5UsCvGYhnrfT24ugGPIuhwcSmXlg=="
    date4 = "1663907191854"

    Updatelockdataresetekey() {
      const url = 'https://euapi.sciener.com/v3/lock/updateLockData';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId6)
      body.set('accessToken', this.accessToken5)
      body.set('lockId', this.lockId3)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }
    // Change lock name


    clientId7 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken6 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockId4 = "6523400"
    lockAlias3 = "XNK3_969729"
    date5 = "1663907813313"
    Changelockname() {
      const url = 'https://euapi.sciener.com/v3/lock/rename';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId7)
      body.set('accessToken', this.accessToken6)
      body.set('lockId', this.lockId4)
      body.set('lockAlias', this.lockAlias3)
      body.set('date', this.date5)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }

    clientId8 ="24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken7 ="f1611d9a718cb6df1b63dab1870c2cf8"
    lockId5 = "6523400"
    password5 ="061383902"
    changeType = ""
    date6 ="1663908638854"


    Changethesuperpasscode() {
      const url = 'https://euapi.sciener.com/v3/lock/changeAdminKeyboardPwd';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId7)
      body.set('accessToken', this.accessToken6)
      body.set('lockId', this.lockId5)
      body.set('password', this.password5)
      body.set('changeType', this.changeType)
      body.set('date6', this.date5)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }


    // TransferLock
    


    clientId9 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken8 = "f1611d9a718cb6df1b63dab1870c2cf8"
    receiverUsername = "kengxiong36@gmail.com"
    lockIdList = "123456"
    date7 = "1663909375341"
    TransferLock() {
      const url = 'https://euapi.sciener.com/v3/lock/transfer';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId9)
      body.set('accessToken', this.accessToken8)
      body.set('receiverUsername', this.receiverUsername)
      body.set('lockIdList', this.lockIdList)
    
      body.set('date', this.date5)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }



    // Send ekey


    clientId10 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken9 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockId8 = "6523400"
    receiverUsername1 = "kengxiong36@gmail.com"
    keyName = "keng"
    startDate = "1663834010100"
    endDate = "1663834010100"
    remarks = ""
    remoteEnable = "cccc"
    keyRight = "0"
    createUser=""
    date8 = "1663834010100"

    Sendekey() {
      const url = 'https://euapi.sciener.com/v3/key/send';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId10)
      body.set('accessToken', this.accessToken9)
      body.set('lockId', this.lockId8)
      body.set('receiverUsername', this.receiverUsername1)
    
      body.set('keyName', this.keyName)
      body.set('startDate', this.startDate)
      body.set('endDate', this.endDate)
      body.set('remarks', this.remarks)
      body.set('remoteEnable', this.remoteEnable)
      body.set('keyRight', this.keyRight)
      body.set('createUser', this.createUser)
      // body.set('date8', this.date8)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }

    // Get the eKey list of an account


    clientId11 = "24bd4a0e257a48f1a32b20b52cfbe6db"
    accessToken11 = "f1611d9a718cb6df1b63dab1870c2cf8"
    lockAlias1 =""
    groupId1 = ""
    pageNo1 = "1"
    pageSiz = "20"
    date1 = "747934938240"

    GettheeKeylistofanaccount() {
      const url = 'https://euapi.sciener.com/v3/key/list';
      let body = new  URLSearchParams()
      body.set('clientId', this.clientId11)
      body.set('accessToken', this.accessToken11)
      body.set('lockAlias', this.lockAlias1)
      body.set('groupId', this.groupId1)
    
      body.set('pageNo', this.pageNo1)
      body.set('pageSize', this.pageSiz)
      body.set('date', this.date1)
     
      // body.set('date8', this.date8)
    
      body.set('date', new Date().getTime() + '');
  
  
      
      return this.http.post(url, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          // .set('Origin','*')
      }
      )
    }

   
    testRESTAPI(body={}){
      const resturl  = 'http://localhost:3000/test-API';
      return this.http.post(resturl, body, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      });
    }
}














