import Keyboard from "./assets/image-keyboard.jpg";
import Computer from "./assets/computer.svg"
import "./Hero.css";
import Bluetooth from "./assets/bluetooth.svg"
import Battery from "./assets/battery.svg"

function Hero() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} >
      <section id="hero" className="d-flex mt-4 justify-content-between distance-hero height">
        <div className="description-hero">
          <h1 className="fw-bold font-header" data-aos="fade-up" >TYPEMASTER <br />
            KEYBOARD
          </h1>
          <p className="text-hero mt-4 fs-6" data-aos="fade-up" data-aos-delay="1000">Dapatkan pengalaman terbaik anda dengan Typemaster Keyboard. <br />
          Tingkatkan  performa dan kenyamanan anda dalam bekerja.
          </p>
          <div className="d-flex gap-4 align-items-center mt-4">
            <button className="border-0 px-3 py-2 rounded button-hero" data-aos="fade-up" data-aos-delay="2000">
              <a href="" className="text-white no-underline text-white fw-bold">Pesan Sekarang</a>
            </button>
            <a href="#hero-detail" className="text-hero-bold no-underline fw-bold" data-aos="fade-up" data-aos-delay="2100">Selengkapnya</a> 
          </div>
        </div>
        <div>
          <img src={Keyboard} alt="Typemaster Keyboard" className="image-hero rounded" data-aos="fade" data-aos-delay="2200"/>
        </div>
      </section>
      <section id="hero-detail">
        <h1 className="fw-bold text-center" data-aos="fade-up">Keunggulan Produk Kami</h1>
        <p className="text-hero text-center mt-4"  data-aos="fade-up" data-aos-delay="500">Nikmati fitur-fitur unggulan produk Typemaster yang dirancang khusus untuk memberikan <br />
        kenyamaman saat anda bekerja. 
         </p>
        <div className="d-flex justify-content-center gap-detail  mt-5">
           <div data-aos="fade" data-aos-delay="1000">
              <img src={Computer} alt="" className="hero-icon"/>
              <h1 className="fs-5 fw-bold mt-4">KOMPATIBILITAS <br />
                TINGGI
              </h1>
              <p className="mt-3 desc-detail text-hero">Mudah digunakan dan berfungsi baik  <br />
              dengan  semua merek komputer, tidak <br />
              diperlukan instalasi atau driver.
              </p>
           </div>
           <div data-aos="fade" data-aos-delay="1300">
           <img src={Bluetooth} alt="" className="hero-icon-bluetooth "/>
              <h1 className="fs-5 fw-bold mt-4">DILENGKAPI DENGAN <br />
                BLUETOOTH
              </h1>
              <p className="mt-3 desc-detail text-hero">  Memungkinkan Anda 
                untuk terhubung tanpa kabel ke <br /> berbagai perangkat  dengan mudah.
                Nikmati kebebasan <br /> bergerak  dalam 
                bekerja tanpa terhalang oleh kabel
              </p>
           </div>
           <div data-aos="fade" data-aos-delay="1800">
           <img src={Battery} alt="" className="hero-icon-battery "/>
              <h1 className="fs-5 fw-bold mt-4">KAPASITAS BATERAI <br />
                TINGGI
              </h1>
              <p className="mt-3 desc-detail text-hero">Mudah digunakan dan berfungsi baik  <br />
              dengan  semua merek komputer, tidak <br />
              diperlukan instalasi atau driver.
              </p>
           </div>
        </div>
      </section>
      <section className="text-center range-about">
        <h1 className="fw-bold" data-aos="fade-up">Tentang Kami</h1>
        <p className="text-hero mt-5" data-aos="fade-up" data-aos-delay="500">Typemaster adalah sebuah UMKM yang berfokus pada penjualan keyboard berkualitas tinggi. <br />
          Typemaster menawarkan berbagai jenis keyboard yang dirancang khusus untuk memenuhi kebutuhan produktivitas <br />
          dan kenyamanan pengguna, baik untuk keperluan mengetik sehari-hari maupun untuk para penggemar gaming. <br />
          Dengan desain ergonomis dan pilihan keycaps yang beragam, Typemaster hadir <br />
          sebagai solusi keyboard personal yang stylish dan fungsional.</p>
      </section>
    </div>
  );
}

export default Hero;
