import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ContactAnimations} from './contact.animation';
import {BackgroundService} from '../../services/background.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CvItemService} from '../../services/cv-item.service';
import {CvItem} from '../../models/cv-item';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: ContactAnimations
})
export class ContactComponent implements OnInit, AfterViewChecked {

  public headerState: string;
  public disabled: boolean;
  private request: boolean;
  public contactItems;
  public windowWidth: number = window.innerWidth;
  public contactForm = new FormGroup({
    contactName: new FormControl('', [Validators.required]),
    contactEmail: new FormControl('', [Validators.required, Validators.email]),
    contactPhone: new FormControl('', []),
    contactMessage: new FormControl('', [Validators.required])
  });


  constructor( private backgroundService: BackgroundService,
               private cdRef: ChangeDetectorRef,
               private cvItemService: CvItemService,
               public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.headerState = 'show';
    this.backgroundService.openBackground();
    this.getItems();
    this.disabled = true;
    this.request = false;

  }

  ngAfterViewChecked(): void {
    this.disabled = !(this.contactForm.valid && !this.request);
    this.cdRef.detectChanges();
  }

  public sendMessage() {
    if (this.contactForm.valid) {
      this.openSnackBar('Votre message a été enrégistré avec succès', 'ok');
      // this.project.name = this.contactForm.controls.projectName.value;
      // this.project.guid = this.contactForm.controls.projectGuid.value;
      this.request = true;
    }
  }

  public getContactError(): string {
    if (this.contactForm.controls.contactName.hasError('required')) {
      return this.contactForm.controls.contactName.hasError('required') ? 'Ce champ est requis' : '';
    }
    if (this.contactForm.controls.contactEmail.hasError('required')) {
      return this.contactForm.controls.contactEmail.hasError('required') ? 'Ce champ est requis' : '';
    }
    if (this.contactForm.controls.contactEmail.hasError('email')) {
      return this.contactForm.controls.contactEmail.hasError('email') ? 'Veuillez renseigner un email valide' : '';
    }
    if (this.contactForm.controls.contactMessage.hasError('required')) {
      return this.contactForm.controls.contactMessage.hasError('required') ? 'Ce champ est requis' : '';
    }
    // if (this.contactForm.controls.contactName.hasError('maxlength')) {
    //   return this.contactForm.controls.contactName.hasError('maxlength') ? 'Ce champ ne doit pas excéder 45 caractères' : '';
    // }
  }

  private getItems(): void {
    this.contactItems = this.cvItemService.getContactItems()[0];
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 7000,
    });
  }
}
