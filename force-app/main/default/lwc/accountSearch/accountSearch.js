import { LightningElement, api } from 'lwc';

export default class AccountSearch extends LightningElement {

  @api
  focusSearch() {
    this.refs.searchInput?.focus();
  }

}