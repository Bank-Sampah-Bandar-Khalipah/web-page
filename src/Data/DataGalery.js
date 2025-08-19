import Img1 from '../assets/images/manfaatpage/bandarkhalipah.webp'
import Img2 from '../assets/images/manfaatpage/bandarkhalipah2.webp'
import Img3 from '../assets/images/manfaatpage/bandarkhalipah3.webp'
import Img4 from '../assets/images/manfaatpage/bandarkhalipah4.webp'
import Img5 from '../assets/images/manfaatpage/bandarkhalipah5.webp'
import Img6 from '../assets/images/partisipasi1.webp'
import Img7 from '../assets/images/partisipasi2.webp'
import Img8 from '../assets/images/kegiatan2.webp'
import Img9 from '../assets/images/kegiatan3.webp'
import Img10 from '../assets/images/proses-sampah.webp'
import Img11 from '../assets/images/proses-nimbang1.webp'
import Img12 from '../assets/images/tari-sambutan.webp'
import Img13 from '../assets/images/posko-banksampah.webp'
import Img14 from '../assets/images/proses-sampah1.webp'

const dataGalery = () => {
    const kolom1 = [
        {id:1, img: Img13},
        {id:2, img: Img2},
        {id:3, img: Img3},
    ]

    const kolom2 = [
        {id:4, img: Img4},
        {id:5, img: Img5},
        {id:6, img: Img6},
        {id:7, img: Img7},
    ]

    const kolom3 = [
        {id:8, img: Img8},
        {id:9, img: Img12},
        {id:10, img: Img10},
    ]

    return {kolom1, kolom2, kolom3}
}

export default dataGalery