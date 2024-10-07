import { Heading } from "@radix-ui/themes";

type titleProps = {
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  children: React.ReactNode;
};
export const Title = ({ size, children }: titleProps) => {
  return <Heading size={size ? size : "8"}>{children}</Heading>;
};
