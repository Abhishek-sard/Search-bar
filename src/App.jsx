function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan="2">
        {category}

      </th>
    </tr>
  );
}
function ProductRow({product}){
  const name = product.stocked ? product.name:
  <span style={{color: 'red'}}>
    {product.name}
  </span>;

  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({products}){
  const rows = [];
  let lastCategory = null;

  product.forEach((product)){
    if (product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow key={product.category}
        key={product.category}/>
      );
    }
    rows.push(
      <ProductRow key={product.name}
      key={product.name}/>
    );
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  function SearchBar(){
    return(
      <form >
        <input type="text" placeholder="Search....." />
        <label >
          <input type="checkbox"/>
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  function FilterableProductTable({products}){
    return(
      <div>
        <SearchBar/>
        <ProductTable products={products}/>
      </div>
    )
  }
}