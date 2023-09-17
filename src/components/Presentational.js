import { Link } from "react-router-dom";

function Presentational(props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-10">
      {props.data.length === 0 ? ("") : (
        props.data.map((item, i) => {
          return (
            <article 
              key={i} 
              className="text-center card shadow-md p-10 rounded duration-300 transition hover:scale-110 hover:shadow-xl">  {/* Aquí agregué "hover:shadow-lg" */}
              <h2 className="text-xl text-center overflow-hidden text-ellipsis truncate mb-8">{item.title}</h2>
              <img src={item.image} alt={item.title} className="h-[150px] w-full object-contain" />
              <h2 className="text-xl font-bold text-center pt-8 text-cyan-800">${item.price}</h2>
              <Link to={`/item/${item.id}`}>
                <button className="block mx-auto mt-8 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
                  Detalle
                </button>
              </Link>
            </article>
          );
        })
      )}
    </section>
  )
}

export default Presentational


