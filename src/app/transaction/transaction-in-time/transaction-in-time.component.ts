import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TransactionService} from '../../service/transaction/transaction.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Router} from '@angular/router';
import {Transaction} from '../../model/transaction';

@Component({
  selector: 'app-transaction-in-time',
  templateUrl: './transaction-in-time.component.html',
  styleUrls: ['./transaction-in-time.component.css']
})
export class TransactionInTimeComponent implements OnInit {

  idUser: number;
  date: Date[] = [];
  transaction: Transaction[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl()
  });
  constructor(private transactionService: TransactionService,
              private authenticationService: AuthencicationService,
              private router: Router) {
    this.idUser = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

   getTransactionInTime() {
    const data = this.dateForm.value;
    this.transactionService.getTransactionInTime(this.idUser, data).subscribe((list) => {
      this.transaction = list;
    });
  }
}
