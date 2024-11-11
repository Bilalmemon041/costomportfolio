"use client"
import Link from "next/link"
export default function Footer () {
    return (
        <div className=" mt-[50px] flex justify-around " >
        <section className="">
          <div className="text-3xl  font-extrabold font-serif mt-1"> DEVELOPER.CO</div>
          <div className="mt-3">We have a Design that Create your style and <br /> which you are proud to Show.</div>
          <div className="mt-3">Address : DHA PhASE 4</div>
          <div className="mt-3">CONTACT : 03213967012</div>
        </section>
        <section className=" hidden md:block">
          <div className="font-bold ">COMPANY</div>
          <div className="mt-3 "><Link href="">About</Link></div>
          <div className="mt-3"><Link href="">Features</Link></div>
          <div className="mt-3"><Link href="">Works</Link></div>
          <div className="mt-3"><Link href="">Career</Link></div>
        </section>
        <section className="hidden md:block">
          <div className="font-bold ">HELP</div>
          <div className="mt-3 "><Link href="">Company Support</Link></div>
          <div className="mt-3"><Link href="">Deliwery Detail</Link></div>
          <div className="mt-3"><Link href="">Terms & Condition</Link></div>
          <div className="mt-3"><Link href="">Privacy Policy</Link></div>
        </section>
        <section className="hidden md:block">
          <div className="font-bold ">FAQ</div>
          <div className="mt-3 "><Link href="">Account</Link></div>
          <div className="mt-3"><Link href="">Manage Deliveries</Link></div>
          <div className="mt-3"><Link href="">Orders</Link></div>
          <div className="mt-3"><Link href="">Payments</Link></div>
        </section>
        <section className="hidden md:block">
          <div className="font-bold ">RESOURCES</div>
          <div className="mt-3 "><Link href="">Free eBook</Link></div>
          <div className="mt-3"><Link href="">Delopment Tutorial</Link></div>
          <div className="mt-3"><Link href="">How To - Blog</Link></div>
          <div className="mt-3"><Link href="">Youtube Playlist</Link></div>
        </section>
       
      </div>
    )
}