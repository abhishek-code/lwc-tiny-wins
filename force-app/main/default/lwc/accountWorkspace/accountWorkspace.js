import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import ACCOUNT_SELECTION from '@salesforce/messageChannel/AccountSelection__c';

export default class AccountWorkspace extends LightningElement {
  cardTitle = 'Account workspace';

  @wire(MessageContext) messageContext;

  handleChoose() {
    publish(this.messageContext, ACCOUNT_SELECTION, {
      accountId: 'demo-cedar'
    });
  }
}