import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiAward } from "react-icons/fi";
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import BlurText from "../elements/BlurText";
import { useEffect, useState } from "react";

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FiBookOpen: FiBookOpen,
  FiCode: FiCode,
  FiAward: FiAward,
  FaUserGraduate: FaUserGraduate,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function Dot({ Icon }) {
  return (
    <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-2 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function Card({ year, title, place, description }) {
  return (
    <div className="ml-6 w-full">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium dark:bg-slate-800">
            {year}
          </span>
          {place && <span className="text-slate-500">{place}</span>}
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [milestones, setMilestones] = useState([]);
  useEffect(() => {
    // Fetching data from an API or local JSON
    const fetchMilestones = async () => {
      const response = await fetch("/milestone.json");
      const data = await response.json();
      setMilestones(data);
    };

    fetchMilestones();
  }, []);
  return (
    <section className="max-w-full mx-auto md:max-w-3/5 px-4 py-12">
      <div className="mb-8 flex flex-col items-center justify-center">
        <div className="text-center justify-center items-center">
          <BlurText
            text="My Journey"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-4xl font-bold text-white flex"
          />
        </div>
        <p className="text-slate-600 dark:text-slate-300">
          A quick timeline of how I got here.
        </p>
      </div>

      {/* Timeline */}
      <motion.ol
        variants={container}
        initial="hidden"
        animate="show"
        className="relative grid gap-8"
      >
        {/* vertical line */}
        <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent dark:via-slate-700" />

        {milestones.map((m) => {
          const Icon = iconMap[m.icon] || FiBookOpen; // Default icon if not found
          return (
            <motion.li
              key={m.id}
              variants={item}
              className="relative flex items-start"
            >
              <div className="mr-4 shrink-0">
                <Dot Icon={Icon} />
              </div>
              <Card
                year={m.year}
                title={m.title}
                place={m.place}
                description={m.description}
              />
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
