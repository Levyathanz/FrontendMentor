import Report from "./report";
import Rating from "./rating";
import Reviews from "./reviews";

const App =()=>{
    return <section className="container">
        <section className="section-1">
            <Report />
            <Rating />
        </section>
        <section className="section-2">
            <Reviews />
            </section>
    </section>
}

export default App;