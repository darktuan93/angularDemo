import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../../../../services/product-service.service";
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public ArrSanPham: any
  public formSanPham: any


  constructor(
    private productService: ProductServiceService,
    private fb: FormBuilder
  ) {
    this.formSanPham = FormGroup
  }

  get f() {
    return this.formSanPham.controls;
  }

  ngOnInit(): void {
    //Get API
    this.getdata()

    this.formSanPham = this.fb.group({
      MaSP: new FormControl('', [Validators.required]),
      TenSP: new FormControl('', [Validators.required]),
      GiaSP: new FormControl('', [Validators.required]),
      HinhSP: new FormControl('', [Validators.required]),
      MoTa: new FormControl('', [Validators.required]),
    });
  }


  //Lấy dữ liệu từ API
  getdata = () => {
    this.productService.getAllData().subscribe((res: any) => {
      this.ArrSanPham = res
    })
  }

  delSanPham(MaSP: any) {
    let index = this.ArrSanPham.findIndex((sp: any) => {
      return sp.MaSP === MaSP
    })
    this.ArrSanPham.splice(index, 1);
    this.productService.delItems(MaSP).subscribe((res: any) => {
      console.log(res)
    })
  }

  editSanPham(MaSP: any) {
    console.log(MaSP)
  }

  addSanPham() {
    if (!this.formSanPham.invalid) {
      let value = this.formSanPham.value
      this.ArrSanPham.push(value)
      this.productService.addItems(value).subscribe((res: any) => {
        console.log(res)
      })
    }
  }

  checkPrice() {
    // this.ArrSanPham.sort()
    console.log(this.ArrSanPham)
    this.ArrSanPham = this.ArrSanPham.sort((a: any, b: any) => {
      return a.GiaSP - b.GiaSP
    })
  }

  checkPriceHigh() {
    this.ArrSanPham = this.ArrSanPham.sort((a: any, b: any) => {
      return b.GiaSP - a.GiaSP
    })
  }

  searchSP($event: any) {
    let valueInput = $event.target.value

    this.ArrSanPham = this.ArrSanPham.filter((sp: any) => {
      return sp.TenSP.includes(valueInput);
    })
  }

}
