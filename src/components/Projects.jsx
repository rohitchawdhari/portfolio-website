import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {

const projects = [
{
id:1,
title:"E-Commerce Platform",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project1,
tags:["React","Node.js","MongoDB"]
},

{
id:2,
title:"Fitness Tracker App",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project2,
tags:["React Native","Firebase"]
},

{
id:3,
title:"Content Generator",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project3,
tags:["Python","OpenAI"]
},

{
id:4,
title:"Dashboard",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project4,
tags:["Vue.js","Chart.js"]
},

{
id:5,
title:"Task Management",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project5,
tags:["Laravel","Vue.js"]
},

{
id:6,
title:"Analytics App",
desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
image:project6,
tags:["Next.js","Three.js"]
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


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">

{projects.map((project,index)=>(

<div
key={project.id}
style={{
background: darkMode
? "linear-gradient(to right,#1f2937,#111827)"
: "linear-gradient(to right,#ffffff,#f9fafb)"
}}
className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
data-aos="fade-up"
data-aos-delay={index*100}
>

<div className="h-36 overflow-hidden rounded-t-xl">

<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>

</div>

<div className="p-4">

<h3
className="text-lg font-bold mb-2"
style={{
color: darkMode ? "white" : "#1f2937"
}}
>
{project.title}
</h3>

<p className="text-sm text-gray-400 mb-3">
{project.desc}
</p>

<div className="flex flex-wrap gap-2 mb-4">

{project.tags.map((tag,i)=>(

<span
key={i}
className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-200"
>
{tag}
</span>

))}

</div>


<div className="flex gap-3">

<a
href="#"
className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm rounded-lg bg-gray-700 text-white hover:opacity-90 transition"
>

<FaGithub/>
Code

</a>

<a
href="#"
className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm rounded-lg bg-orange-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.7)] transition-all duration-300"
>

<FaExternalLinkAlt/>
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