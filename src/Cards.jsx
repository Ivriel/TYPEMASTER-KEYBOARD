import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Keyboard1 from "./assets/keyboard1.png";
import Keyboard2 from "./assets/keyboard2.png";
import Keyboard3 from "./assets/keyboard3.png";
import Keyboard4 from "./assets/keyboard4.png";
import Keyboard5 from "./assets/keyboard5.png";
import Keyboard6 from "./assets/keyboard6.png";
import "./Cards.css";
function Cards() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='text-center range-cards px-3 mb-5'  data-aos="fade-up" data-aos-offset="300">
            <h1 className='fw-bold' >Beli Produk Kami</h1>
            <Carousel responsive={responsive} className='mt-5'>
                <div className="card-item" >
                    <img className="product--image" src={Keyboard1} alt="product image"  />
                    <h2 className='fw-bold'>ATOM PRO63 MK912</h2>
                    <p className='fs-3 fw-bold'>Rp 500.000</p>
                    <p>ATOM PRO telah dilengkapi dengan fitur 3 mode konektivitas. Mulai dari koneksi wired menggunakan 
                        kabel, wireless 2.4GHz yang stabil, hingga Bluetooth yang 
                        bisa disambungkan ke 3 device yang berbeda sekaligus.</p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
                <div className="card-item" >
                    <img className="product--image" src={Keyboard2} alt="product image"  />
                    <h2 className='fw-bold'>ROVER 84</h2>
                    <p className='fs-3 fw-bold'>Rp 990.000</p>
                    <p className=' desc-card'>
                    Keyboard mekanik berukuran compact dengan 84 tombol yang dirancang untuk menghemat ruang namun tetap fungsional. Dilengkapi dengan switch mekanik yang memberikan pengalaman mengetik responsif dan pilihan lampu latar RGB yang dapat disesuaikan.
                    </p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
                <div className="card-item">
                    <img className="product--image" src={Keyboard3} alt="product image"  />
                    <h2 className='fw-bold'>MONKA A75</h2>
                    <p className='fs-3 fw-bold'>Rp 1.000.000</p>
                    <p> Keyboard mekanik dengan 75 tombol yang menawarkan desain compact tanpa mengorbankan fungsi utama. Dilengkapi dengan switch mekanik yang responsif, keyboard ini cocok untuk kebutuhan mengetik dan bekerja.</p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
                <div className="card-item" >
                    <img className="product--image" src={Keyboard4} alt="product image"  />
                    <h2 className='fw-bold k4'>Royal Kludge RK M75</h2>
                    <p className='fs-3 fw-bold'>Rp 1.250.000</p>
                    <p>keyboard mekanik compact dengan layout 75%, menawarkan keseimbangan antara portabilitas dan fungsionalitas. Keyboard ini dilengkapi dengan switch mekanik yang responsif serta lampu latar RGB yang dapat dikustomisasi, menjadikannya ideal.</p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
                <div className="card-item">
                    <img className="product--image" src={Keyboard5} alt="product image"  />
                    <h2 className='fw-bold'>K-SNAKE K98</h2>
                    <p className='fs-3 fw-bold'>Rp 250.000</p>
                    <p> keyboard mekanik berukuran full-size dengan 98 tombol yang dirancang untuk memberikan kenyamanan dan fungsionalitas lengkap. Dilengkapi dengan switch mekanik yang responsif, keyboard ini menawarkan pengalaman mengetik yang taktil.</p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
                <div className="card-item">
                    <img className="product--image" src={Keyboard6} alt="product image"  />
                    <h2 className='fw-bold'>LingBao K87</h2>
                    <p className='fs-3 fw-bold'>Rp 620.000</p>
                    <p> keyboard mekanik tenkeyless (TKL) yang memiliki 87 tombol, memberikan desain yang lebih ringkas tanpa numpad, cocok untuk pengguna yang menginginkan efisiensi ruang. Dilengkapi dengan switch mekanik yang responsif.</p>
                    <p>
                        <button className='btn-card'>Beli</button>
                    </p>
                </div>
            </Carousel>
        </div>
    );
}

export default Cards;
