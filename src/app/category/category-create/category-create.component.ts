import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
  idUser: number;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl()
  });
  constructor(private categoryService: CategoryService,
              private sweetAlertService: SweetAlertService,
              private authenticationService: AuthencicationService) {
    this.idUser = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

  createCategory() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(this.idUser, category).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Xong');
      this.categoryForm.reset();
    }, () => {
        this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
      }
    );
  }
}
