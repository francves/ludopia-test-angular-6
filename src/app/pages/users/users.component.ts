import { Component, OnInit } from '@angular/core';

//SmartTable
import { LocalDataSource } from 'ng2-smart-table';
//import { SmartTableService } from '../../../@core/data/smart-table.service';

import { UsersService } from "../../services/users.service";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UsersComponent implements OnInit {

  //SmartTable usuarios
  settingsUsers = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Nombre',
        type: 'string',
      },
      city: {
          title: 'Ciudad',
          type: 'string',
      },
      company: {
          title: 'Nombre de la empresa',
          type: 'string',
      },
    },
  };

  dataUsers;

  //SmartTable posts
  settingsPosts = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Titulo',
        type: 'string',
      },
      id: {
        title: 'Id',
        type: 'number',
      },
    },
  };

  dataPosts;

  constructor(private usersService: UsersService, private postsService: PostsService) {
  	this.getUsers();
    this.getPosts();
  }

  getUsers(){
    this.usersService.getUsers()
    .then(data => {
      this.dataUsers = data;
      //console.log(this.dataUsers);
      console.log("Get users method")
      for(let i = 0; i < this.dataUsers.length; i++){
      this.dataUsers[i].city = this.dataUsers[i].address.city;
      //console.log(this.dataUsers.city);
      this.dataUsers[i].company = this.dataUsers[i].company.name;
      //console.log(this.dataUsers.company);
    }
    });
  }

  getPosts(){
    this.postsService.getPosts()
    .then(data => {
      this.dataPosts = data;
      //console.log(this.dataPosts);
      console.log("Get Posts method")
    });
  }

  ngOnInit() {
  }

}
