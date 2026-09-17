"use client";

import { useEffect, useRef, useState } from "react";

// Contents bar for case studies on narrow screens. A native <details>, so it
// works without JavaScript; with JavaScript it closes after a choice and shows
// the section the reader is currently in.
export function CaseToc({
  label,
  items,
}: {
  label: string;
  items: { title: string; href: string }[];
}) {
  const details = useRef<HTMLDetailsElement>(null);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    const sections = items.map((item) =>
      document.querySelector<HTMLElement>(item.href),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const bar = details.current;
      if (!bar || getComputedStyle(bar).display === "none") return;
      const limit = bar.getBoundingClientRect().bottom + 40;
      let index = -1;
      sections.forEach((section, i) => {
        if (section && section.getBoundingClientRect().top <= limit) index = i;
      });
      setCurrent(index);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  const active = current >= 0 ? items[current] : null;
  return (
    <details ref={details} className="case-toc-mobile">
      <summary>
        <span className="sr-only">{label}</span>
        {active ? (
          <span className="toc-current">
            <span aria-hidden="true">0{current + 1}</span>
            {active.title}
          </span>
        ) : (
          <span className="toc-current eyebrow" aria-hidden="true">
            {label}
          </span>
        )}
        <svg
          className="toc-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={index === current ? "true" : undefined}
              onClick={() => details.current?.removeAttribute("open")}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
