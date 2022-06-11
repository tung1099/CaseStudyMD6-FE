import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  id: number;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl()
  });
  constructor(private categoryService: CategoryService,
              private authenticationService: AuthencicationService) {
    this.id = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

  createCategory() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(this.id, category).subscribe(() => {
      Swal.fire({
        position: 'top-left',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.categoryForm.reset();
  }
}
