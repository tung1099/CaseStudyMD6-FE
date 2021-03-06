import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {WalletService} from '../../service/wallet/wallet.service';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-wallet-delete',
  templateUrl: './wallet-delete.component.html',
  styleUrls: ['./wallet-delete.component.css']
})
export class WalletDeleteComponent implements OnInit {
  idUser: number;

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthencicationService,
              private router: Router) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.deleteWallet(id);
    });
  }

  ngOnInit() {
  }

  deleteWallet(id) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa ví này?',
      text: 'Thao tác này không thể hoàn tác lại!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa!',
      cancelButtonText: 'Quay lại',
    }).then((result) => {
      if (result.isConfirmed) {
        this.walletService.delete(id).subscribe(() => {
        });
        Swal.fire(
          'Đã xóa!',
        );
      }
    });
  }
}
