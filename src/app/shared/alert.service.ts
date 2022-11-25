import { Injectable } from '@angular/core';
import { FuseAlertType } from '@fuse/components/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;

  constructor() { }

  alertMessage(type: FuseAlertType, message: string, view: boolean) {
    this.alert = {
      type: type,
      message: message || 'Error undefined'
    };
    this.showAlert = view
  }
}
