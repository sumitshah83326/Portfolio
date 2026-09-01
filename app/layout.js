import "./globals.css";

export const metadata = {
  title: "Sumit Shah | Portfolio",
  description: "Portfolio of Sumit Shah - Computer Science Engineering Student & Full Stack Developer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
