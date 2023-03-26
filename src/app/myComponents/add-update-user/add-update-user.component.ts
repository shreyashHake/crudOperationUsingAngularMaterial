import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/model/myErrorStateMatcher';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})

export class AddUpdateUserComponent implements OnInit {
  frm!:FormGroup;
  action="Add";
  @ViewChild("userForm") usrForm!:NgForm; // it will be used for resetting the form validation messages

  get f(){
   return this.frm.controls;
  }
  errorMatcher= new MyErrorStateMatcher();

  constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private userService:UsersService,private snackBar: MatSnackBar){
   }

  ngOnInit(): void {
    this.getUserById();
    this.frm= this.fb.group({
      id:[0],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }

  // fetching the user by id from the database
  getUserById= ()=>{
    const id= this.route.snapshot.params['id'];
    if(id){
      this.action="Update";
      this.userService.getById(id).subscribe({
        next:(user=>this.frm.patchValue(user)),
        error:(err)=>console.log(err)
      })
    }
  }

  onPost():void{
    this.userService.addUser(this.frm.value).subscribe({
      next:(data)=>{
        this.usrForm.reset();
        this.usrForm.resetForm();
        this.snackBar.open("success",'close',{
          duration:3000
        })
      },
      error:(err)=>{
        console.log(err);
        this.snackBar.open("error",'close',{
          duration:3000
        })
      }
     }
     )
  }
}
