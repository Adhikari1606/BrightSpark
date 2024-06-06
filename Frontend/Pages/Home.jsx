import React from 'react'
import Card from '../Component/Card.jsx'
export default function Home()
{
    return (
    <div className="">


      <div className="relative isolate px-6 pt-14 lg:px-8 ">
         <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className=" bg-blacktext-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Unlock the Power of AI: 
            </h1>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl'>Digital Strategies That Will transform Your Business</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Digital marketing has come a long way in the last two decades and is now an integral part of any business growth strategy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg text-black border-2 border-gray-400 rounded-xl bg-transparent transition duration-300 hover:border-blue-500">
                Get started
              </a>
              <a href="#"  className="inline-block px-6 py-3 text-lg text-black rounded-xl transition duration-300 hover:bg-blue-500 hover:border-2 hover:border-blue-500">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div>
        </div>
        </div>



        <div className=" py-24 sm:py-13 mb-40 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <h2 className="text-center text-3xl font-bold leading-8 text-gray-900 mb-4">
          Our Trusted Clients
        </h2>
        <div className="justify-center mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 justify-items-center
        ">
          <img
            className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/Camile-Thai2.png"
            alt="Transistor"            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/ConventionCentreDublin-300x224.jpeg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/dromoland-castle.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="../Images/TheSundayBusinessPost2-300x101.jpeg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img 
           className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
           src="../Images/Untitled-design-25-150x150.png"
           alt="SavvyCal"
           width={158}
           height={48}/>
        </div>
      </div>
    </div>

    
    <div >
      <div >
        <div className ="text-center">
          <h1 className="bg-blacktext-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Why We ??</h1>
        </div>
        
        <div className=' flex  mt-28 mb-28 '>
          <div className='w-6/12 text-justify  ml-80 mb-28'>
          <p className='mt-14 ml- text-xl font-sans'>Brightspark is your partner for embracing digital transformation, driving innovation
               and helping clients gain a competitive edge as first movers in digital. Since our inception at the dawn of the Internet, we have built a strong reputation for staying ahead of trends. Our expertise extends beyond traditional digital marketing; today, we help businesses leverage AI to enhance their marketing strategies, operations, and customer interactions. We simplify AI for businesses through courses, consulting, and thought leadership on responsible AI use, prioritizing people-first approaches and ethical engagement. Recognized as a premier creator of Generative AI Courses, we equip individuals and businesses with essential AI knowledge and tools. Our partnerships with organizations like the Small Firms Association and consulting clients across various sectors highlight our dedication to fostering AI fluency. Our success stories, covered in national media, showcase the tangible value and transformative 
              impact we deliver through AI-empowered marketing.</p>
          </div>
            <div className='ml-28 mr-40 mt-10 w-6/12'>
              <img src="../Images/About.png  " />
            </div>
            
        </div>
      </div>
    </div>

    



    <div className='bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] mx-auto max-w-max px-6 lg:px-8  '>
      <div className='container'>
        <h1 className='text-center bg-blacktext-4xl font-medium tracking-tight text-gray-900 sm:text-6xl  '>Our Services</h1>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-24 '>
        <Card 
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="Digital Strategies"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Digital strategies that will transform your business."
              Button="View Details"
            />
            <Card
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Digital Marketing Mentor"
              CardDescription="Navigate the marketing maze with our expert guidance for startups and scaling businesses"
              Button="View Details"
            />
            <Card
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Paid Social Media"
              CardDescription="Paid social gets you in front of people who will buy"
              Button="View Details"
            />
        </div>

      </div>
      
    


    



    </div>
    <div className ="text-center">
          <h1 className="bg-blacktext-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Get In Touch</h1>
        </div>
    <section class="bg- ">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-medium text-blue-500 dark:text-blue-400"></p>

            <h1 class="mt-2 text-2xl font-semibold text-black md:text-3xl dark:text-black">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Brightspark@mail.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">New Delhi ,India</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555)123456</p>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>





    </div>
    )
}