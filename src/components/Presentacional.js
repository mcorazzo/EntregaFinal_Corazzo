import { Link } from "react-router-dom";
function Presentacional(props) {
  return (
    <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {props.data.length === 0 ? (
        <p> Cargando </p>
      ) : (
        props.data.map((item, i) => {
          return (
            <article
              key={i}
              className="card shadow-md p-4 rounded duration-300 transition hover:scale-125"
            >
              <h2 className="text-xl text-center">{item.title}</h2>
              <img src={item.image} alt={item.title} className="pt-11" />
              <h2 className="text-xl text-center pt-10">${item.price}</h2>
              <Link to={`/item/${item.id}`}>
                <button className="block mx-auto mt-3 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                  Detalle
                </button>
              </Link>
            </article>
          );
        })
      )}
    </section>
  );
}

export default Presentacional;

