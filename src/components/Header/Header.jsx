import './index.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="header_container">
            <div className='header-left'>
            <Link to="/">
            <div>ГЛАВНАЯ</div>
          </Link>  
          <Link to="/catalog">
            <div>КАТАЛОГ</div>
          </Link>  
            </div>
            <div className='header-center'>
            _crochagstore
            </div>
            <div className='header-right'>
            <Link to="/favorites">
            <div>ИЗБРАННОЕ</div>
          </Link>  
          <Link to="/cart">
            <div>КОРЗИНА</div>
          </Link>  
            </div>
        </div>
    )
}