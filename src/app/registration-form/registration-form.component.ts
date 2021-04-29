import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

   simpleProducts: string[] = [
    "Information Technology",
    "Computer Science",
    "Civil",
    "Chemical",
    "Physics",
    "Mechanical",
    "other"
];

  priorities: string[] =[
    "male",
    "female"
  ]

  catagory : string[] = [
    "SC","ST","OBC","Other"
  ]

  submitButtonOptions = {
    text: "Submit",
    type: "success",
    useSubmitBehavior: true
  }
 

  constructor() { }

  ngOnInit(): void {
  }
  
  employee = {
    // ...
    
  }
  
  // handleSubmit = function(e : any) {
  //   setTimeout(() => { 
  //       alert("Submitted");          
  //   }, 1000);
  //  }
   
   register=document.getElementById("register");
   
   handleSubmit = function(e: any) {
    setTimeout(() => { 
        alert("Submitted");          
    }, 1000);
  console.dir(e.srcElement);
    for(let element of e.srcElement){
      console.log(element.value);
      if(element.name=="Catagory"){
        //console.log("Inside Catagory");
        if(element.value=="true")
        localStorage.setItem(element.name ,element.parentNode.outerText);  
      }
      else
      localStorage.setItem(element.name ,element.value);
    }
    e.preventDefault();
}
  
  
}


