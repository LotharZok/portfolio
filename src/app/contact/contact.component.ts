import { Component, ViewChild, ElementRef } from '@angular/core';
// import { MatIconModule } from "@angular/material/icon";
// import { MatInputModule } from "@angular/material/input";
// import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    // standalone: true,
    // imports: [MatFormFieldModule, MatInputModule, MatIconModule]
})
export class ContactComponent {

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

        if (this.checkFields(nameField, emailField, messageField)) {
    
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

        let retValue: boolean = true;

        if (nameField.value == '') {
            reqName.classList.remove('d-none');
            retValue = false;
        } else {
            reqName.classList.add('d-none');
        }
        if (emailField.value == '') {
            reqEmail.classList.remove('d-none');
            retValue = false;
        } else {
            reqEmail.classList.add('d-none');
        }
        if (messageField.value == '') {
            reqMessage.classList.remove('d-none');
            retValue = false;
        } else {
            reqMessage.classList.add('d-none');
        }

        return (retValue);
    }

    checkInput(fldName: string) {
        let checkField: any;
        let imgField: any;
        switch (fldName) {
        case 'nameField':
            checkField = this.nameField.nativeElement;
            imgField = this.imgName.nativeElement;
            if (checkField.value == '') {
                this.dispNameImg = 'assets/img/exclamation-mark.svg';
                imgField.classList.remove('d-none');
            } else {
                this.dispNameImg = 'assets/img/check-mark.svg';
                imgField.classList.remove('d-none');
            }
            break;
        case 'emailField':
            checkField = this.emailField.nativeElement;
            imgField = this.imgEmail.nativeElement;
            if (checkField.value == '') {
                this.dispEmailImg = 'assets/img/exclamation-mark.svg';
                imgField.classList.remove('d-none');
            } else {
                this.dispEmailImg = 'assets/img/check-mark.svg';
                imgField.classList.remove('d-none');
            }
            break;
        case 'messageField':
            checkField = this.messageField.nativeElement;
            imgField = this.imgMessage.nativeElement;
            if (checkField.value == '') {
                this.dispMessageImg = 'assets/img/exclamation-mark.svg';
                imgField.classList.remove('d-none');
            } else {
                this.dispMessageImg = 'assets/img/check-mark.svg';
                imgField.classList.remove('d-none');
            }
            break;
        default:
            break;
        }
    }
}
