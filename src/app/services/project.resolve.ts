import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { IProject } from '../models/IProject';
import { ProjectsService } from './projects.service';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class ProjectResolve implements Resolve<IProject> {

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject> {
    return new Observable<IProject>((observer) => {
      this.projectsService.getAll().then((projects: IProject[]) => {

        const project = projects.find((element: IProject) => {
          return element.url === route.params.id;
        });

        if (!project) {
          this.router.navigate(['/projects']); // TODO : Improve User experience
          observer.next(null);
          observer.complete();
          return;
        }

        observer.next(project);
        observer.complete();
      });
    });
  }
}
