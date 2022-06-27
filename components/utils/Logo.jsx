import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <>

            <Link href='/'>
                <a className="text-xl whitespace-nowrap md:text-2xl lg:text-3xl austina">
                    {`< Saurav M. H />`}
                </a>
            </Link>
        </>
    )
}

export default Logo