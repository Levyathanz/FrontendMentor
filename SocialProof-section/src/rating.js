const star = <img src="./images/icon-star.svg" alt="star" />;

const Rating=()=>{
    return (
        <article className="ratings">
        <p className="rating-box rating-1"><Stars ratedby="Rated 5 Stars in Review"/></p>
        <p className="rating-box rating-2"><Stars ratedby="Rated 5 Stars in Report Guru"/></p>
        <p className="rating-box rating-3"><Stars ratedby="Stars in BestTech"/></p>
        </article>
    )
}

const Stars = (probs) => {
    const {ratedby} =probs;
  return (
    <>
    <span>
      {Array.from({ length: 5 }, (_,index) => (
        <span key={index}>{star}</span>
      ))}</span>
    <span>{ratedby}</span>
    </>)
};

export default Rating;
