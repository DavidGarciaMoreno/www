import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng-nav',
  templateUrl: 'nav.template.html'
})

export class NavbarComponent {
  appName: string = "Twitter App 2407";

  navItems: any[] = [
      { routerLink: '/search', label: 'Search', active: false },
      { routerLink: '/stream', label: 'Stream JS', active: false }
  ];

}
