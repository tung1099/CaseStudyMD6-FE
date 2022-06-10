import { Injectable } from '@angular/core';
declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  showNotification(icon, title) {
    // tslint:disable-next-line:only-arrow-functions
    $(function() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        icon: icon,
        title: title
      });
    });
  }
}
