import { Component, OnInit } from '@angular/core';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FnParam} from '@angular/compiler/src/output/output_ast';
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
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.walletService.delete(id).subscribe(() => {
          this.router.navigate(['/wallet/list', this.idUser]);
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
}
