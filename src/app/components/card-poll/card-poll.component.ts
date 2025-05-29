import { Component, Input, OnInit } from '@angular/core'
import { CardPollProps } from '@/types'
// import { DappStoreService } from '@/services/dapp-store.service'
import { NgIf } from '@angular/common'
import {
    GhostIcon,
    Volume1Icon,
    TimerIcon,
    AlarmClockOffIcon,
    LucideAngularModule,
} from 'lucide-angular'

@Component({
    standalone: true,
    selector: 'app-card-poll',
    templateUrl: './card-poll.component.html',
    styleUrls: ['./card-poll.component.css'],
    imports: [LucideAngularModule, NgIf], // 👈 ahora tienes todos los íconos
})
export class CardPollComponent implements OnInit {
    @Input() poll!: CardPollProps

    hasVotedPoll = false
    finish = false
    countdown: string = ''
    readonly GhostIcon = GhostIcon
    readonly Volume1Icon = Volume1Icon
    readonly TimerIcon = TimerIcon
    readonly AlarmClockOffIcon = AlarmClockOffIcon

    ngOnInit() {
        this.startCountdown()
    }

    get totalVotes() {
        return this.poll.votes.reduce((a, b) => a + b, 0)
    }

    handleOpenVote() {
        alert('Esto deberia abrir un modal para poder votar')
    }

    handleOpenResults() {
        alert('Esto deberia abrir los resultados')
    }

    private startCountdown() {
        const deadline = this.poll.endtime * 1000
        const interval = setInterval(() => {
            const now = Date.now()
            const diff = deadline - now

            if (diff <= 0) {
                this.finish = true
                clearInterval(interval)
                this.countdown = 'Closed!'
            } else {
                const hours = String(
                    Math.floor((diff / (1000 * 60 * 60)) % 24)
                ).padStart(2, '0')
                const minutes = String(
                    Math.floor((diff / (1000 * 60)) % 60)
                ).padStart(2, '0')
                const seconds = String(Math.floor((diff / 1000) % 60)).padStart(
                    2,
                    '0'
                )
                this.countdown = `${hours}:${minutes}:${seconds}`
            }
        }, 1000)
    }
}
