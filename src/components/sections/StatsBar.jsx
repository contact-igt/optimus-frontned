"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Parse "5000+", "15+", "4" → { end: 5000, suffix: "+" }
function parseStat(value) {
  const match = value.match(/^(\d+)(\D*)$/);
  if (!match) return { end: 0, suffix: "" };
  return { end: parseInt(match[1], 10), suffix: match[2] };
}

function StatCard({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { end, suffix } = parseStat(stat.value);

  return (
    <div
      ref={ref}
      className="rounded-2xl py-6 px-4 text-center bg-cyan-600 transition-all duration-300"
    >
      <p className="text-3xl font-extrabold text-white">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.2}
            separator=","
            suffix={suffix}
            useEasing
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </p>
      <p className="text-sm text-cyan-100 font-medium mt-1">{stat.label}</p>
    </div>
  );
}

export default function StatsBar({ stats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
