function Item({ product }) {
  return (
    <div className="border rounded p-4 m-2 shadow hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
      <h3 className="text-lg font-bold">{product.title}</h3>
    </div>
  );
}

export default Item