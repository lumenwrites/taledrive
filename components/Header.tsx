import Link from "components/elements/Link"
import Image from "next/image"

import { useContext } from 'react'

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link href="/" className="logo">
          <div className="logo-image" >
          <Image src="/logo.png" width={32} height={32} />
          </div>
         adventures
        </Link>
        <nav>
          <Link href="/post/create" className="btn btn-nav" >Create</Link>
          <Link href="/profile/lumen" className="btn btn-nav" >Profile</Link>
        </nav>
        <div className="clearfix"/>
      </div>
    </header>
  )
}
