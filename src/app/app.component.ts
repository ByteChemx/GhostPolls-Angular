// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'vite-project';
// }

import { Component } from '@angular/core'
import { NgForOf } from '@angular/common' // 👈 IMPORTANTE
import { CardPollComponent } from '@/components/card-poll/card-poll.component'
import { mockPolls } from '@/mocks/mock-polls'
import { CopyrightIcon, LucideAngularModule } from 'lucide-angular'

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        NgForOf, // 👈 AÑADE ESTO
        CardPollComponent,
        LucideAngularModule,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title = 'GhosPolls-DApp-Angular'
    polls = mockPolls
    readonly CopyrightIcon = CopyrightIcon
}
