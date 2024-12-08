import { css } from "styled-system/css";

export type TodoDeleteButtonPresentationalProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TodoDeleteButtonPresentational = ({
  ...props
}: TodoDeleteButtonPresentationalProps) => {
  const buttonStyle = css({
    cursor: "pointer",
    _hover: {
      opacity: 0.8,
    },
  });

  const svgStyle = css({
    width: "1rem",
    height: "1.125rem",
    fill: "none",
  });
  return (
    <button type="button" className={buttonStyle} {...props}>
      <svg viewBox="0 0 32 36" className={svgStyle}>
        <title>TodoDeleteButton</title>
        <path
          d="M3.47518 31.5653C3.47518 32.5013 3.5893 33.3689 3.84608 34.0938C4.1942 35.0525 4.79354 35.7431 5.69523 35.9428C5.8779 35.9771 6.06627 35.9999 6.26596 35.9999H25.7681C25.8194 35.9999 25.8652 35.9999 25.905 35.9941C27.7657 35.8744 28.5247 33.9396 28.5247 31.5653L29.3067 12.6284H2.69324L3.47518 31.5653ZM21.3107 16.8518H25.0147V31.7765H21.3107V16.8518ZM14.1478 16.8518H17.852V31.7765H14.1478V16.8518ZM6.98518 16.8518H10.695V31.7765H6.98518V16.8518Z"
          fill="#999999"
        />
        <path
          d="M23.9218 6.2782C23.9273 6.13561 23.9388 5.9928 23.9388 5.85V5.45639C23.9388 2.44863 21.4904 0 18.4826 0H13.5114C10.5036 0 8.05514 2.44856 8.05514 5.45639V5.85C8.05514 5.9928 8.06653 6.13561 8.07806 6.2782H0.0194092V10.6785H31.9805V6.2782H23.9218ZM20.5144 5.85C20.5144 5.99857 20.4974 6.14116 20.4688 6.2782H11.5253C11.4968 6.14116 11.4796 5.99857 11.4796 5.85V5.45639C11.4796 4.33772 12.3927 3.4245 13.5115 3.4245H18.4826C19.6069 3.4245 20.5144 4.33772 20.5144 5.45639V5.85Z"
          fill="#999999"
        />
      </svg>
    </button>
  );
};
