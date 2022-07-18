import { useTheme } from 'next-themes'
import { FaGraduationCap } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'

const index = ({ journey }) => {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    console.log(journey)


    const bgColors = [
        'bg-[#FE6E73]', 'bg-[#9E76FE]',
        'bg-[#F9BA5E]', 'bg-[#1D1E24]',
    ]
    const shadows = [
        '#FE6E73', '#9E76FE',
        '#F9BA5E', '#1D1E24',
    ]
    const positions = [
        'left-[6rem] md:left-[15rem] top-[18rem]', 'left-[12rem] md:left-[15rem] top-[31rem]',
        'left-[1rem] md:left-[15rem] top-[4.5rem]', 'left-[46rem] md:left-[60rem] top-[9rem]',
    ]
    return (
        <Waypoint>
            <div className="flex flex-col ">
                <div className="flex sticky z-10 inset-0  items-center space-x-4">
                    <svg width="180" height="1200" viewBox="0 0 230 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M154 1317.74H-1.04904e-05V1288.26L108.68 1222.7V1238.32L-1.04904e-05 1173.86L-1.04904e-05 1144.6L154 1144.16V1177.6L51.26 1177.82V1171.66L137.72 1223.14V1239.2L51.26 1291.78V1284.3H154V1317.74ZM198.44 1095.08C198.44 1101.24 197.487 1107.33 195.58 1113.34C193.673 1119.36 191.033 1124.27 187.66 1128.08L163.24 1115.54C165.587 1112.9 167.42 1109.9 168.74 1106.52C170.06 1103 170.72 1099.56 170.72 1096.18C170.72 1091.34 169.547 1087.53 167.2 1084.74C165 1081.81 161.26 1079.17 155.98 1076.82L141.46 1070.66L137.72 1068.02L35.64 1025.56V992.563L161.26 1046.02C170.793 1049.84 178.273 1054.24 183.7 1059.22C189.127 1064.06 192.94 1069.49 195.14 1075.5C197.34 1081.37 198.44 1087.9 198.44 1095.08ZM158.62 1074.84L35.64 1127.64V1092.22L134.64 1051.3L158.62 1074.84ZM156.64 885.454C156.64 895.867 154.733 905.474 150.92 914.274C146.96 922.927 141.387 930.04 134.2 935.614L110.44 915.814C116.013 911.56 120.267 907.087 123.2 902.394C125.987 897.7 127.38 892.64 127.38 887.214C127.38 872.694 118.873 865.434 101.86 865.434H28.6V919.554H-1.04904e-05V830.014H99.88C118.947 830.014 133.173 834.707 142.56 844.094C151.947 853.48 156.64 867.267 156.64 885.454ZM155.76 740.91C155.76 753.524 153.12 764.744 147.84 774.57C142.56 784.25 135.373 791.95 126.28 797.67C117.04 803.244 106.553 806.03 94.82 806.03C82.94 806.03 72.4533 803.244 63.36 797.67C54.12 791.95 46.9333 784.25 41.8 774.57C36.52 764.744 33.88 753.524 33.88 740.91C33.88 728.444 36.52 717.297 41.8 707.47C46.9333 697.644 54.0467 689.944 63.14 684.37C72.2333 678.797 82.7933 676.01 94.82 676.01C106.553 676.01 117.04 678.797 126.28 684.37C135.373 689.944 142.56 697.644 147.84 707.47C153.12 717.297 155.76 728.444 155.76 740.91ZM127.6 740.91C127.6 735.19 126.28 730.057 123.64 725.51C121 720.964 117.26 717.37 112.42 714.73C107.433 712.09 101.567 710.77 94.82 710.77C87.9267 710.77 82.06 712.09 77.22 714.73C72.38 717.37 68.64 720.964 66 725.51C63.36 730.057 62.04 735.19 62.04 740.91C62.04 746.63 63.36 751.764 66 756.31C68.64 760.857 72.38 764.524 77.22 767.31C82.06 769.95 87.9267 771.27 94.82 771.27C101.567 771.27 107.433 769.95 112.42 767.31C117.26 764.524 121 760.857 123.64 756.31C126.28 751.764 127.6 746.63 127.6 740.91ZM155.76 603.13C155.76 612.957 153.853 621.757 150.04 629.53C146.227 637.157 140.433 643.097 132.66 647.35C124.74 651.603 114.693 653.73 102.52 653.73H35.64V619.41H97.46C107.287 619.41 114.547 617.357 119.24 613.25C123.787 608.997 126.06 603.057 126.06 595.43C126.06 590.15 124.96 585.457 122.76 581.35C120.413 577.243 116.893 574.017 112.2 571.67C107.36 569.323 101.347 568.15 94.16 568.15H35.64V533.83H154V566.39H121.44L130.9 560.45C139.113 564.41 145.347 570.277 149.6 578.05C153.707 585.677 155.76 594.037 155.76 603.13ZM154 502.035H35.64V469.255H69.08L59.4 473.875C51.04 470.355 44.7333 464.708 40.48 456.935C36.08 449.162 33.88 439.702 33.88 428.555H65.56C65.4133 430.022 65.34 431.342 65.34 432.515C65.1933 433.688 65.12 434.935 65.12 436.255C65.12 445.642 67.8333 453.268 73.26 459.135C78.54 464.855 86.8267 467.715 98.12 467.715H154V502.035ZM33.88 335.993C33.88 326.607 35.7867 318.247 39.6 310.913C43.2667 303.433 48.9867 297.567 56.76 293.313C64.3867 289.06 74.2133 286.933 86.24 286.933H154V321.253H91.52C81.9867 321.253 74.9467 323.38 70.4 327.633C65.8533 331.74 63.58 337.607 63.58 345.233C63.58 350.66 64.7533 355.573 67.1 359.973C69.3 364.227 72.7467 367.6 77.44 370.093C82.1333 372.44 88.1467 373.613 95.48 373.613H154V407.933H35.64V375.153H68.42L58.52 381.313C50.6 377.06 44.5133 370.973 40.26 363.053C36.0067 355.133 33.88 346.113 33.88 335.993ZM155.76 196.225C155.76 209.718 153.12 221.598 147.84 231.865C142.56 241.985 135.373 249.831 126.28 255.405C117.04 260.978 106.553 263.765 94.82 263.765C82.94 263.765 72.4533 261.051 63.36 255.625C54.12 250.051 46.9333 242.498 41.8 232.965C36.52 223.431 33.88 212.651 33.88 200.625C33.88 189.038 36.3733 178.625 41.36 169.385C46.2 159.998 53.24 152.591 62.48 147.165C71.5733 141.738 82.5 139.025 95.26 139.025C96.58 139.025 98.12 139.098 99.88 139.245C101.493 139.391 103.033 139.538 104.5 139.685L104.5 235.825H84.48L84.48 157.725L90.42 170.925C84.26 170.925 78.9067 172.171 74.36 174.665C69.8133 177.158 66.2933 180.605 63.8 185.005C61.16 189.405 59.84 194.538 59.84 200.405C59.84 206.271 61.16 211.478 63.8 216.025C66.2933 220.425 69.8867 223.871 74.58 226.365C79.1267 228.858 84.5533 230.105 90.86 230.105H96.14C102.593 230.105 108.313 228.711 113.3 225.925C118.14 222.991 121.88 218.958 124.52 213.825C127.013 208.545 128.26 202.385 128.26 195.345C128.26 189.038 127.307 183.538 125.4 178.845C123.493 174.005 120.633 169.605 116.82 165.645L136.62 147.385C142.78 152.811 147.547 159.631 150.92 167.845C154.147 176.058 155.76 185.518 155.76 196.225ZM198.44 103.364C198.44 109.524 197.487 115.611 195.58 121.624C193.673 127.637 191.033 132.551 187.66 136.364L163.24 123.824C165.587 121.184 167.42 118.177 168.74 114.804C170.06 111.284 170.72 107.837 170.72 104.464C170.72 99.6241 169.547 95.8107 167.2 93.0241C165 90.0907 161.26 87.4507 155.98 85.1041L141.46 78.9441L137.72 76.3041L35.64 33.8441V0.844061L161.26 54.3041C170.793 58.1174 178.273 62.5174 183.7 67.5041C189.127 72.3441 192.94 77.7707 195.14 83.7841C197.34 89.6507 198.44 96.1774 198.44 103.364ZM158.62 83.1241L35.64 135.924V100.504L134.64 59.5841L158.62 83.1241Z" fill="#CECCCC"
                            fill-opacity={theme === 'light' ? 0.1 : 0.02} />
                    </svg>
                </div>
                <div
                    style={{
                        background: `${theme && mounted && theme === 'light' ? 'url(/images/lines-white.png), linear-gradient(rgba(233,233,233,0.3),rgba(233,233,233,0.3))' : 'url(/images/lines.png), linear-gradient(rgba(2,4,12,0.3), rgba(2,4,12,0.3))'}`
                    }}
                    className="flex z-30 background-lines bg-repeat flex-col overflow-x-scroll  bg-red-500 container !px-0 rounded-lg w-[100%] !mt-[-70rem]">
                    <div className="flex min-w-[100%] pt-8 flex-nowrap">
                        <div className='min-w-[6.5rem] md:min-w-[10rem]'>
                        </div>
                        {[22, 21, 20, 19, 18, 17, 16, 15, 14].map(yr => (
                            <div className='min-w-[6.5rem] md:min-w-[10rem]'>
                                {`20${yr}`}
                            </div>
                        ))}

                    </div>
                    <div className="flex flex-nowrap relative w-full p-8 space-x-8 min-h-[80vh] ">
                        {journey.map((data, i) => (
                            <div className={`flex flex- 1 ${positions[i]} text-white absolute min-w-[20rem] justify-center items-start`}>
                                <div style={{ boxShadow: `0 6px 20px -10px ${shadows[i]}` }} className={`p-8 relative group rounded-lg w-full  min-h-[7rem]  ${bgColors[i]}`}>
                                    <h1 className='text-xl md:text-2xl font-bold mb-3'>
                                        {data.type}
                                    </h1>
                                    <h1 className='text-base md:text-lmmng font-semibold'>
                                        {data.heading}
                                    </h1>
                                    <div className={`left-[-10%] text-[#333] dark:text-neutral-300 w-[120%]  hidden group-hover:flex z-50 rounded-2xl ${i === 1 ? 'bottom-[110%]' : 'top-[110%]'} absolute`}>
                                        <div className="shadow-lg z-20 rounded-2xl border-2 border-gray-200 dark:border-[#444] dark:bg-[#202120] bg-gray-50 flex relative flex-col p-6  w-full h-full space-y-4">
                                            <h1 className='text-xl md:text-2xl font-bold'>
                                                {data.type}
                                            </h1>
                                            <h1 className='text-lg md:text-xl font-bold'>
                                                {data.heading}
                                            </h1>
                                            <p className='text-base md:text-lg'>
                                                {data.subheading}
                                            </p>
                                            {data.type === 'Media' ?
                                                <a href={data.description} className='text-sm md:text-base'>
                                                    Read the Article Here
                                                </a>

                                                :
                                                <p className='text-sm md:text-base'>
                                                    {data.description}
                                                </p>
                                            }
                                            <div
                                                style={{
                                                    borderLeft: "20px solid transparent",
                                                    borderRight: "20px solid transparent",
                                                    borderTopWidth: "17px",
                                                    left: 'calc(50% - 20px)'
                                                }}
                                                className={`z-[-1] ${i === 1 ? 'rotate-0 bottom-[-16.5px]' : 'rotate-180  top-[-33px]'} border-t dark:border-[#444] border-gray-200 absolute w-0 h-0`}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </Waypoint >
    )
}

const GraduationIcon = () => {
    return (
        <>
            <FaGraduationCap className='text-4xl text-[#0B243A] dark:text-white' />
        </>
    )
}
export default index