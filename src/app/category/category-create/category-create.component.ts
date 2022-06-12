import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  id: number;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  constructor(private categoryService: CategoryService,
              private authenticationService: AuthencicationService,
              private sweetAlertService: SweetAlertService) {
    this.id = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

  createCategory() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(this.id, category).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Xong');
    }
      , () => {
        this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
      }
    );
    this.categoryForm.reset();
  }

  get nameControl() {
    return this.categoryForm.get('name');
  }
}
