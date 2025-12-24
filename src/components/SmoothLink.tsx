"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function SmoothLink({ href, children, className, onClick }: SmoothLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Only handle smooth transitions for internal navigation
    if (!e.defaultPrevented && href.startsWith('/')) {
      e.preventDefault();
      
      // Add fade-out effect
      const main = document.querySelector('main');
      if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 0.2s ease-out';
      }

      // Navigate after fade-out
      setTimeout(() => {
        router.push(href);
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset opacity
        if (main) {
          setTimeout(() => {
            main.style.opacity = '1';
          }, 50);
        }
      }, 200);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
