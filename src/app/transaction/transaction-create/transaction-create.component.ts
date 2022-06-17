import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {TransactionService} from '../../service/transaction/transaction.service';
import {Router} from '@angular/router';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  checkWallet: Wallet = {};
  checkAmount: number;
  checkTotal: boolean;
  date = new Date();
  idUser: number;
  categories: Category[] = [];
  wallet: Wallet[] = [];
  walletId: number;
  transactionForm: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    note: new FormControl(),
    date: new FormControl((new Date()).toISOString().substring(0, 10), [Validators.required]),
    category: new FormControl('', [Validators.required]),
    wallet: new FormControl('', [Validators.required])
  });

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(
    private categoryService: CategoryService,
    private sweetAlertService: SweetAlertService,
    private authService: AuthencicationService,
    private walletService: WalletService,
    private transactionService: TransactionService,
    private router: Router,
  ) {
    this.idUser = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllWallet();
    this.getAllCategory();
    this.walletId = this.transactionForm.get('wallet').value.id;
  }

  getAllCategory() {
    this.categoryService.getAllCategory(this.idUser).subscribe(categories => {
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });
  }

  getAllWallet() {
    this.walletService.getAllByUserId(this.idUser).subscribe(wallet1 => {
        this.wallet = wallet1;
      },
      (error) => {
        console.log(error);
      });
  }

  createTransaction() {
    const data = this.transactionForm.value;
    console.log(data);
    console.log(data.category);
    if (data.date == null) {
      data.date = new Date();
      console.log(data.date);
    }
    data.category = {
      id: data.category
    };
    data.wallet = {
      id: data.wallet
    };
    if (this.transactionForm.valid) {
      if (this.checkTotal) {
        this.sweetAlertService.showNotification('error', 'Hmm... Số dư không đủ!');
      } else {
        this.transactionService.create(this.idUser, data).subscribe(() => {
            this.sweetAlertService.showNotification('success', 'Xong');
            this.transactionForm.reset();
          }
          , () => {
            this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
          });
      }
      } else {
      this.sweetAlertService.showNotification('error', 'Hmm... Hãy nhập đủ dữ liệu');
    }
  }
  usernameCheck($event) {
    this.checkAmount = $event.target.value;
    if (this.checkAmount > this.checkWallet.balance) {
      this.checkTotal = true;
    } else {
      this.checkTotal = false;
    }
    console.log(this.checkAmount);
    console.log(this.checkTotal);
  }

  walletCheck($event) {
     // @ts-ignore
    this.walletService.getById($event.target.value).subscribe(wallet => {
       this.checkWallet = wallet;
       console.log(this.checkWallet);
     });
    console.log(this.checkTotal);
  }

  get amountControl() {
    return this.transactionForm.get('amount');
  }
  get dateControl() {
    return this.transactionForm.get('date');
  }
  get categoryControl() {
    return this.transactionForm.get('category');
  }
  get walletControl() {
    return this.transactionForm.get('wallet');
  }

  createCategory() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(this.idUser, category).subscribe(() => {
      this.getAllCategory()
        this.sweetAlertService.showNotification('success', 'Xong');
        this.categoryForm.reset();
      // this.router.navigate(['/category/list', this.idUser]);
      // this.router.navigate(['/transaction/createTransaction']);
      }, () => {
        this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
      }
    );
  }
  get nameControl() {
    return this.categoryForm.get('name');
  }
}
