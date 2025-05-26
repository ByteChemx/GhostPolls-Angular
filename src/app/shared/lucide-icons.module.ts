import { NgModule } from '@angular/core'
import {
    LucideAngularModule,
    Ghost,
    Volume1,
    Timer,
    AlarmClockOff,
} from 'lucide-angular'

const icons = {
    Ghost,
    Volume1,
    Timer,
    AlarmClockOff,
}

@NgModule({
    imports: [LucideAngularModule.pick(icons)],
    exports: [LucideAngularModule],
})
export class LucideIconsModule {}
