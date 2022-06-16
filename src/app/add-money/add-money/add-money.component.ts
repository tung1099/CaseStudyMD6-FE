import { Component, OnInit } from '@angular/core';
import {AddMoneyService} from '../../service/add-money/add-money.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  idUser: number;
idWallet: string;
  addMoneyForm: FormGroup = new FormGroup({
    money : new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    description : new FormControl(),
    wallet : new FormControl(),
  });
  constructor(private addMoneyService: AddMoneyService,
              private authentication: AuthencicationService,
              private activatedRoute: ActivatedRoute,
              private sweetAlertService: SweetAlertService,
              private router: Router,
              private walletService: WalletService) {
    this.idUser = this.authentication.currentUserValue.id;
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
      this.sweetAlertService.showNotification('success', 'Xong');
      this.router.navigate(['wallet/list']);
    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
    });
  }

  get moneyControl() {
    return this.addMoneyForm.get('money');
  }
}
