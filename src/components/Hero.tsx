import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <main className='mt-[80px]'>
       <div>
          
         <section id="section1">
            {/* left section*/}
             <div>
               <h3 id="h3">Hi, I m <span className="text-orange-700">Bilal Ashrafi</span></h3>
               <h1 id="h1">WEB <span className="text-orange-700 ">DEVELOPER</span></h1>
               <p id="para">Web Developer From Karachi,Pakistan. I Create <br />
                   Website To Do Business Do Better <br />
                   Online.
              </p>
              <span className="flex gap-6 ml-[70px] mt-5">
              <a href=""> <Image width={30} height={10} src="/facebook.png" alt=""/></a>
              <a href=""> <Image width={30} height={10} src="/instagram.png" alt=""/></a> 
              <a href=""> <Image width={30} height={10} src="/communication.png" alt=""/></a> 
              </span>
              <div>
                <button id="button">HIRE ME</button>
              </div>
              
            </div>
            {/* right section */}
            <div id="sectionpic" className=" hidden sm:block">
              <Image width={300} height={100} src="/new3.png" alt="" />
            </div>
            
          </section>
       </div>
    </main>

  )
}

export default Hero
