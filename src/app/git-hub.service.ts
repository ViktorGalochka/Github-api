import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private users: any[];
  
  constructor(private http: HttpClient) {
    this.users = [];
  }
  
    searchUser(q) {
    this.users.splice(0, 30);
    let obs1 = this.http.get(`https://api.github.com/search/users?q=${q}`);
    obs1.subscribe((data:any) => {
      console.log(data);
      let p = data.total_count;
      this.http.get(`https://api.github.com/search/users?q=${q}&per_page=${p}`).subscribe((data2:any) => {
      console.log(data2);
      for(let item of data2.items) {
        this.users.push(item);
      }
    });
  });
}
getUserById(login) {
  return this.http.get(`https://api.github.com/users/${login}`);
}

getUsers() {
  return this.users;
}
}


