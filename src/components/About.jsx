import about from "../assets/about.png"

const About = ({ darkMode }) => {

return (

<section
id="about"
className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
darkMode ? "bg-gray-900" : "bg-gray-50"
}`}
>

<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

{/* Image */}
<figure
data-aos="fade-up"
data-aos-delay="300"
className="flex justify-center relative order-2 lg:order-1"
>

<div className="relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center">

{/* Star Shape */}
<div
className="absolute inset-0 scale-125
bg-gradient-to-l from-[#f97316]
via-[#fb923c]
to-[#f59e0b]
rotate-12 star-shape z-0"
data-aos="zoom-in"
data-aos-delay="600"
/>

{/* Image */}
<img
src={about}
alt="About Image"
className="relative w-full h-full object-contain z-10"
data-aos="zoom-in"
data-aos-delay="400"
/>

</div>

</figure>

{/* Content */}
<article
data-aos="fade-left"
data-aos-delay="300"
className="text-center lg:text-left relative order-1 lg:order-2"
>

<h1
className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6
text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
>
About Me
</h1>

<p
className={`text-sm sm:text-base lg:text-lg mb-6 leading-relaxed
bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-2xl backdrop-blur-sm
${darkMode ? "text-gray-300" : "text-gray-700"}`}
>

I'm Rohit Chawdhari, a Computer Science Engineering student at Chandigarh University. 
I’m passionate about Machine Learning, Artificial Intelligence and Data Science. 
I enjoy building modern web applications and solving real-world problems using technology.

</p>

{/* Stats */}

<div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">

<div className="text-center">
<div className="text-3xl font-bold text-orange-400">4+</div>
<div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
Education
</div>
</div>

<div className="text-center">
<div className="text-3xl font-bold text-orange-400">1+</div>
<div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
Years Learning
</div>
</div>

<div className="text-center">
<div className="text-3xl font-bold text-orange-400">10+</div>
<div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
Projects Completed
</div>
</div>

</div>

<button
className="border-2 border-orange-500 py-2 px-6
hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
rounded-full text-lg font-semibold transition duration-300"
>
Learn More
</button>

</article>

</div>

</section>

)

}

export default About