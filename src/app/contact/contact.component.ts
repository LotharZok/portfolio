import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

    /**
     * Variables for selecting form elements
     */
    @ViewChild('myForm') myForm!: ElementRef;

    @ViewChild('nameField') nameField!: ElementRef;
    @ViewChild('emailField') emailField!: ElementRef;
    @ViewChild('messageField') messageField!: ElementRef;
    @ViewChild('reqName') reqName!: ElementRef;
    @ViewChild('reqEmail') reqEmail!: ElementRef;
    @ViewChild('reqMessage') reqMessage!: ElementRef;
    @ViewChild('imgName') imgName!: ElementRef;
    @ViewChild('imgEmail') imgEmail!: ElementRef;
    @ViewChild('imgMessage') imgMessage!: ElementRef;
    @ViewChild('sendButton') sendButton!: ElementRef;

    dispNameImg:string = '';
    dispEmailImg:string = '';
    dispMessageImg:string = '';


    /**
     * Function for sending a mail
     */
    async sendMail() {
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;

        this.toggleFieldDisabled(true);

        if (this.checkFields(nameField, emailField, messageField)) {
            let fd = new FormData();
            fd.append('name', nameField.value);
            fd.append('email', emailField.value);
            fd.append('message', messageField.value);
            await fetch('send_mail.php', {
                method: 'POST',
                body: fd
            });
        }
        
        this.toggleFieldDisabled(false);
    }


    /**
     * Disables the form fields or makes them available again.
     * 
     * @param status boolean - Disable the field (true) or not (false).
     */
    toggleFieldDisabled(status:boolean) {
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;
        let sendButton = this.sendButton.nativeElement;

        nameField.disabled = status;
        emailField.disabled = status;
        messageField.disabled = status;
        sendButton.disabled = status;
    }


    /**
     * Checks the required field in the form and displays a message to a field if it is not ok.
     * 
     * @param nameField ElementRef - Reference to the name field of the form
     * @param emailField ElementRef - Reference to the email field of the form
     * @param messageField ElementRef - Reference to the message field of the form
     * @returns boolean - All field entries are ok or not
     */
    checkFields(nameField:any, emailField:any, messageField:any): boolean {
        let retValue: boolean = true;
        retValue = this.checkField(nameField) || this.checkField(emailField) || this.checkField(messageField);

        return (retValue);
    }


    /**
     * Checks a required field in the form. Called from checkFields for every single field.
     * 
     * @param fld ElementRef - Reference to the field to be checked
     * @returns boolean - All field entries are ok or not
     */
    checkField(fld: any):boolean {
        let retValue: boolean = true;
        if (fld.value == '') {
            this.showRequiredMessage(fld.name, 'remove');
            retValue = false;
        } else {
            this.showRequiredMessage(fld.name, 'add');
        }

        return (retValue);
    }


    /**
     * Shows the required field message to the given field or removes the message.
     * 
     * @param fldName string - The name of the field whose message should be shown.
     * @param msg string - 'remove' or 'add' class d-none from/to the class list.
     */
    showRequiredMessage(fldName:string, msg:string) {
        let reqName = this.reqName.nativeElement;
        let reqEmail = this.reqEmail.nativeElement;
        let reqMessage = this.reqMessage.nativeElement;
        switch (fldName) {
        case 'name':
            (msg == 'remove') ? reqName.classList.remove('d-none') : reqName.classList.add('d-none');
            break;
        case 'email':
            (msg == 'remove') ? reqEmail.classList.remove('d-none') : reqEmail.classList.add('d-none');
            break;
        case 'msgMessage':
            (msg == 'remove') ? reqMessage.classList.remove('d-none') : reqMessage.classList.add('d-none');
            break;
        default:
            break;
        }
    }


    /**
     * Checks if the entry in a field is ok and displays an according icon. Called when a letter is typed into a field.
     * 
     * @param fldName string - The name of the field to check
     */
    checkInput(fldName: string) {
        let checkField: any;
        let imgField: any;
        switch (fldName) {
        case 'nameField':
            checkField = this.nameField.nativeElement;
            imgField = this.imgName.nativeElement;
            (checkField.value == '') ? this.dispNameImg = 'assets/img/exclamation-mark.svg': this.dispNameImg = 'assets/img/check-mark.svg';
            break;
        case 'emailField':
            checkField = this.emailField.nativeElement;
            imgField = this.imgEmail.nativeElement;
            (checkField.value == '') ? this.dispEmailImg = 'assets/img/exclamation-mark.svg': this.dispEmailImg = 'assets/img/check-mark.svg';
            break;
        case 'messageField':
            checkField = this.messageField.nativeElement;
            imgField = this.imgMessage.nativeElement;
            (checkField.value == '') ? this.dispMessageImg = 'assets/img/exclamation-mark.svg': this.dispMessageImg = 'assets/img/check-mark.svg';
            break;
        default:
            break;
        }
        this.setMark(checkField, imgField);
    }


    /**
     * Sets an icon to a given field.
     * 
     * @param checkField any - The field whose value is checked.
     * @param imgField any - The image field, that will be set.
     */
    setMark(checkField:any, imgField:any) {
        if (checkField.value == '') {
            imgField.classList.remove('d-none');
        } else {
            imgField.classList.remove('d-none');
        }
    }
}