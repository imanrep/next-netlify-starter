import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [headerOpen, setHeaderOpen] = useState(false)
    return (
        <div className="header d-flex justify-content-between">
            <img src="/img/logo.png" className="indorep_logo" alt="logo indorep" />
            <div className="d-flex content-header gap-4">
                <Link href="/">Highlight</Link>
                <Link href="/">Work</Link>
                <Link href="/">Service</Link>
                <Link href="/">let's connect</Link>
            </div>
            <div className="hamburger" onClick={() => setHeaderOpen(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`mobile${headerOpen ? ' open' : ''}`}>
                <div className="pup prp"></div>
                <div className="pup wht"></div>
                <div className="pup blc">
                    <div className="content-mobile-header d-flex flex-column h-100">
                        <div className="close" onClick={() => setHeaderOpen(false)}>
                        </div>
                        <div className="d-flex flex-column gap-5 mobile-more">
                            <Link href="/">Highlight</Link>
                            <Link href="/">Work</Link>
                            <Link href="/">Service</Link>
                            <Link href="/">let's connect</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}