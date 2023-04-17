import Image from 'next/image'

const Card = () => {
    return (
        <div className="w-48 border-2 shadow-2xl rounded-lg bg-white mx-auto">
            <div className="flex flex-col justify-center mx-auto shadow-xl rounded-xl mt-2">
                <div>
                    <Image
                        src="/ascent.jpg"
                        alt="Ascent Logo"
                        className="transition ease-in-out delay-100 hover:scale-125 w-32 mx-auto rounded-full"
                        width={200}
                        height={48}
                        priority
                    />
                </div>
                <div className='text-center mt-5'>
                    <p className='font-valorant text-xl text-black'>Valorant</p>
                </div>
            </div>
        </div>
    )
}

export default Card