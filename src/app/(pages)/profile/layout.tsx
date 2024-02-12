import { Metadata } from "next";
export const metadata: Metadata = {
  title: "profile",
  description: "sato makoto / Bassoon Player",
};
export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
