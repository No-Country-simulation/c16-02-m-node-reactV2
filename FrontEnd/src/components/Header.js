import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi'; // Importa el ícono de flecha izquierda

const Header = () => {
  return (
    <header className="bg-gray-50 shadow-md p-4">
      {/* Logo o título */}
      <div className="text-xl font-bold">
        {/* Enlace con la flecha que redirige al home */}
        <Link href="/">
            <FiArrowLeft /> {/* Ícono de flecha izquierda */}
        </Link>
      </div>
      {/* Otros elementos del header */}
    </header>
  );
};

export default Header;

