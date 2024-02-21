import milkbottles from "./assets/images/desktop/image-gallery-milkbottles.jpg"
import orange from "./assets/images/desktop/image-gallery-orange.jpg"
import cone from "./assets/images/desktop/image-gallery-cone.jpg"
import sugarcubes from "./assets/images/desktop/image-gallery-sugarcubes.jpg"

import facebook from "./assets/images/icon-facebook.svg"
import instagram from "./assets/images/icon-instagram.svg"
import twitter from "./assets/images/icon-twitter.svg"
import pinterest from "./assets/images/icon-pinterest.svg"
const Footer = () => {

    const image_gallery = [
      milkbottles,
      orange,
      cone,
      sugarcubes
    ]

    const social_medias = [
        facebook,
        instagram,
        twitter,
        pinterest
    ]

  return (
    <>
        <section className="image-gallery">
          {image_gallery.map((image,i)=>{
            return <img src={image} alt="image" key={i}/>
          })}
        </section>
        <footer>
            <h1>sunnyside</h1>
            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Projects</li>
            </ul>
            <ul>
            {social_medias.map((platform,i)=>{
              return <img src={platform} alt="" key={i} />
            })}
            </ul>
            <p>Designed by <a href="https://github.com/Levyathanz">"@Levyathan"</a></p>
        </footer>
    </>
  )
}

export default Footer
