import { Component }      from '@angular/core';

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    template: `<nav class="site-nav">
                 <ul>
                   <li>
                     <a routerLink="/home" routerLinkActive="active">Home</a>
                   </li>
                   <li>
                     <a routerLink="/feedback" routerLinkActive="active">Feedback</a>
                   </li>
                 </ul>
               </nav>
               <!-- Where router should display a view -->
               <router-outlet></router-outlet>`,
    styleUrls: ['app/parent.css']
})
export class AppComponent { }
