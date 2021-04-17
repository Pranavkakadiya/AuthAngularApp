import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  books: any;

  carForm: any;

  p=1;

  title: string ="";

  cars: any = [];

  _demoSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true); 

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {



    this._authService.getcar().subscribe((data) => {
      this.cars = data;

      //adding runtime proprty is Edit 

      this.cars.forEach((element: any) => {
        element['isEdit'] = false
      });

      console.log(this.cars)
    })
    // this.obs.subscribe(val => {
    //   console.log(val)
    // })

    console.log('Called ngOninit');
  }

  

  key='userId';
  reverse:boolean=false;//expression
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;//for aghain click
  }


  searchtitle(){
    if(this.title=""){
        this.cars=this.cars.filter((res:any)=>{
          console.log("working")
          return res.title.toLocalLowerCase().match(this.title)
        });
    }else{
      this.ngOnInit();
      console.log("notworking")
    }
  }

  //edit content
  edit(car: any) {
    car.isEdit = true;
  }

  //cancel button
  cancle(car: any) {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    car.isEdit = false;
  }



  //update button
  update(car: any) {
   
    this._authService.updatecar(car).subscribe((data: any) => {
      console.log(data)
      car.isEdit = false;
      this.ngOnInit();
      Swal.fire({
        title: 'Are you sure want to remove?',
        text: 'You will not be able to recover this file!',
        icon: 'success',
        html: `
        data is
        <pre><code>${data.title}</code></pre>
      `,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
      
      })

    })
   
  }

  delete(car: any) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this._authService.deletecar(car).subscribe((data: any) => {
          console.log(data)
          this.ngOnInit()
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }





  car = {
    title: "",
    content: ""
  }

  onSubmit(carForm: any) {

    this._authService.addcar(carForm.value).subscribe(res => {

      console.log(res);

    })
    carForm.reset();
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.ngOnInit();
    //susscribe karo to j data batave
    // console.log(userForm)
    // console.log(this.user.firstname)
  }

}
