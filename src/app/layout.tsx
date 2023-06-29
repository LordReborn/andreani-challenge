import "./globals.css";

export const metadata = {
  title: "Andreani Challenge",
  description: "Tablero Kanban con drag & drop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
