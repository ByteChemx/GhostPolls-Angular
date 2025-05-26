import { Component, Input } from '@angular/core'

@Component({
    // standalone: true,
    selector: 'app-error-message',
    templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
    @Input() message: string = ''
}
