import React from 'react'
import CountUp from 'react-countup'
import Title from '../Ui/Title'

const TargetHome = () => {
  const target = [
    {
      id: 1,
      total: 8,
      desc: 'Kepala Keluarga Aktif',
      suffix: '+',
    },
    {
      id: 2,
      total: 2,
      desc: 'RT',
    },
    {
      id: 3,
      total: 80,
      desc: 'Partisipasi Warga',
      suffix: '%',
    },
    {
      id: 4,
      total: 100,
      desc: 'Setoran Sampah Per Bulan',
      suffix: 'kg',
    },
  ]

  const sampah = [
    {id:1, total:100, desc:"Sampah Kertas", suffix:"kg+"},
    {id:2, total:20, desc:"Sampah Kardus", suffix:"kg+"},
  ]

  return (
    <section className='container mx-auto section-spacing'>
      <div>
        <Title>Pencapaian Kami</Title>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-5'>
          {target.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center gap-2 text-4xl font-semibold'
            >
              <CountUp
                end={item.total}
                duration={2}
                suffix={item.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
              <p className='text-center text-base font-normal'>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className='mt-10 text-center text-xl md:text-3xl font-semibold'>Total Sampah Terkumpul</h2>
        <div className='grid grid-cols-2'>
            {sampah.map((item) => (
              <div
                key={item.id}
                className='flex flex-col items-center gap-2 text-4xl font-semibold mt-5'
              >
                <CountUp
                  end={item.total}
                  duration={2}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <p className='text-center text-base font-normal'>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default TargetHome
