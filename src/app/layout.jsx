import './globals.css';
import { MyProvider } from '../context/MyContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
