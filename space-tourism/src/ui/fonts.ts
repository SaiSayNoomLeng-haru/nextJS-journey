import localFont from 'next/font/local';

export const barlow = localFont({
    src: '../app/fonts/Barlow-Regular.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-barlow'
})

export const bellefair = localFont({
    src: '../app/fonts/Bellefair-Regular.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-bellefair'
})

export const condensed = localFont({
    src: '../app/fonts/BarlowCondensed-Regular.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-barlow-condensed'
})