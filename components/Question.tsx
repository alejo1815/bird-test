import { useState } from 'react'

type Option = {
    text: string
    type: string
}

type QuestionProps = {
    question: string
    options: Option[]
    onSubmit: (answer: string) => void
}

export default function Question({
    question,
    options,
    onSubmit,
}: QuestionProps) {
    const [selected, setSelected] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (selected) onSubmit(selected)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <h2 className='text-2xl font-semibold'>{question}</h2>
            <div className='space-y-2'>
                <p>sdfg</p>
                {options.map((opt, i) => (
                    <label key={i} className='block cursor-pointer'>
                        <input
                            type='radio'
                            name='option'
                            value={opt.type}
                            onChange={() => setSelected(opt.type)}
                            checked={selected === opt.type}
                            className='mr-2'
                        />
                        <p className='inline-block -translate-y-0.5'>
                            {opt.text}
                        </p>
                    </label>
                ))}
            </div>
            <button
                type='submit'
                className='px-4 py-2 bg-[#FE3416] text-white rounded hover:bg-[#FD5C40] transition disabled:bg-gray-300'
                disabled={!selected}
            >
                Submit
            </button>
        </form>
    )
}
