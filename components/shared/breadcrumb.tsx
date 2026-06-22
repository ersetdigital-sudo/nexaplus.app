"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="flex items-center gap-1.5 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className={`h-3.5 w-3.5 ${isLight ? "text-slate-400" : "text-slate-300"}`} />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  className={`transition-colors ${
                    isLight
                      ? "text-slate-500 hover:text-orange-600"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  className={isLight ? "text-slate-900 font-medium" : "text-white font-medium"}
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
