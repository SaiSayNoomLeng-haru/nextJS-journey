import { getVansDetail } from "@/api"
import { NavbarLink } from "app/_lib/definitions"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { redirect } from "next/navigation"
import NavLink from "@/components/NavLink"

export default async function HostVanDetailIdLayout({
    children, params
}: {
    children: React.ReactNode
    params: Promise<{ documentId: string }>
}){
    const { documentId } = await params
    const van = await getVansDetail(documentId);

    // classes and styles
    const typeClass = clsx(
        'capitalize text-white font-semibold px-2 py-1 rounded-sm inline-block',
        {
            'bg-simple' : van?.type === 'simple',
            'bg-luxury' : van?.type === 'luxury',
            'bg-rugged' : van?.type === 'rugged'
        }
    )

    const hostVanDetailNavLinks = [
        { name: 'detail', url: `/host/vans/${documentId}`},
        { name: 'pricing', url: `/host/vans/${documentId}/pricing`},
        { name: 'photos', url: `/host/vans/${documentId}/photos`}
    ]

    if(!van){
        return null
    }

    return(
        <div className="space-y-5">
            <Link 
                href='/host/vans'
                className="flex items-center gap-1">
                <FaArrowLeft className="text-fs-300"/>
                <span className="underline underline-offset-1">Back to all vans</span>
            </Link>

            <div className="space-y-4 bg-white rounded-lg p-3">
                <div className="flex gap-3 p-3">
                    <Image 
                        src={`http://127.0.0.1:1337${van?.imgUrl.url}`}
                        width={van?.imgUrl.width}
                        height={van?.imgUrl.height}
                        alt=''
                        className="max-w-[150px] flex-none rounded-lg"
                    />
                    
                    <div className="flex-1 p-3 flex flex-col gap-3 items-start ">
                        <p className={typeClass}>{van?.type}</p>
                        <p className="font-semibold text-fs-600">{van?.name}</p>
                        <p><span className="font-semibold">${van?.price}</span> /day</p>
                    </div>
                </div>
                
                <nav className="flex gap-3 items-center">
                    {  hostVanDetailNavLinks.map((link: NavbarLink) => (
                        <NavLink 
                            key={link.name}
                            name={link.name}
                            urlLink={link.url}/>
                    ))}
                </nav>

                <div>{children}</div>
            </div>
        </div>
    )
}