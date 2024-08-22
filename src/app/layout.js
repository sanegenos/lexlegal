import "./globals.css";



export const metadata = {
  title: "Lex Legal",
  description: "Lex Legal web-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}