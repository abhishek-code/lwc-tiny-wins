import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import ACCOUNT_SELECTION from '@salesforce/messageChannel/AccountSelection__c';

export default class AccountSelectionPreview extends LightningElement {
  @wire(MessageContext) messageContext;
  subscription = null;
  selectedId = 'None';

  connectedCallback() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.messageContext,
        ACCOUNT_SELECTION,
        (message) => {
          if (typeof message.accountId === 'string') {
            this.selectedId = message.accountId;
          }
        }
      );
    }
  }

  disconnectedCallback() {
    if (this.subscription) {
      unsubscribe(this.subscription);
      this.subscription = null;
    }
  }
}