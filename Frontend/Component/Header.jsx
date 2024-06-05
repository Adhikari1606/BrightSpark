import React from "react"
export default function Header()
{
    return (
        <header>
        <nav class=" w-100 px-8 md:px-auto">
        <div class="md:h-16 h-28 mx-auto md:px-4 mt-5 container flex items-center justify-between flex-wrap">
            <div class="h-5px w-12 md:order-1 flex">
                <img src='../Images/logo.jpeg'/>
                <h3 class="bg-white mt-5 ml-2 font-semibold text-gray-500">BrightSpark</h3>
            </div>
            <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
                <ul class="flex font-semibold justify-between">
                    <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Home</a></li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Blogs</a></li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About Us</a></li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
                </ul>
            </div>
            
        </div>
    </nav>
      </header>
      )
    }