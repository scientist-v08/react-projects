// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import { Header } from './header';
import { About } from './about';
import { Contact } from './contact';
import { Home } from './home';
import Food from './food';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center p-4">
        {/* Centered Square */}
        <div className="bg-purple-300 w-[40vw] h-[40vh] flex items-center justify-center text-2xl font-semibold rounded-lg shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Dynamic route – no render prop needed */}
            <Route path="/food/:name" element={<Food />} />

            {/* 404 – wildcard at the end */}
            <Route path="*" element={<p>404 NOT FOUND!</p>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
