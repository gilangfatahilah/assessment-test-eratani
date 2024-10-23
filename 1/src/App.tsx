import React from 'react';
import Header from './components/header';
import HeroSection from './components/hero';
import Footer from './components/footer';
import BackToTop from './components/back-to-top';
import ActivitySection from './components/activity-section';

const MainLayout: React.FC = () => {
  const activities = [
    {
      image: '/photo-1.png',
      date: '8 Agustus 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Pemberian Edukasi Kepada Petani Binaan Eratani di Cantigi',
      description: 'Pada kesempatan ini, Eratani mengunjungi salah satu kecamatan di kabupaten Indramayu yaitu Cantigi untuk memberikan edukasi. Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama.'
    },
    {
      image: '/photo-2.png',
      date: '7 September 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Sosialisasi dari Eratani Untuk Petani Binaan di Indramayu',
      description: 'Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama'
    },
    {
      image: '/photo-3.png',
      date: '16 September 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Perjanjian Kerjasama dengan PT Pupuk Indonesia Pangan di Karawang',
      description: 'Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama'
    },
    {
      image: '/photo-4.png',
      date: '16 September 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Perjanjian Kerjasama Distribusi Gabah Eratani dan BULOG',
      description: 'Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama'
    },
    {
      image: '/photo-5.png',
      date: '16 September 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Kunjungan Eratani ke Penggilingan Gabah di Yogyakarta',
      description: 'Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama'
    },
    {
      image: '/photo-6.png',
      date: '16 September 2021',
      publishedBy: 'Tim Redaksi',
      title: 'Hari Tani Nasional 2021: Pemberian Apresiasi Secara Simbolis Kepada Petani Binaan',
      description: 'Kegiatan dimulai dengan diskusi ringan dimana tim Eratani mengunjungi rumah salah satu Gapoktan yaitu Suwadi untuk mendengarkan keluh kesah para petani di Cantigi dengan maksud mencari solusi bersama'
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <ActivitySection activities={activities} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
