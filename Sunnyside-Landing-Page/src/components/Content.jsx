

import iconarrow from '../assets/images/icon-arrow-down.svg'
import transform from '../assets/images/desktop/image-transform.jpg';
import standout from '../assets/images/desktop/image-stand-out.jpg'


const Content = () => {
  return (
    <main>
      <figure>
        <div className='creative'>
            <h1>WE ARE CREATIVES</h1>
            <img src={iconarrow} alt='arrow-down'/>
        </div>
      </figure>
      <section className='section-1'>
        <article className='article-1'> 
            <h2>Transform your brand</h2>
            <p>  We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button>learn more</button>
        </article>
        <img src={transform} alt='transform'/>
      </section>
      <section className='section-2'>
        <img src={standout} alt='transform'/>
        <article className='article-2'>
            <h2>Stand out to the right audience</h2>
            <p>   Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button>learn more</button>
        </article>
      </section>
      <section className='section-3'>
        <article className='article-3'>
            <div>
              <h3>Graphic design</h3>  
              <p>  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
        </article>
        <article className='article-4'>
            <div>
              <h3>Photography</h3>
              <p> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </article>
      </section>
    </main>
  )
}

export default Content
