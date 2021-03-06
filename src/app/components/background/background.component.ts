import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackgroundAnimations } from './background.animation';
import { BackgroundService } from '../../services/background.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: BackgroundAnimations
})
export class BackgroundComponent implements OnInit, OnDestroy {

  animationState: string;
  subscription: Subscription;

  constructor(private backgroundService: BackgroundService) {
  }

  ngOnInit(): void {
    this.subscription = this.backgroundService.getObservable().subscribe((state: string) => {
      this.animationState = state;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
