export default function Definition({
    word,
    meaning,
}: {
    word: string
    meaning: string
}) {
    return (
        <span className='relative group cursor-help text-black'>
            {word}
            <span className='absolute left-[110%] top-1/2 -translate-y-1/2 w-64 rounded bg-gray-800 px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 shadow-lg'>
                {meaning}
                <span className='absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-gray-800'></span>
            </span>
        </span>
    )
}
