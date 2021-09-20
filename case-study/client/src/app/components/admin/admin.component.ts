import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/services/admin.model';
import { Observable } from 'rxjs';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

declare var M: any;

// const uri = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]

})
export class AdminComponent implements OnInit {

  // uploader:FileUploader = new FileUploader({url:uri});
  attachmentList:any = [];
  selectedFile:File = null;
  form: NgForm;
  imageData: string;
  constructor(public adminService: AdminService) { 

  //   this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
  //     this.attachmentList.push(JSON.parse(response));
  // }
  }

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
      imagePath: "",
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

      this.adminService.addImage(this.form.value.image);
      this.imageData = null;
      
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
      const file = (event.target as HTMLInputElement).files[0];
      this.form.value({image: file});
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if(file && allowedMimeTypes.includes(file.type)){
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }

  }

  // event.getElementById("file-id").files[0]; 