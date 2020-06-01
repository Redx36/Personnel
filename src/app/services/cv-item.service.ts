import { Injectable } from '@angular/core';

import { CvItem } from '../models/cv-item';
import * as DATA from '../models/cv-items.data';
import { FeatureToggleService } from './feature-toggle/feature-toggle.service';

@Injectable()
export class CvItemService {
  public featureToggles;

  constructor(
    private featureToggleService: FeatureToggleService,
  ) {
    this.getFeatureToggles();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }


  getCvItems(): CvItem[] {
    return DATA.CVITEMS;
  }

  getEducationItems(): CvItem[] {
    return DATA.EDUCATION;
  }

  getCertificationItems(): CvItem[] {
    return DATA.CERTIFICATES;
  }



  getLanguageItems() {
    return DATA.LANGUAGES;
  }

  getContactItems() {
    return DATA.CONTACT;
  }

  getInterestItems() {
    return DATA.INTERESTS;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
