import instagram from "../assets/instagram.png"
import tiktok from "../assets/tiktok.png"
import github from "../assets/github.png"
import youtube from "../assets/youtube.png"
import hero from "../assets/hero.png"
import hi from "../assets/hi.png"
import CV from "../assets/CV.pdf"

import { Mail, Download } from "lucide-react"

const Hero = ({ darkMode }) => {

const socialIcons = [
{ icon: instagram, alt: "Instagram" },
{ icon: tiktok, alt: "TikTok" },
{ icon: github, alt: "GitHub" },
{ icon: youtube, alt: "YouTube" },
]

const darkTheme = {
textPrimary: "text-white",
textSecondary: "text-gray-300",
buttonSecondary: "text-white border-2 border-orange-500",
}

const lightTheme = {
textPrimary: "text-gray-900",
textSecondary: "text-gray-700",
buttonSecondary: "text-gray-800 border-2 border-orange-500",
}

const theme = darkMode ? darkTheme : lightTheme

return (

<div className="relative overflow-hidden min-h-screen flex flex-col">

{/* Animated Background Light */}
<div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<section
id="home"
data-aos="fade-up"
data-aos-delay="250"
className="body-font z-10"
>

<div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">

{/* Left Side */}
<div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

{/* Social Icons */}
<div className="flex gap-4 sm:gap-6 mb-6">
{socialIcons.map((social, index) => (
<a
key={index}
href="#"
target="_blank"
rel="noreferrer"
className="transition-transform hover:scale-110 duration-300"
>
<img
src={social.icon}
alt={social.alt}
className="w-8 h-8 sm:w-10 sm:h-10"
/>
</a>
))}
</div>

<h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.textPrimary}`}>
Hi, I'm Rohit
</h1>

<p className={`mt-4 ${theme.textSecondary} max-w-lg`}>
Frontend Developer passionate about building modern web applications
using React, TailwindCSS and JavaScript.
</p>

{/* Buttons */}
<div className="flex gap-4 mt-6">

<a
href={CV}
download
className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white transition duration-300 hover:bg-orange-600 shadow-lg hover:shadow-orange-500/60 hover:scale-105"
>
<Download size={18}/>
Download CV
</a>

<a
href="#contact"
className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-orange-500 text-gray-700 dark:text-white transition duration-300 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-orange-500/60 hover:scale-105"
>
<Mail size={18}/>
Contact Me
</a>

</div>

</div>

{/* Right Side */}
<div className="lg:w-1/2 w-full flex justify-center lg:mt-0 mt-10">

<div className="relative flex justify-center items-center">

{/* Hi PNG */}
<img 
src={hi}
alt="hi"
className="absolute top-10 left-20 sm:left-24 lg:left-28 w-12 sm:w-14 lg:w-16 animate-bounce z-10"
/>

{/* Hero Image */}
<img
src={hero}
alt="Hero"
className="w-full max-w-md mt-10 lg:mt-16 transition-all duration-500 hover:scale-105"
/>

</div>

</div>

</div>

</section>

</div>

)

}

export default Hero