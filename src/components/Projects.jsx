import smiledental from "../assets/smiledental.png";
import aicareer from "../assets/aicareer.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {

const projects = [
  {
    id: 1,
    title: "Smile Dental Clinic",
    desc: "A modern and responsive dental clinic website built with React and Tailwind CSS. The website showcases clinic services, doctors, appointment booking, FAQs, testimonials, contact information, and a premium healthcare user interface.",
    image: smiledental,
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    demo: "https://smiledentalbyrohit.vercel.app/",
    github: "https://github.com/rohitchawdhari/dental-clinic-react"
  },
  {
    id: 2,
    title: "AI Career Assistant",
    desc: "An AI-powered Career Assistant platform that helps students improve their resumes using ATS analysis, resume parsing, AI-powered career guidance, authentication, resume upload, and an intelligent chatbot. Built with a modern responsive interface and designed to help students prepare for placements.",
    image: aicareer,
    tags: ["React", "FastAPI", "Python", "MongoDB", "Tailwind CSS", "Gemini AI"],
    demo: "https://ai-career-assistant-gray.vercel.app/",
    github: "https://github.com/rohitchawdhari/AI-Career-Assistant"
  }
]

return (

<section
id="projects"
style={{
backgroundColor: darkMode ? "#111827" : "#f9fafb"
}}
className="relative py-24"
>

<div className="container mx-auto px-4">

<div className="text-center mb-10" data-aos="fade-up">

<h2
className="text-3xl sm:text-4xl font-bold mb-3"
style={{
color: darkMode ? "white" : "#1f2937"
}}
>

My <span
style={{
background:"linear-gradient(to right,#f97316,#f59e0b)",
WebkitBackgroundClip:"text",
color:"transparent"
}}
>
Projects
</span>

</h2>

<p className="text-gray-500">
A showcase of my recent work
</p>

</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto justify-center">

{projects.map((project,index)=>(

<div
key={project.id}
style={{
background: darkMode
? "linear-gradient(to right,#1f2937,#111827)"
: "linear-gradient(to right,#ffffff,#f9fafb)",
borderColor: darkMode ? "#374151" : "#e5e7eb"
}}
className="group rounded-xl border duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:-translate-y-2 transition-all flex flex-col h-full overflow-hidden"
data-aos="fade-up"
data-aos-delay={index*100}
>

<div className="w-full aspect-[1024/470] overflow-hidden rounded-t-xl relative">

<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>

</div>

<div className="p-5 flex flex-col flex-grow">

<h3
className="text-xl font-bold mb-2 transition-colors duration-300"
style={{
color: darkMode ? "white" : "#1f2937"
}}
>
{project.title}
</h3>

<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
{project.desc}
</p>

<div className="flex flex-wrap gap-2 mb-5">

{project.tags.map((tag,i)=>(

<span
key={i}
className="text-xs px-2.5 py-1 rounded-full bg-gray-700 dark:bg-gray-800 text-gray-200"
>
{tag}
</span>

))}

</div>


<div className="flex gap-3 mt-auto">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
>

<FaGithub className="text-base"/>
Code

</a>

<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg bg-orange-500 text-white hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-300"
>

<FaExternalLinkAlt className="text-sm"/>
Demo

</a>

</div>

</div>

</div>

))}

</div>


<div className="text-center mt-10">

<button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:shadow-[0_0_25px_rgba(249,115,22,0.7)] transition-all duration-300">
View All Projects
</button>

</div>


</div>

</section>

)

}

export default Projects