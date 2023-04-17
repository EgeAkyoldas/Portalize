import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="md:static absolute grid place-items-center mx-auto mt-8 w-full top-0 z-10 font-valorant text-4xl">
            <Link
                className=''
                id='mainLogo'
                href='/'
                target=''
                rel=''
                >
                    VALORDLE
            </Link>
        </div>
    )
}

export default Header