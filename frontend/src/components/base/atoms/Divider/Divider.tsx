export const Divider = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #000, #000 5px, transparent 2px, transparent 8px)",
        backgroundSize: "10px 2px",
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        height: "1px",
        width: "100%",
        margin: "1rem 0",
      }}
    />
  );
};
