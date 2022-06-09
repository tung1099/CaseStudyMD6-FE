import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {TransactionService} from '../../service/transaction/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.delete(id);
    });
  }

  ngOnInit() {
  }

  delete(id) {
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
        this.transactionService.delete(id).subscribe(() => {
          this.router.navigate(['/transaction/listTransaction']);
        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.router.navigate(['/transaction/listTransaction']);
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

}
