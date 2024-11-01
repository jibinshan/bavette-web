import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Bavette Steak House | Woolton Village's Premier Steak House",
  description:
    "Get in touch with Bavette Steak House for reservations, private events, or inquiries. Located in Woolton Village, Liverpool, Bavette offers an extraordinary dining experience for every occasion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Bavette Steak House, reservations Liverpool, private dining Woolton Village, best steak house Liverpool, Bavette restaurant location, group dining Liverpool, steak reservations",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
