import { Component, OnInit, Input } from '@angular/core';
import { GitHubService } from '../git-hub.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { logging } from 'protractor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;
  users: any[];
  user: string;
  @Input() login;
  ref:string;
  constructor(private gitHubService: GitHubService, private fb: FormBuilder) {
    this.users = gitHubService.getUsers();
  }
  
  ngOnInit() {
    this.createForm(); 
    this.users = this.gitHubService.getUsers();
  }
  
  createForm() {
    this.searchForm = this.fb.group({
      user:[null,Validators.required]
    })
  }
  
  onSubmit() {
    const usersList = this.searchForm.value.user;
    this.gitHubService.searchUser(usersList);
  }
}
