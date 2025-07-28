'use client'

import { useState } from 'react'
import Question from '../components/Question'
import { questions } from '@/questions'
import Image from 'next/image'

const personalityDescriptions: Record<
    string,
    { title: string; paragraphs: string[]; color: string; image: string }
> = {
    Dove: {
        title: 'You are a Dove – The Nurturer',
        color: 'darkOrange',
        image: 'dove',
        paragraphs: [
            'Strengths: Empathetic, harmony-driven, supportive, and excellent at building relationships and creating psychological safety.',
            'Challenges: You may avoid conflict, struggle with setting boundaries, and take criticism personally.',
            "In Coaching: You're great at building trust but may need to work on assertiveness and holding others accountable.",
        ],
    },

    Owl: {
        title: 'You are an Owl – The Analyst',
        color: 'purple',
        image: 'owl',
        paragraphs: [
            'Strengths: Detail-oriented, logical, precise, and organized. You thrive in structured environments and solve problems effectively.',
            'Challenges: You may struggle with perfectionism, over-analysis (which can lead to procrastination), and burnout from needing too much control.',
            'In Coaching: You excel at data-driven decision-making, but could benefit from being more flexible and trusting others’ approaches.',
        ],
    },
    Peacock: {
        title: 'You are a Peacock – The Energizer',
        color: 'fucsia',
        image: 'peacock',
        paragraphs: [
            'Strengths: Charismatic, spontaneous, innovative, and inspiring. You energize and motivate others naturally.',
            'Challenges: You may be impulsive, leave tasks unfinished, and have difficulty accepting criticism.',
            "In Coaching: You're great at motivating teams, but may need to improve follow-through and consistency.",
        ],
    },
    Eagle: {
        title: 'You are an Eagle – The Visionary',
        color: 'orangeRed',
        image: 'eagle',
        paragraphs: [
            'Strengths: Ambitious, determined, goal-oriented, and resilient. You thrive on challenges and make confident decisions.',
            'Challenges: You may be impatient, rigid in your approach, and less open to alternative ideas.',
            'In Coaching: You drive results and accountability, but should work on listening more and encouraging collaboration.',
        ],
    },
}

export default function Home() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<string[]>([])

    const handleAnswer = (type: string) => {
        setAnswers((prev) => [...prev, type])
        setStep((prev) => prev + 1)
    }

    const getPersonality = () => {
        const counts: Record<string, number> = {}

        answers.forEach((type) => {
            counts[type] = (counts[type] || 0) + 1
        })

        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])

        if (sorted.length === 0) return 'Unknown'

        return sorted[0][0]
    }

    const progress = (step / questions.length) * 100
    const personality = getPersonality()
    const data = personalityDescriptions[personality]

    return (
        <>
            <div className='absolute'>
                <Image src='/logo.png' alt='logo' width={100} height={100} />
            </div>
            <main className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100'>
                <h2 className='text-left text-[#220E39] font-black mb-4 '>
                    Bird Personality Test
                </h2>
                <div className='w-full max-w-xl bg-white p-6 rounded shadow-lg'>
                    <div className='w-full bg-gray-200 rounded h-2 mb-6'>
                        <div
                            className='bg-[#FE3416] h-2 rounded'
                            style={{
                                width: `${progress}%`,
                                transition: 'width 0.3s ease',
                            }}
                        />
                    </div>

                    {step < questions.length ? (
                        <Question
                            key={step}
                            question={questions[step].question}
                            options={questions[step].options}
                            onSubmit={handleAnswer}
                        />
                    ) : (
                        <div
                            className={`p-6 rounded-xl shadow-lg bg-white border-t-8 border-${data.color}`}
                        >
                            <h2
                                className={`text-2xl font-bold text-${data.color} mb-4 text-center`}
                            >
                                {data.title}
                            </h2>
                            <div className='flex items-center justify-center mb-2'>
                                <Image
                                    src={`${data.image}.svg`}
                                    height={50}
                                    width={50}
                                    alt='result'
                                />
                            </div>
                            <div className='space-y-3 text-gray-800 text-base leading-relaxed'>
                                {data.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            <button
                                onClick={() => {
                                    setAnswers([])
                                    setStep(0)
                                }}
                                className='mt-6 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition'
                            >
                                Take the test again
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
