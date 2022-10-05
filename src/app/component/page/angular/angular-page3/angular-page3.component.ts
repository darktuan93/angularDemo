import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-angular-page3',
  templateUrl: './angular-page3.component.html',
  styleUrls: ['./angular-page3.component.css']
})
export class AngularPage3Component implements OnInit {
  public formInfor: any; // Khai báo 1 biến public formInfor với kiểu dữ liệu bất kỳ
  public inforCustomer: any = {}// Kiểu dữ là object để hứng dữ liệu khi lấy từ form Input
  public submitted = false;
  public modelView: any;


  constructor(private fb: FormBuilder) {
    this.formInfor = FormGroup // Khởi tạo biến là FormGroup
  }

  ngOnInit(): void {


    this.formInfor = this.fb.group({
      name: new FormControl('', [Validators.required]
      ),
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    })

  }

  get f() {
    return this.formInfor.controls;
  }

  // HÀM CONFIRM FORM
  confirmInfor() {
    this.submitted = true;
    if (!this.formInfor.invalid) {
      // console.log(this.formInfor.value)
      this.inforCustomer = this.formInfor.value
    }
  }

}
