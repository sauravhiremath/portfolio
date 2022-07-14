import Link from 'next/link'
import React from 'react'

const Logo = ({ theme }) => {
    return (
        <>

            <Link href='/'>
                <a className="text-xl whitespace-nowrap md:text-2xl lg:text-3xl austina">
                    {theme === 'light' ?
                        <img src='/images/logo-light.png' />
                        :
                        <img src='/images/logo-dark.png' />

                    }
                </a>
            </Link>
        </>
    )
}

export default Logo