import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/services/admin.model';
import { Observable } from 'rxjs';
declare var M: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]

})
export class AdminComponent implements OnInit {

  selectedFile:File = null;
  constructor(public adminService: AdminService) { }

  selectedProduct: Admin;

  ngOnInit(): void {
    //debugger;
    this.resetForm();
    this.refreshProductList();
    
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminService.selectedProduct = {
      _id: "",
      name: "",
      image: "",
      price: null,
      category: "",
      description: "",
    }
  }
  

    onSubmit(form: NgForm) {
      if (form.value._id == "") {
        this.adminService.postProduct(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshProductList();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
      }
      else {
        this.adminService.putProduct(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshProductList();
          M.toast({ html: 'Updated successfully', classes: 'rounded' });
        });
      }
    }
    

    refreshProductList() {
      this.adminService.getProductList().subscribe((res) => {
        this.adminService.products = res as Admin[];
      });
    }

    onEdit(prod: Admin) {
      this.adminService.selectedProduct = prod;

    }

    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.adminService.deleteProduct(_id).subscribe((res) => {
          this.refreshProductList();
          this.resetForm(form);
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
      }
    }

    onSelectedFile(event) {
      this.selectedFile = <File>event.target.files[0];
      console.log(event);

    }

    onUpload(prod){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this.adminService.uploadImage = prod;
    }
  }
