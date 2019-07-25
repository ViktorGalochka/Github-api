import { Component, OnInit, Input } from '@angular/core';
import { GitHubService } from '../git-hub.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login:string;
  id: number;
  repos: number;
  profile: string;
  avatar: string;
  constructor(private gitHubservice: GitHubService, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.login = params.login
    });
   }
  
  ngOnInit() {
   this.gitHubservice.getUserById(this.login).subscribe((data:any) => {
    this.id = data.id;
    this.repos = data.public_repos;
    this.profile = data.html_url;
    this.avatar = data.avatar_url;
  });
    
  }
  
}
