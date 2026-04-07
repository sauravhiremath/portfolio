import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="inline-block align-baseline mt-2 justify-center text-xl whitespace-nowrap md:text-2xl lg:text-3xl austina">
          {`< Saurav M. H />`}
        </div>
      </Link>
    </>
  )
}

export default Logo
