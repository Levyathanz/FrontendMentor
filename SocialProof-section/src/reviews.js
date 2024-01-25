import UserReviews from "./user-reviews";

const Reviews=()=>{
    return (UserReviews.map((UserReviews)=>{
        return (
            <section className={"review"+UserReviews.id} key={UserReviews.id}><Reviewcontent {...UserReviews} /></section>
        )
    }))
}

const Reviewcontent =(props)=>{
    const {img,name,status,review}=props;
    return (
        <article className="review-card">
            <div className="user-profile">
            <img src={img} alt="user"/>
            <div>
            <h2>{name}</h2>
            <h3>{status}</h3>
            </div>
            </div>
            <p>{review}</p>
        </article>
    )
}

export default Reviews