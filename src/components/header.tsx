import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
  

export default function Header(){
    return (
        <main >
            <nav id="nav">
                <div id="logo">
                    <Image src="/logo.png" width={150} height={100} alt=""  />
                </div>
                <div >
                    <div id="list" className="hidden sm:block">
                        <Link className="hidden md:block" id="home" href="/">HOME</Link>
                        <Link className="hidden md:block" id="home" href="/NAv/service">SERVICE</Link>
                        <Link className="hidden md:block" id="home" href="/NAv/Contact">CONTACT</Link>
                        <Link className="hidden md:block" id="home" href="/NAv/service">ABOUT</Link>
                    </div>
                    <Sheet >
                         <SheetTrigger className="sm:hidden mt-7 mr-5"> <Menu/> </SheetTrigger>
                         <SheetContent>
                         <SheetHeader>
                         <SheetTitle></SheetTitle>
                         <SheetDescription>
                         <ul>  
                             <li><Link id="home" href="#">HOME</Link></li>
                              <li><Link id="home" href="/NAv/service">SERVICE</Link></li>
                              <li><Link id="home" href="/NAv/Contact">CONTACT</Link></li>
                              <li><Link id="home" href="">ABOUT</Link> </li> 
                         </ul>
                         </SheetDescription>
                         </SheetHeader>
                         </SheetContent>
                      </Sheet>


                </div>
            </nav>
        </main>
    )
}