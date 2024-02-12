import { Metadata } from "next";
export const metadata: Metadata = {
  title: "special",
};
export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
