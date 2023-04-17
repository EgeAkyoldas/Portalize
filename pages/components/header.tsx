import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="grid place-items-center mx-auto mb-10 mt-8 w-full top-0 z-10 absolute">
            <Link
                className=''
                id='mainLogo'
                href='/'
                target=''
                rel=''
                >
                <Image
                    src="/valorant.svg"
                    alt="Valorant Logo"
                    className=" transition ease-in-out delay-100 hover:scale-125"
                    width={200}
                    height={48}
                    priority
                />
            </Link>
        </div>
    )
}

export default Header