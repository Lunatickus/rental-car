import axios from "axios";

axios.defaults.baseURL = "https://65ce0233c715428e8b3fb656.mockapi.io";

export const fetchPage = async (page) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
  return data;
};

export const filterAdverts = async (brand, price, mileageFrom, mileageTo) => {
  const { data } = await axios.get("/adverts");
  let filteredData = [...data];
  if(brand) {
    filteredData = filteredData.filter(advert => advert.make === brand);
  }

  if(price !== 0) {
    filteredData = filteredData.filter(advert => parseInt(advert.rentalPrice.replace('$', '')) <= price);
  }

  if(mileageFrom !== 0 && mileageTo !== 0) {
    filteredData = filteredData.filter(advert => advert.mileage >= mileageFrom && advert.mileage <= mileageTo);
  }

  console.log(filteredData)
  return filteredData;
};
