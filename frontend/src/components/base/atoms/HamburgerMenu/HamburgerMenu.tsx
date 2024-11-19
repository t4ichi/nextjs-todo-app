"use client";
import { useState } from "react";
import { css } from "styled-system/css";
import { container, flex } from "styled-system/patterns";

export type HamburgerMenuProps = {
  menuItems: Array<{
    label: string;
    href: string;
  }>;
};

export const HamburgerMenu = ({ menuItems }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={container({ position: "relative" })}>
      <button
        className={flex({
          flexDirection: "column",
          gap: "6px",
          width: "30px",
          height: "20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
          zIndex: "10",
        })}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <span
          className={css({
            width: "100%",
            height: "2px",
            bg: "black",
            transition: "all 0.3s",
            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          })}
        />
        <span
          className={css({
            width: "100%",
            height: "2px",
            bg: "black",
            transition: "all 0.3s",
            opacity: isOpen ? "0" : "1",
          })}
        />
        <span
          className={css({
            width: "100%",
            height: "2px",
            bg: "black",
            transition: "all 0.3s",
            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          })}
        />
      </button>

      {isOpen && (
        <>
          <div
            className={css({
              position: "fixed",
              inset: "0",
              bg: "rgba(0, 0, 0, 0.5)",
              zIndex: "5",
            })}
            onClick={() => setIsOpen(false)}
          />
          <nav
            className={css({
              position: "fixed",
              top: "0",
              right: "0",
              height: "100vh",
              width: "250px",
              bg: "white",
              padding: "60px 20px",
              zIndex: "6",
              animation: "slideIn 0.3s ease-in-out",
            })}
          >
            <ul
              className={css({
                listStyle: "none",
                padding: "0",
                margin: "0",
              })}
            >
              {menuItems.map((item, index) => (
                <li key={index} className={css({ margin: "15px 0" })}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={css({
                      textDecoration: "none",
                      color: "black",
                      fontSize: "18px",
                    })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
