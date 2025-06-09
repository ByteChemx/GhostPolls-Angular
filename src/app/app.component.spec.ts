import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>
    let component: AppComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent], // Standalone OK
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        component = fixture.componentInstance
    })

    it('should create the app', () => {
        expect(component).toBeTruthy()
    })

    it(`should have the 'GhosPolls-DApp-Angular' title`, () => {
        expect(component.title).toEqual('GhosPolls-DApp-Angular')
    })

    it('should render title', () => {
        fixture.detectChanges()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelector('h2')?.textContent).toContain(
            ' Active Polls '
        )
    })

    it('should show the polls', () => {
        fixture.detectChanges()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelectorAll('app-card-poll').length).toEqual(4)
    })
})
