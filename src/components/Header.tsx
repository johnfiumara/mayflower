import { Cherry } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header = ({ setCurrentPage: setPage }: HeaderProps) => (
  <header className="p-4 text-white bg-red-700">
    <div className="container flex items-center justify-between mx-auto">
      <div className="flex items-center space-x-2">
        <Cherry size={32} />
        <h1 className="text-2xl font-bold">Mayflower Cranberry farm</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><button onClick={() => setPage('home')} className="hover:text-red-200">Home</button></li>
          <li><button onClick={() => setPage('about')} className="hover:text-red-200">About</button></li>
          <li><button onClick={() => setPage('facts')} className="hover:text-red-200">Blog</button></li>
          <li><button onClick={() => setPage('growing')} className="hover:text-red-200">Growing Process</button></li>
          <li><button onClick={() => setPage('quiz')} className="hover:text-red-200">Quiz</button></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;