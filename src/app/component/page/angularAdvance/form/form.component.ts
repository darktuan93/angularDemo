import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../../../../services/product-service.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public ArrSanPham: any

  constructor(
    private productService: ProductServiceService
  ) {

  }

  ngOnInit(): void {
    //Get API
    this.getdata()
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
    console.log('tes')
  }
}
