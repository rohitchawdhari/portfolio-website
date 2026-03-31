import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import cpp from "../assets/cpp.png";

const Skills = ({ darkMode }) => {

const skills = [

{
name: "HTML",
icon: html,
level: 90,
color: "from-orange-500 to-red-500"
},

{
name: "CSS",
icon: css,
level: 85,
color: "from-blue-500 to-cyan-500"
},

{
name: "JavaScript",
icon: javascript,
level: 80,
color: "from-yellow-400 to-yellow-600"
},

{
name: "React",
icon: react,
level: 85,
color: "from-cyan-500 to-blue-500"
},

{
name: "Tailwind CSS",
icon: tailwind,
level: 88,
color: "from-teal-500 to-cyan-500"
},

{
name: "Python",
icon: python,
level: 75,
color: "from-blue-500 to-indigo-500"
},

{
name: "C++",
icon: cpp,
level: 70,
color: "from-indigo-500 to-blue-700"
},

{
name: "GitHub",
icon: github,
level: 80,
color: "from-gray-600 to-gray-900"
}

];

return (

<section
id="skills"
style={{
backgroundColor: darkMode ? "#111827" : "#f9fafb"
}}
className="py-14 relative overflow-hidden"
>

<div className="container px-5 py-14 mx-auto">

<div className="text-center mb-20" data-aos="fade-up">

<h1
className="sm:text-4xl text-3xl font-bold mb-4"
style={{
color: darkMode ? "white" : "#1f2937"
}}
>

My{" "}

<span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
Skills
</span>

</h1>

</div>

<div className="flex flex-wrap -m-4">

{skills.map((skill, index) => (

<div
key={index}
className="p-4 lg:w-1/4 md:w-1/2 w-full"
data-aos="fade-up"
data-aos-delay={`${300 + index * 100}`}
>

<div

style={{
background: darkMode
? "linear-gradient(to bottom right, #1f2937, #111827)"
: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
borderColor: darkMode ? "#374151" : "#e5e7eb"
}}

className="h-full p-6 rounded-2xl border group
hover:border-orange-500/50 transition-all duration-300
hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]
hover:scale-105"
>

<div
style={{
background: darkMode
? "linear-gradient(to bottom right, #374151, #1f2937)"
: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)"
}}

className="w-16 h-16 rounded-xl p-3 flex items-center justify-center mb-4
group-hover:scale-110 transition-transform duration-300"
>

<img
src={skill.icon}
alt={skill.name}
className="w-full h-full object-contain"
/>

</div>

<h3
className="text-xl font-bold mb-4"
style={{
color: darkMode ? "white" : "#1f2937"
}}
>

{skill.name}

</h3>

<div className="mb-2 flex justify-between items-center">

<span
className="font-medium"
style={{
color: darkMode ? "#d1d5db" : "#6b7280"
}}
>

Proficiency

</span>

<span className="font-bold text-orange-500">

{skill.level}%

</span>

</div>

<div
className="w-full rounded-full h-3 overflow-hidden"
style={{
backgroundColor: darkMode ? "#374151" : "#e5e7eb"
}}
>

<div
className={`h-full rounded-full bg-gradient-to-r ${skill.color}
transition-all duration-1000 ease-out`}
style={{ width: `${skill.level}%` }}
></div>

</div>


{/* Bottom Line Animation */}

<div
className={`mt-6 pt-4 border-t ${
darkMode ? "border-gray-700" : "border-gray-300"
}`}
>

<div className="h-1 bg-gray-600 rounded-full overflow-hidden">

<div
className="h-full w-10 bg-gradient-to-r from-orange-500 to-amber-500
transition-all duration-500 group-hover:w-full"
></div>

</div>

</div>

</div>

</div>

))}

</div>

</div>

</section>

);

};

export default Skills;