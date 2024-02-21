import emily from '../assets/images/image-emily.jpg'
import thomas from '../assets/images/image-thomas.jpg'
import jennie from '../assets/images/image-jennie.jpg'


const reviews =[
    {
        image : emily,
        review : " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name:"Emily R.",
        role:"Marketing Director"
    },
    {
        image:thomas,
        review : "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name:"Thomas S.",
        role:"Chief Operating Officer"
    },
    {
        image:jennie,
        review : "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name:"Jennie F.",
        role:"Business Owner"
    }
]

const Reviews = () =>{
   return reviews.map((reviews,i)=>{
         return <ReviewsMap {...reviews} key={i}/>
    })
}

const ReviewsMap = (props) => { 
    const {image,review,name,role} = props;
    return(
    <section>
        <img className='image' src={image} alt="clients"/>
        <p className='review'>{review}</p>
        <h4 className='name'>{name}</h4>
        <p className='role'>{role}</p>
    </section>
    )
}

export default Reviews