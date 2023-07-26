import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    @ViewChild('myForm') myForm!: ElementRef;

    @ViewChild('nameField') nameField!: ElementRef;
    @ViewChild('emailField') emailField!: ElementRef;
    @ViewChild('messageField') messageField!: ElementRef;
    @ViewChild('reqName') reqName!: ElementRef;
    @ViewChild('reqEmail') reqEmail!: ElementRef;
    @ViewChild('reqMessage') reqMessage!: ElementRef;
    @ViewChild('sendButton') sendButton!: ElementRef;

    async sendMail() {
        console.log('Sending mail', this.myForm);
        
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;
        let sendButton = this.sendButton.nativeElement;

        nameField.disabled = true;
        emailField.disabled = true;
        messageField.disabled = true;
        sendButton.disabled = true;

        if (!this.checkFields(nameField, emailField, messageField)) {
            alert('Fehler');
        } else {
    
            // Animation anzeigen, daß gesendet wird
            
            // send mail
            let fd = new FormData();
            fd.append('name', nameField.value);
            fd.append('email', emailField.value);
            fd.append('message', messageField.value);
            await fetch('send_mail.php', {
                method: 'POST',
                body: fd
            });
    
            // Text anzeigen: Nachricht gesendet
        }
        
        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;

    }

    checkFields(nameField:any, emailField:any, messageField:any): boolean {
        let reqName = this.reqName.nativeElement;
        let reqEmail = this.reqEmail.nativeElement;
        let reqMessage = this.reqMessage.nativeElement;

        console.log('nameField:', nameField.value);
        console.log('emailField:', emailField.value);
        console.log('messageField:', messageField.value);

        let retValue: boolean = true;

        if (nameField.value == '') {
            // alert('nameField ist leer');
            reqName.classList.remove('d-none');
            retValue = false;
        } else {
            reqName.classList.add('d-none');
        }
        if (emailField.value == '') {
            // alert('emailField ist leer');
            reqEmail.classList.remove('d-none');
            retValue = false;
        } else {
            reqEmail.classList.add('d-none');
        }
        if (messageField.value == '') {
            // alert('messageField ist leer');
            reqMessage.classList.remove('d-none');
            retValue = false;
        } else {
            reqMessage.classList.add('d-none');
        }

        return (retValue);
    }
}
