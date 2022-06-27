import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    // { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/sauravv_404/' },
    // { icon: <AiOutlineLinkedin />, href: 'https://www.linkedin.com/in/sauravmh/' },
    // { icon: <AiFillGithub />, href: 'https://github.com/sauravhiremath/' },
    // { icon: <AiOutlineTwitter />, href: 'https://twitter.com/sauravmh/' },
    return (
        <div
            style={{
                background: `${theme && mounted && theme === 'light' ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))' : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'}`
            }}
            className='py-12 lg:py-16 border-t bg-[#efefef] z-50 dark:border-slate-900'
        >
            <div className="container  space-y-8 ">
                <h1 className="text-lg md:text-xl">👋 Thanks for stopping by, let's chat!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0">
                    <div className="flex text-left flex-col space-y-3">
                        <div className="uppercase tracking-widest font-semibold text-[#a5a5a5] dark:text-[#efefef]">💌 Contact me</div>
                        <a href='mailto:vitsaurav@gmail.com' className="dark:text-[#efefef] text-lg text-[#333] hover:opacity-60 transition-all duration-300">
                            vitsaurav@gmail.com
                        </a>
                    </div>
                    <div className="flex text-left flex-col space-y-3">
                        <div className="uppercase tracking-widest font-semibold  text-[#a5a5a5] dark:text-[#efefef]">🤝 LET'S CONNECT</div>
                        <div className="flex space-x-2">
                            <a href='mailto:vitsaurav@gmail.com' className="dark:text-[#efefef] text-lg text-[#333] hover:opacity-60 transition-all duration-300">
                                Linkedin
                            </a>
                            <div className="h-full text-[#a5a5a5] dark:text-[#efefef] text-xl">|</div>
                            <a href='mailto:vitsaurav@gmail.com' className="dark:text-[#efefef] text-lg text-[#333] hover:opacity-60 transition-all duration-300">
                                Resume
                            </a>
                            <div className="h-full text-[#a5a5a5] dark:text-[#efefef] text-xl">|</div>
                            <a href='mailto:vitsaurav@gmail.com' className="dark:text-[#efefef] text-lg text-[#333] hover:opacity-60 transition-all duration-300">
                                Word
                            </a>
                        </div>
                    </div>
                    <div className="flex text-left flex-col space-y-3">
                        <div className="uppercase tracking-widest font-semibold text-[#a5a5a5] dark:text-[#efefef]">@ 2022 Saurav mh</div>
                        <p className="text-lg text-[#333] dark:text-[#efefef] transition-all duration-300">
                            A Remix by Saurav with ❤️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index