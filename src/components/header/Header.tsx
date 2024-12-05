import { FC } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const Header: FC = () => {
  return (
    <header className='background'>
        <div className="container mx-auto header">
    <div className="header__logo">
        <a href="/">
          <img src="logo.png" alt="Logo da loja" />
        </a>
      </div>

      <div className="header__search">
        <input
          type="text"
          placeholder="Buscar produtos..."
        />
        <button>
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <nav className="header__nav">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </nav>
      <div className="header__icons">
        <a href="/carrinho">
        <FontAwesomeIcon icon={faShoppingCart}/>
          <span className="cart-badge">3</span>
        </a>
        <a href="/perfil">
        <FontAwesomeIcon icon={faUser}/>
        </a>
      </div>
   </div>
    </header>
  );
}

export default Header;