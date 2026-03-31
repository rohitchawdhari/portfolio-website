import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {

const currentYear = new Date().getFullYear();

return (

<footer
style={{
background: darkMode
? "linear-gradient(to bottom, #000000, #111827)"
: "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
borderColor: darkMode ? "#374151" : "#d1d5db"
}}
className="border-t"
>

<div className="container mx-auto px-4 py-8">

<div className="flex flex-col md:flex-row justify-between items-center gap-6">

{/* Left */}
<div className="text-center md:text-left">

<h3
className="text-2xl font-bold mb-2"
style={{
background: "linear-gradient(to right,#f97316,#f59e0b)",
WebkitBackgroundClip: "text",
backgroundClip: "text",
color: "transparent"
}}
>
Portfolio
</h3>

<p
className="text-sm"
style={{
color: darkMode ? "#9ca3af" : "#6b7280"
}}
>
Full Stack Developer & UI/UX Designer
</p>

</div>


{/* Social Icons */}
<div className="flex gap-4">

<a
href="#"
className="w-10 h-10 rounded-full flex items-center justify-center
hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
bg-[#374151] text-white"
>
<FaGithub/>
</a>

<a
href="#"
className="w-10 h-10 rounded-full flex items-center justify-center
hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
bg-[#374151] text-white"
>
<FaLinkedin/>
</a>

<a
href="#"
className="w-10 h-10 rounded-full flex items-center justify-center
hover:scale-110 transition-all
hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
bg-[#374151] text-white"
>
<FaTwitter/>
</a>

</div>


{/* Right */}
<div className="text-center md:text-right">

<p
className="text-sm flex items-center justify-center md:justify-end gap-1"
style={{
color: darkMode ? "#9ca3af" : "#6b7280"
}}
>

© {currentYear} Made with 
<FaHeart className="text-red-500"/>
by

<span className="ml-1 text-[#f97316]">
Rohit
</span>

</p>

</div>

</div>

</div>

</footer>

)

}

export default Footer