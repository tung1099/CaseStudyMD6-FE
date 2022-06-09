import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {FormControl, FormGroup} from '@angular/forms';
import {WalletService} from '../../service/wallet/wallet.service';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  idUser = 1;
  selectedFile: any = File;
  wallet: Wallet = {};
  moneyTypes: MoneyType[] = [];
  walletForm: FormGroup = new FormGroup({
    icon: new FormControl(),
    name: new FormControl(),
    total: new FormControl(),
    moneyType: new FormControl(),
    note: new FormControl(),
    // user: new FormControl()
  });


  constructor(private walletService: WalletService,
              private moneytypeService: MoneytypeService,
              private router: Router) { }

  ngOnInit() {
    this.getAllType();
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
  }
  getAllType() {
    this.moneytypeService.getAll().subscribe((data) => {
      this.moneyTypes = data;
    }, (error) => {
      alert(error);
    });
  }
  createWallet() {
    const wallet = new FormData();
    wallet.append('icon', this.selectedFile);
    wallet.append('name', this.walletForm.get('name').value);
    wallet.append('total', this.walletForm.get('total').value);
    wallet.append('moneyType', this.walletForm.get('moneyType').value);
    wallet.append('note', this.walletForm.get('note').value);
    // wallet.append('user', this.walletForm.get('user').value);
    this.walletService.create(this.idUser, wallet).subscribe(() => {
      this.router.navigateByUrl('/wallet/list');
    });
  }

}
