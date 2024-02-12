import { Metadata } from "next";
export const metadata: Metadata = {
  title: "works",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
