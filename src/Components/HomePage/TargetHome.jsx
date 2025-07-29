import React from 'react'
import CountUp from 'react-countup'

const TargetHome = () => {
  const target = [
    {
      id: 1,
      total: 20,
      desc: 'Kepala Keluarga Aktif',
      suffix: '+',
    },
    {
      id: 2,
      total: 10,
      desc: 'Nasabah Terdaftar',
      suffix: '+',
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
    {id:1, total:200, desc:"Sampah Plastik", suffix:"+"},
    {id:2, total:100, desc:"Sampah Kertas", suffix:"+"},
    {id:3, total:100, desc:"Sampah Kardus", suffix:"+"},
  ]

  return (
    <section className='container mx-auto section-spacing'>
      <div>
        <h1 className='text-4xl font-bold text-center'>Pencapaian Kami</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-5'>
          {target.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center gap-2 text-5xl font-semibold'
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

        <h1 className='mt-10 text-center text-3xl font-semibold'>Total Sampah Terkumpul</h1>
        <div className='grid grid-cols-3'>
            {sampah.map((item) => (
              <div
                key={item.id}
                className='flex flex-col items-center gap-2 text-5xl font-semibold mt-5'
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
