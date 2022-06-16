import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {TransactionService} from '../../service/transaction/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {
  idUser: number;
  constructor(
    private transactionService: TransactionService,
    private authService: AuthencicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.idUser = this.authService.currentUserValue.id;
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
      title: 'Bạn có chắc chắn muốn xóa?',
      text: 'Số tiền trên giao dịch này sẽ được hoàn lại vào ví của bạn. ' +
        'Bạn sẽ không thể hoàn tác giao dịch này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Quay lại',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.transactionService.delete(id).subscribe(() => {
          this.router.navigate(['/transaction/listTransactionInTimeByIdWallet', this.idUser]);
        });
        swalWithBootstrapButtons.fire(
          'Đã xóa!',
        );
      }
    });
  }

}
