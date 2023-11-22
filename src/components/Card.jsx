import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
const Card = ({showData, loadingData , weather, forecast}) => {
    if(loadingData) {
        return <Spinner/>
    }
    if(showData === true){
    return(
        <>
      <div className="container">
      <section>
        <img src="https://www.pexels.com/es-es/foto/montana-y-cielo-azul-y-verde-3617500/" alt="" />
        <h3>fg</h3>
        <p>df</p>
        <h2>sd</h2>
        <p>df</p>
      </section>
      </div>
      </>
    );
    } else {
        return(
            <>
            <h2>Sin datos</h2>
            </>
        )
    }
}
export default Card;