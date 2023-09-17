import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList;