import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CURATE City",
  description: "curate.city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="curate relative w-full bg-black p-0 m-0">
        {children}
    </main>
  );
}
