import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { fadeIn, scale } from '../Utils/Motion'
import { textVariant } from '../Utils/Motion'
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi"
import Button from "../Ui/Button";

const question = [
    {
        id: 1,
        question: "Apa itu bank sampah?",
        answer: "Bank sampah adalah lembaga yang mengelola sampah dengan cara mengumpulkan, memilah, dan mendaur ulang. Tujuannya adalah untuk mengurangi limbah dan meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah. Dengan berpartisipasi, Anda turut serta dalam menjaga lingkungan.",
    },
    {
        id: 2,
        question: "Mengapa penting memilah sampah?",
        answer: "Memilah sampah sangat penting untuk memudahkan proses daur ulang. Dengan memilah, sampah organik dan anorganik dapat diproses dengan cara yang tepat. Hal ini juga membantu mengurangi volume sampah yang masuk ke tempat pembuangan akhir.",
    },
    {
        id: 3,
        question: "Bagaimana cara berpartisipasi?",
        answer: "Anda dapat berpartisipasi dengan mengumpulkan sampah yang dapat didaur ulang dan membawanya ke bank sampah terdekat. Selain itu, Anda juga bisa mengikuti kegiatan edukasi yang kami adakan. Setiap kontribusi Anda sangat berarti untuk lingkungan.",
    },
        {
        id: 4,
        question: "Apa manfaat bank sampah?",
        answer: "Bank sampah memberikan banyak manfaat, seperti mengurangi limbah, meningkatkan kesadaran lingkungan, dan menciptakan lapangan kerja. Selain itu, masyarakat dapat memperoleh penghasilan tambahan dari hasil penjualan sampah yang didaur ulang. Ini adalah langkah positif untuk lingkungan dan ekonomi.",
    },
    {
        id: 5,
        question: "Apa itu sampah organik?",
        answer: "Sampah organik adalah limbah yang berasal dari makhluk hidup, seperti sisa makanan dan daun. Sampah ini dapat terurai secara alami dan dapat digunakan sebagai kompos. Mengelola sampah organik dengan baik dapat meningkatkan kesuburan tanah.",
    },
]

const Faq = () => {
    const [activeQuestion,
    setActiveQuestion] = React.useState(null)

  return (
    <section className='container mx-auto section-spacing'>   
        <div className="space-y-5 md:space-y-10">
            <h1 className='font-bold text-4xl text-center'>
                FAQ      
            </h1>

            <p className="text-center">
                Find answers to frequently asked question about Circularity Center USU
            </p>

            <div className="">
            {[question].map((group, i) => (
                <div key={i} className="space-y-4 md:mx-20 lg:mx-30">
                {group.map((q) => (
                    <div key={q.id} className="border-b overflow-hidden">
                    <button
                        className="w-full text-left text-base p-4 flex justify-between items-center font-semibold"
                        onClick={() =>
                        setActiveQuestion(activeQuestion === q.id ? null : q.id)
                        }
                    >
                        {q.question}
                        <motion.span
                        key={activeQuestion === q.id ? "close" : "plus"}
                        initial={{ rotate: activeQuestion === q.id ? -90 : 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl"
                        >
                        {activeQuestion === q.id ? <IoClose className="size-4 lg:size-5"/> : <FaPlus className="text-xs lg:text-base"/>}
                        </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                        {activeQuestion === q.id && (
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-4 pb-4 text-sm text-gray-600"
                        >
                            <p className="text-justify">{q.answer}</p>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                ))}
                </div>
            ))}
            </div>

            <div className="flex flex-col items-center gap-4">
                <h2>Masih ada pertanyaan?</h2>
                <p>Hubungi Kami Untuk Informasi Selanjutnya</p>
                <Button>Kontak</Button>
            </div>
        </div>

    </section>
  )
}

export default Faq