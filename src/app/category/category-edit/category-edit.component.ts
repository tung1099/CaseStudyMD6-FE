import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  userId: number;
  categoryForm: FormGroup;
  id: number;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private authenticationService: AuthencicationService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
      this.userId = this.authenticationService.currentUserValue.id;
    });
  }

  ngOnInit() {
  }

   getCategory(id: number) {
    return this.categoryService.findCategoryById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name),
      });
    });
  }
  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(this.userId, category).subscribe(() => {
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
}
