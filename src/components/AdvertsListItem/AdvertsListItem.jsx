export const AdvertListItem = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <p>
        {item.make} {item.model}, {item.year}
      </p>
      <p>{item.rentalPrice}</p>
      <p>{item.address}</p>
      <button type="button">Learn more</button>
    </div>
  );
};
