import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const journeyData = [
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'imageToText'
        },
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'textToImage'
        },
    ]
    return (
        <div className='max-w-[66rem] mx-auto '>
            <div className="flex flex-col space-y-12">
                <div className="flex items-center space-x-4">
                    <h1 className='font-semibold text-xl lg:text-3xl'>
                        My Journey
                    </h1>
                    <div className="bg-[#1d263a] mt-2 h-[1px] w-full max-w-[20rem]"></div>
                </div>
                {journeyData.map(({ imageUrl, pattern, smallText1, smallText2, icon, subHeading, title, }) => (
                    pattern === 'imageToText' ? (
                        <div className="grid grid-cols-7">
                            <div

                                className="col-span-4 z-10 relative">
                                <img
                                    src={imageUrl} />
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(12,38,67,0.7),rgba(12,38,67,0.7))'
                                    }}
                                    className="absolute inset-0 w-full h-full">

                                </div>
                            </div>
                            <div className="col-span-3 pt-12 space-y-5 relative">
                                <div className="w-full flex justify-end">
                                    <div className="w-16 h-16 border-2 ml-auto flex items-center justify-center rounded-full">
                                        {icon}
                                    </div>
                                </div>
                                <h1 className="text-right font-semibold text-xl lg:text-3xl">{title}</h1>
                                <h1 className="text-right font-semibold text-base lg:text-lg">{subHeading}</h1>
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                    }}
                                    className="p-5 min-w-[120%] shadow-lg rounded-sm absolute ml-[-20%] z-30">
                                    <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText1}</p>
                                    <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText2}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-7">

                            <div className="col-span-3 pt-12 space-y-5 relative">
                                <div className="w-full flex justify-end">
                                    <div className="w-16 h-16 border-2 mr-auto flex items-center justify-center rounded-full">
                                        {icon}
                                    </div>
                                </div>
                                <h1 className="text-left font-semibold text-xl lg:text-3xl">{title}</h1>
                                <h1 className="text-left font-semibold text-base lg:text-lg">{subHeading}</h1>
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                    }}
                                    className="p-5 min-w-[120%] shadow-lg rounded-sm absolute mr-[-20%] z-30">
                                    <p className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText1}</p>
                                    <p className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText2}</p>
                                </div>
                            </div>
                            <div

                                className="col-span-4 z-10 relative">
                                <img
                                    src={imageUrl} />
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(12,38,67,0.7),rgba(12,38,67,0.7))'
                                    }}
                                    className="absolute inset-0 w-full h-full">

                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div className="flex space-x-4">

            </div>
        </div>
    )
}

const GraduationIcon = () => {
    return (
        <>
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
        </>
    )
}
export default index