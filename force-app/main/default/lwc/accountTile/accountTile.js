import { LightningElement , api } from 'lwc';

export default class AccountTile extends LightningElement {

      
 @api accountId = '';
 @api accountName = '';

  handleSelect() {
    this.dispatchEvent(new CustomEvent('selectaccount', {
      detail: this.accountId
    }));


}
}