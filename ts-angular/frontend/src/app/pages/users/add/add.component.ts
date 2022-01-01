import { Component, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import UsersService           from '../service/users.service';

@Component({
  selector   : 'app-add',
  templateUrl: './add.component.html',
  styleUrls  : ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.add({
      name : this.form.get('name')?.value,
      email: this.form.get('email')?.value
    }).subscribe(console.log)
  }

}
