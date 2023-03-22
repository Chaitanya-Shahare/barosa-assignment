import "./SearchResultItem.scss";

interface IProps {
  imgSrc: string;
  imgAlt: string;
  brand: string;
  name: string;
  price: number;
  seller: string;
}

const SearchResultItem = (Props: IProps) => {
  return (
    <div className="search-result-item">
      <div className="item">
        <div className="item__img">
          <img src={Props.imgSrc} alt={Props.imgAlt}/>
        </div>

        <p className="item__brand">{Props.brand}</p>
        <p className="item__name">{Props.name}</p>
        <p className="item__price">${Props.price.toLocaleString()}</p>
        <p className="item__seller">{Props.seller}</p>
      </div>
    </div>
  );
};

export default SearchResultItem;
