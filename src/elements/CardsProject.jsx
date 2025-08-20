"use client";
import { Icon } from "@iconify/react";

const iconMap1 = {
  React: (
    <span title="React">
      <Icon icon="logos:react" className="w-11 h-11" />
    </span>
  ),
  Laravel: (
    <span title="Laravel">
      <Icon icon="logos:laravel" className="w-11 h-11" />
    </span>
  ),
  ".NET": (
    <span title=".NET">
      <Icon icon="logos:dotnet" className="w-11 h-11" />
    </span>
  ),
  Tailwind: (
    <span title="Tailwind CSS">
      <Icon icon="logos:tailwindcss-icon" className="w-11 h-11" />
    </span>
  ),
  MySQL: (
    <span title="MySQL">
      <Icon icon="logos:mysql" className="w-11 h-11" />
    </span>
  ),
  Bootstrap: (
    <span title="Bootstrap">
      <Icon icon="logos:bootstrap" className="w-11 h-11" />
    </span>
  ),
  Astro: (
    <span title="Astro.JS">
      <Icon icon="logos:astro-icon" className="w-11 h-11" title="Astro.js" />
    </span>
  ),
  Alpine: (
    <span title="Alpine.JS">
      <Icon
        icon="logos:alpinejs-icon"
        className="w-11 h-11"
        title="Alpine.js"
      />
    </span>
  ),
  SqlServer: (
    <span title="SQL Server">
      <Icon icon="logos:microsoft-icon" className="w-11 h-11" />
    </span>
  ),
  Flutter: (
    <span title="Flutter">
      <Icon icon="logos:flutter" className="w-11 h-11" />
    </span>
  ),
  Kotlin: (
    <span title="Kotlin">
      <Icon icon="logos:kotlin-icon" className="w-11 h-11" />
    </span>
  ),
  Firebase: (
    <span title="Firebase">
      <Icon icon="logos:firebase-icon" className="w-11 h-11" />
    </span>
  ),
};
const iconMap2 = {
  React: <Icon icon="logos:react" className="w-8 h-8" />,
  Laravel: <Icon icon="logos:laravel" className="w-8 h-8" />,
  ".NET": <Icon icon="logos:dotnet" className="w-8 h-8" />,
  Tailwind: <Icon icon="logos:tailwindcss-icon" className="w-8 h-8" />,
  MySQL: <Icon icon="logos:mysql" className="w-8 h-8" />,
  Bootstrap: <Icon icon="logos:bootstrap" className="w-8 h-8" />,
  Alpine: <Icon icon="logos:alpinejs-icon" className="w-8 h-8" />,
  Astro: <Icon icon="logos:astro-icon" className="w-8 h-8" />,
  SqlServer: <Icon icon="logos:microsoft-icon" className="w-8 h-8" />,
  Flutter: <Icon icon="logos:flutter" className="w-8 h-8" />,
  Kotlin: <Icon icon="logos:kotlin-icon" className="w-8 h-8" />,
  Firebase: <Icon icon="logos:firebase-icon" className="w-8 h-8" />,
};

const CardsProject = ({ image, title, description, link, techstack }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden h-140 relative">
      {/* Image */}
      <div className="h-1/2 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="w-full h-1/3">
          <p className="text-white text-wrap text-justify">{description}</p>
        </div>
      </div>

      {/* Icons layar normal */}
      <div className="hidden lg:block">
        <div className="flex left-4 absolute bottom-14 gap-4">
          {techstack.map((tech) => (
            <span key={tech.id}>{iconMap1[tech.name] || null}</span>
          ))}
        </div>
      </div>

      {/* Icons layar kecil */}
      <div className="block lg:hidden">
        <div className="flex left-4 absolute bottom-14 gap-4">
          {techstack.map((tech) => (
            <span key={tech.id}>{iconMap2[tech.name] || null}</span>
          ))}
        </div>
      </div>
      {/* Button */}
      <div className="absolute bottom-4 right-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-slate-900 outline-blue-950 outline-2 text-white rounded-lg hover:bg-blue-700 transition duration-450"
        >
          View
        </a>
      </div>
    </div>
  );
};
export default CardsProject;
