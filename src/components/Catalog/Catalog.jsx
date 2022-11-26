import { Link } from 'react-router-dom';

export default function Catalog() {
    return(
        <div>
           <p>Catalog</p>
           <ul>
            <Link to="/accessories">
            <li>Аксессуары</li>
            </Link>
            <Link to="/cardigans">
            <li>Кардиганы</li>
            </Link>
            <Link to="/switers">
            <li>Свитера</li>
            </Link>
           </ul>
        </div>
       
        
    )
}