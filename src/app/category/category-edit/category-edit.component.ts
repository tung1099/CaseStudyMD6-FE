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

  id: number;
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private authenticationService: AuthencicationService,
              private sweetAlertService: SweetAlertService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const a = +paramMap.get('id');
      this.id = a;
    });
  }

  ngOnInit() {
    this.getCategoryById(this.id);
  }

   getCategoryById(id) {
    return this.categoryService.findCategoryById(id).subscribe((category) => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name),
      });
    });
  }
  updateCategory() {
    this.categoryService.updateCategory(this.id, this.categoryForm.value ).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Thành công !!!');
      this.router.navigate(['category/list/{id}']);
    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
    });
  }
}
