import localFont from 'next/font/local';

export const inter = localFont({
    src: [
        {
            path: '../fonts/Inter-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Inter-Semibold.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../fonts/Inter-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Inter-ExtraBold.ttf',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-inter'
})