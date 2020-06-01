import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { BackgroundService } from '../../services/background.service';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {

  @ViewChild('backgroundWrapper') backgroundWrapper: ElementRef;
  @ViewChild('appProjects') appProject: ProjectsComponent;

  animationState: string;
  schema: any;

  constructor(private location: Location,
              private backgroundService: BackgroundService,
              private router: Router,
              private meta: Meta,
              private title: Title) {
  }

  ngOnInit(): void {
    this.backgroundService.closeBackground();
    this.animationState = '';

    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'France',
        'addressLocality': 'Paris'
      },
      'email': 'mailto:jalidjinou@gmail.com',
      'image': 'http://jalidjinou.com/assets/profile.svg',
      'jobTitle': 'Développeur Web Full-Stack',
      'name': 'Jared ALIDJINOU',
      'url': 'http://jalidjinou.com/'
    };

    this.meta.updateTag({
      name: 'description',
      content: 'Hello ! Je m\'appelle Jared et je suis un jeune développeur web full-stack de 25 ans passionné par la programmation ' +
      'et les nouvelles technologies. J\'aime découvrir et apprendre de nouvelles choses au quotidien mais aussi passer du temps pour ' +
      'apporter des solutions à des problèmes rencontrés.'
    });

    this.title.setTitle('Développeur Web Full-stack - Jared ALIDJINOU');
  }

  getStartedAction(): void {
    this.animationState = 'out';
    this.backgroundService.openBackground();

    setTimeout(() => {
      this.router.navigate(['resume']);
    }, 350);

  }
}
