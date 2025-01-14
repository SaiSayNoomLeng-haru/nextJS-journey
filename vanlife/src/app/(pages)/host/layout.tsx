import HostNavbar from "@/components/HostNavbar"

export default function HostLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <div className="space-y-5">
            <HostNavbar />
            {children}
        </div>
    )
}