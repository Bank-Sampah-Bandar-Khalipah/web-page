const HeroEdu = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='mt-10 text-center space-y-10'>
            <h1 className='text-3xl md:text-5xl font-bold'>Edukasi Sampah untuk Masyarakat</h1>
            <p>Dengan edukasi dan pengajaran yang baik serta kesadaran dan dukungan masyarakat, kita dapat menjaga lingkungan <br />dan menciptakan masa depan yang lebih bak.</p>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                    src="https://www.youtube.com/embed/r6X5SRp2hvA"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    }}
                ></iframe>
            </div>
        </div>
    </section>
  )
}

export default HeroEdu