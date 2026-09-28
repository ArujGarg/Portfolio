"use client";

import { useEffect, useRef, useState } from "react";

type CatState = "idle" | "walking";

const CAT_SIZE = 48;

const WALK_SPEED = 2.2;
const ARRIVAL_DISTANCE = 5;

export default function CursorCat() {
  const catRef = useRef<HTMLDivElement>(null);

  const position = useRef({
    x: 0,
    y: 0,
  });

  const target = useRef({
    x: 0,
    y: 0,
  });

  const lastCursor = useRef({
    x: 0,
    y: 0,
  });

  const direction = useRef(1);

  const [state, setState] = useState<CatState>("idle");

  useEffect(() => {
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    position.current = {
      x: initialX,
      y: initialY,
    };

    target.current = {
      x: initialX,
      y: initialY,
    };

    lastCursor.current = {
      x: initialX,
      y: initialY,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const moved =
        Math.abs(clientX - lastCursor.current.x) > 3 ||
        Math.abs(clientY - lastCursor.current.y) > 3;

      if (!moved) return;

      target.current = {
        x: clientX,
        y: clientY,
      };

      if (Math.abs(clientX - lastCursor.current.x) > 1) {
        direction.current =
          clientX > lastCursor.current.x ? 1 : -1;
      }

      lastCursor.current = {
        x: clientX,
        y: clientY,
      };

      setState("walking");
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      const current = position.current;
      const destination = target.current;

      const dx = destination.x - current.x;
      const dy = destination.y - current.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= ARRIVAL_DISTANCE) {
        current.x = destination.x;
        current.y = destination.y;

        setState("idle");
      } else {
        const moveX = (dx / distance) * WALK_SPEED;
        const moveY = (dy / distance) * WALK_SPEED;

        current.x += moveX;
        current.y += moveY;

        if (Math.abs(dx) > 1) {
          direction.current = dx > 0 ? 1 : -1;
        }
      }

      if (catRef.current) {
        catRef.current.style.transform = `
          translate3d(
            ${current.x - CAT_SIZE / 2}px,
            ${current.y - CAT_SIZE / 2}px,
            0
          )
        `;

        catRef.current.style.setProperty(
          "--direction",
          String(direction.current)
        );
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={catRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-12 w-12 md:block"
    >
      <div
        className={
          state === "walking"
            ? "cursor-cat cursor-cat-running"
            : "cursor-cat cursor-cat-idle"
        }
      />
    </div>
  );
}