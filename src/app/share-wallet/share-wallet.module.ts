import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareWalletRoutingModule } from './share-wallet-routing.module';
import { ShareListComponent } from './share-list/share-list.component';
import { ShareCreateComponent } from './share-create/share-create.component';
import { ShareDeleteComponent } from './share-delete/share-delete.component';


@NgModule({
  declarations: [ShareListComponent, ShareCreateComponent, ShareDeleteComponent],
  imports: [
    CommonModule,
    ShareWalletRoutingModule
  ]
})
export class ShareWalletModule { }
