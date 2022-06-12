import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  userId: number;
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });
  // id: number;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private authenticationService: AuthencicationService,
              private sweetAlertService: SweetAlertService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getCategory(id);
      this.userId = this.authenticationService.currentUserValue.id;
    });
  }

  ngOnInit() {
  }

  get idControl() {
    return this.categoryForm.get('id');
  }

   getCategory(id) {
    return this.categoryService.findCategoryById(id).subscribe((category) => {
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
      });
    });
  }
  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(this.idControl.value, this.userId, category).subscribe(() => {
      Swal.fire({
        position: 'top-left',
        icon: 'success',
        title: 'Chỉnh sửa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['category/list/{id}']);
    });
  }
  get nameControl() {
    return this.categoryForm.get('name');
  }
}
