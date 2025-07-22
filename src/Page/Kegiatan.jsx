import HeroKegiatan from '../Components/KegiatanPage/HeroKegiatan'
import KegiatanCard from '../Components/KegiatanPage/KegiatanCard'
import Navbar from '../Components/Layouts/Navbar'

const Kegiatan = () => {
  return (
    <div>
      <Navbar />
      <HeroKegiatan />
      <KegiatanCard />
    </div>
  )
}

export default Kegiatan