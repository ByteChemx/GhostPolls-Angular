import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardPollComponent } from './card-poll.component'
import { CardPollProps } from '@/types' // Asegúrate que esto apunta al tipo correcto

describe('CardPollComponent', () => {
    let component: CardPollComponent
    let fixture: ComponentFixture<CardPollComponent>

    const mockPoll: CardPollProps = {
        pollId: 1,
        question: '¿Cuál es tu lenguaje favorito?',
        options: ['JavaScript', 'Python', 'Rust', 'Go'],
        votes: [12, 20, 5, 3],
        pollType: 'Public',
        status: true,
        endtime: Math.floor(Date.now() / 1000) + 3600, // 1 hora desde ahora
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardPollComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(CardPollComponent)
        component = fixture.componentInstance

        // ✅ Asignar mock antes de detectChanges
        component.poll = mockPoll

        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should show countdown string', () => {
        expect(typeof component.countdown).toBe('string')
    })

    it('should compute totalVotes correctly', () => {
        expect(component.totalVotes).toBe(40)
    })
})
