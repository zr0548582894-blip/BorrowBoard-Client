
const NotFoundPage=()=>
{
    return<>
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <div aria-hidden className="tile-stage grid grid-cols-3 gap-3" dir="ltr">
            <div className="tile grid h-28 w-24 place-items-center bg-coral font-display text-6xl font-black text-ink sm:h-36 sm:w-32 sm:text-8xl">4</div>
            <div className="tile grid h-28 w-24 place-items-center bg-sun sm:h-36 sm:w-32">
                <span className="h-12 w-12 rounded-full border-[10px] border-ink sm:h-16 sm:w-16" />
            </div>
            <div className="tile grid h-28 w-24 place-items-center bg-sky font-display text-6xl font-black text-cream sm:h-36 sm:w-32 sm:text-8xl">4</div>
        </div>
        <p className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl animate-rise [animation-delay:500ms]">
    NotFoundPage
        </p>
    </div>
    </>
}
export default NotFoundPage
