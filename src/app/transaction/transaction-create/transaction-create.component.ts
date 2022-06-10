import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {TransactionService} from '../../service/transaction/transaction.service';
import {Router} from '@angular/router';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  categories: Category[] = [];
  wallet: Wallet[] = [];
  transactionForm: FormGroup = new FormGroup({
    amount: new FormControl(),
    note: new FormControl(),
    date: new FormControl(),
    category: new FormControl(),
    wallet: new FormControl()
  });

  constructor(
    private categoryService: CategoryService,
    private sweetAlertService: SweetAlertService,
    private walletService: WalletService,
    private transactionService: TransactionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllWallet();
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });
  }
  getAllWallet() {
    this.walletService.getAll().subscribe( wallet1 => {
        this.wallet = wallet1;
      },
      (error) => {
        console.log(error);
      });
  }
  create() {
    const data = this.transactionForm.value;
    data.category = {
      id: data.category
    };
    data.wallet = {
      id: data.wallet
    };
    this.transactionService.create(data).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Xong');
      this.transactionForm.reset();
    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
    });
  }

}
