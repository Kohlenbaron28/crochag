import './Switers.scss';
import catBtn from '../img/catBtn.png';
import left from '../img/arr2.png';
import right from '../img/arr1.png';

export default function SwMain() {
    return(
        <div className='sw_container'>
            <div className='sw-header'>
                <img src={left} alt="arr" />
                <p>СВИТЕРЫ</p>
                <img src={right} alt="arr" />
            </div>
        
        <div className='sw-main'>
            <div className='sw-main-left'>
                <div className='sw-main-left_title'>О продукте:</div>
                <div className='sw-main-left_content'>Свитеры вяжутся из пряжи, состоящей на 100% из шерсти. Производится вся нужная обработка изделия. Полностью ручная работа, авторские дизайны. Любовь к клиентам</div>
            </div>
            <div className='sw-main-left'></div>
        </div>
        <footer>
            <div>Состав: 100% натуральная пряжа</div>
            <div><img src={catBtn} alt="btn" /></div>
        </footer>
        </div>
    )
}