import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.deleteCategory(id);
    });
  }

  ngOnInit() {
  }

   deleteCategory(id) {
     const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
         confirmButton: 'btn btn-success',
         cancelButton: 'btn btn-danger'
       },
       buttonsStyling: false
     });

     swalWithBootstrapButtons.fire({
       title: 'Are you sure?',
       text: 'You won\'t be able to revert this!',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Yes, delete it!',
       cancelButtonText: 'No, cancel!',
       reverseButtons: true
     }).then((result) => {
       if (result.isConfirmed) {
         this.categoryService.deleteCategory(id).subscribe(() => {
           this.router.navigate(['/category/list']);
         });
         swalWithBootstrapButtons.fire(
           'Deleted!',
           'Your file has been deleted.',
           'success'
         );
       } else if (
         result.dismiss === Swal.DismissReason.cancel
       ) {
         this.router.navigate(['/category/list']);
         swalWithBootstrapButtons.fire(
           'Cancelled',
           'Your imaginary file is safe :)',
           'error'
         );
       }
     });
  }
}
