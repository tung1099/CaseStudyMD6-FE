import { Component, OnInit } from '@angular/core';
import {AddMoneyService} from '../../service/add-money/add-money.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
idWallet: string;
  addMoneyForm: FormGroup = new FormGroup({
    money : new FormControl(),
    description : new FormControl(),
    wallet : new FormControl(),
  });
  constructor(private addMoneyService: AddMoneyService,
              private authentication: AuthencicationService,
              private activatedRoute: ActivatedRoute,
              private walletService: WalletService) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idWallet = paramMap.get('id');
    });
  }

  ngOnInit() {
  }

  addMoney() {
    const data = this.addMoneyForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.addMoneyService.addMoney(this.idWallet, data).subscribe(() => {
      Swal.fire({
        position: 'top-left',
        icon: 'success',
        title: 'Thêm thành công',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.addMoneyForm.reset();
  }
}
