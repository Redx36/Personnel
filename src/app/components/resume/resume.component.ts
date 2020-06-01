import {Component, OnInit, ViewChild} from '@angular/core';
import {ResumeAnimations} from './resume.animation';
import {BackgroundService} from '../../services/background.service';
import {CvItem} from '../../models/cv-item';
import {CvItemService} from '../../services/cv-item.service';
import {PerfectScrollbarComponent, PerfectScrollbarConfigInterface, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: ResumeAnimations
})
export class ResumeComponent implements OnInit {

  public headerState: string;
  public age: any;
  public experienceItems: CvItem[];
  public educationItems: CvItem[];
  public certificationItems: CvItem[];
  public languageItems;
  public interests;
  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;

  constructor( private backgroundService: BackgroundService,
               private cvItemService: CvItemService
  ) { }

  ngOnInit(): void {
    this.headerState = 'show';
    this.backgroundService.openBackground();
    this.initAge();
    this.getItems();
  }

  private initAge(): void {
    const currentDate: number = new Date().getTime();
    const birthDate: number = new Date('1994-07-29').getTime();
    const numberOfMillisecondInAYear = 31557600000;

    this.age = (currentDate - birthDate) / numberOfMillisecondInAYear;
    this.age = Math.floor(this.age);
  }

  private getItems(): void {
    this.experienceItems = this.cvItemService.getCvItems();
    this.educationItems = this.cvItemService.getEducationItems();
    this.certificationItems = this.cvItemService.getCertificationItems();
    this.languageItems = this.cvItemService.getLanguageItems();
    this.interests = this.cvItemService.getInterestItems();
  }

  public getLanguageLevelDescription(level: number) {
    // 100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
    if (level >= 100) {
      return 'Langue Maternelle';
    }
    if (level >= 80) {
      return 'Courant';
    }
    if (level >= 60) {
      return 'Anvancé';
    }
    if (level >= 40) {
      return 'intermédiaire';
    }
    if (level >= 20) {
      return 'Notions élémentaires';
    }
    return 'Débutant';
  }
}
