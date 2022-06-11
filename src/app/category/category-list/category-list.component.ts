import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  id: number;
  categories: Category[] = [];
  constructor(private categoryService: CategoryService,
              private authenticationService: AuthencicationService) {
    this.id = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllCategory();
  }

  private getAllCategory() {
    this.categoryService.getAllCategory(this.id).subscribe(categories => {
      this.categories = categories;
    });
  }
}
