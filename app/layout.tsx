import ClientLayout from "./ClientLayout";
import "../src/styles/globals.scss";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-organic bg-lime">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
