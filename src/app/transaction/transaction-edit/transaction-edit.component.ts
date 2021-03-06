import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {TransactionService} from '../../service/transaction/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  idUser: number;
  categories: Category[] = [];
  wallet: Wallet[] = [];
  transactionForm: FormGroup = new FormGroup({
    id: new FormControl(),
    amount: new FormControl(),
    note: new FormControl(),
    date: new FormControl(),
    category: new FormControl(),
    wallet: new FormControl(),
  });
  constructor(
    private categoryService: CategoryService,
    private sweetAlertService: SweetAlertService,
    private walletService: WalletService,
    private authService: AuthencicationService,
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.idUser = this.authService.currentUserValue.id;
      this.getTransactionById(id);
    });
  }

  ngOnInit() {
    this.getAllWallet();
    this.getAllCategory();
  }

  get idControl() {
    return this.transactionForm.get('id');
  }

  getTransactionById(id) {
    this.transactionService.findById(id).subscribe((transaction) => {
      this.transactionForm = new FormGroup({
        id: new FormControl(transaction.id),
        amount: new FormControl(transaction.amount),
        note: new FormControl(transaction.note),
        date: new FormControl((transaction.date).substring(0, 10)),
        category: new FormControl(transaction.category.id),
        wallet: new FormControl(transaction.wallet.id)
      });
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory(this.idUser).subscribe(categories => {
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });
  }

  getAllWallet() {
    this.walletService.getAllByUserId(this.idUser).subscribe( wallet1 => {
        this.wallet = wallet1;
      },
      (error) => {
        console.log(error);
      });
  }

  update() {
    const data = this.transactionForm.value;
    data.category = {
      id: data.category
    };
    data.wallet = {
      id: data.wallet
    };
    this.transactionService.update(this.idControl.value, this.idUser , data).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Xong');
    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... ???? c?? l???i x???y ra');
    });
  }

}
