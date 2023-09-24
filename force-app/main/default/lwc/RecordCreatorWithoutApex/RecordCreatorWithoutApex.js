import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import CONTACT_LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';

export default class RecordCreatorWithoutApex extends LightningElement {
    accountName = '';
    contactLastName = '';

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleLastNameChange(event) {
        this.contactLastName = event.target.value;
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }

    createRecords() {
        let fields = {};
        if (!this.contactLastName) this.contactLastName = this.accountName;

        fields[ACCOUNT_NAME_FIELD.fieldApiName] = this.accountName;
        const recordAccountInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

        createRecord(recordAccountInput)
            .then((account) => {
                fields = {};
                fields[CONTACT_ACCOUNT_ID_FIELD.fieldApiName] = account.id;
                fields[CONTACT_LAST_NAME_FIELD.fieldApiName] = this.contactLastName;
                const recordContactInput = { apiName: CONTACT_OBJECT.objectApiName, fields };

                createRecord(recordContactInput)
                    .then((contact) => this.showToast('Success', 'Account and Contact records created successfully!', 'success'))
                    .catch((error) => this.showToast('Error creating Contact record', error.body.message, 'error'));
            })
            .catch((error) => {
                const errorMessage =
                    Object.keys(error).length === 0
                        ? 'Some error occurred while creating Account Record'
                        : error.body.message;
                this.showToast('Error creating Account record', errorMessage, 'error');
            });
    }
}
