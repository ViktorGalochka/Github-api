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
    this.http.get(`https://api.github.com/search/users?q=${q}`).subscribe((data:any) => {
    for(let item of data.items) {
      this.users.push(item);
    }
  });
}
getUserById(login) {
  return this.http.get(`https://api.github.com/users/${login}`);
}

getUsers() {
  return this.users;
}
}


