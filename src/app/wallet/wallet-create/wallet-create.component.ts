import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WalletService} from '../../service/wallet/wallet.service';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {IconService} from '../../service/icon/icon.service';
import {Icon} from '../../model/icon';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  idUser: number;
  // selectedFile: any = File;
  wallet: Wallet = {};
  moneyTypes: MoneyType[] = [];
  icons: Icon[] = [];
  walletForm: FormGroup = new FormGroup({
    icon: new FormControl(),
    name: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    moneyType: new FormControl('', [Validators.required]),
    note: new FormControl(),
    // user: new FormControl()
  });


  constructor(private walletService: WalletService,
              private moneytypeService: MoneytypeService,
              private authService: AuthencicationService,
              private iconService: IconService,
              private router: Router) {
     this.idUser = authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllType();
    this.getAllIcon();
  }
  // onSelectFile(event) {
  //   this.selectedFile = event.target.files[0];
  // }
  getAllIcon() {
    this.iconService.getAll().subscribe((data) => {
      this.icons = data;
    }, (error) => {
      alert(error);
    });
  }
  getAllType() {
    this.moneytypeService.getAll().subscribe((data) => {
      this.moneyTypes = data;
    }, (error) => {
      alert(error);
    });
  }
  createWallet() {
    const wallet = this.walletForm.value;
    console.log(this.walletForm.value);
    // wallet.moneyTypes = {
    //   id: wallet.moneyTypes
    // };
    wallet.icon = {
      id: 1
    };
    this.walletService.create(this.idUser, wallet).subscribe(() => {
      // this.walletForm.reset();
      this.router.navigate(['/wallet/list', this.idUser]);
    });
  }
  get nameControl() {
    return this.walletForm.get('name');
  }
  get totalControl() {
    return this.walletForm.get('total');
  }
  get moneyTypeControl() {
    return this.walletForm.get('moneyType');
  }
}
