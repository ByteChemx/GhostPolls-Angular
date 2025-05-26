import { CardPollProps } from '@/types'

export const mockPolls: CardPollProps[] = [
    {
        pollId: 1,
        question: '¿Cuál es tu lenguaje favorito?',
        options: ['JavaScript', 'Python', 'Rust', 'Go'],
        votes: [12, 20, 5, 3],
        pollType: 'Public',
        status: true,
        endtime: Math.floor(Date.now() / 1000) + 3600, // 1 hora desde ahora
    },
    {
        pollId: 2,
        question: '¿Te gusta el desarrollo frontend?',
        options: ['Sí', 'No'],
        votes: [42, 8],
        pollType: 'Anonymous',
        status: true,
        endtime: Math.floor(Date.now() / 1000) + 120, // 2 minutos desde ahora
    },
    {
        pollId: 3,
        question: '¿Prefieres TypeScript o JavaScript?',
        options: ['TypeScript', 'JavaScript'],
        votes: [30, 18],
        pollType: 'Public',
        status: true,
        endtime: Math.floor(Date.now() / 1000) - 100, // ya expirado
    },
    {
        pollId: 4,
        question: '¿Debería Angular adoptar JSX?',
        options: ['Sí', 'No', 'Indiferente'],
        votes: [5, 25, 10],
        pollType: 'Anonymous',
        status: false,
        endtime: Math.floor(Date.now() / 1000) + 300, // 5 minutos desde ahora
    },
]
