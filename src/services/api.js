import axios from "axios";

axios.defaults.baseURL = "https://65ce0233c715428e8b3fb656.mockapi.io";

export const fetchPage = async (page) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
  return data;
};

export const filterAdverts = async (brand, price, from, to) => {
  const { data } = await axios.get("/adverts");
  let filteredData = [...data];
  console.log(brand, price, from, to)
  if(brand) {
    filteredData = filteredData.filter(advert => advert.make === brand);
  }

  if(price !== 0) {
    filteredData = filteredData.filter(advert => parseInt(advert.rentalPrice.replace('$', '')) <= price);
  }

  if(from !== 0 && to !== 0) {
    filteredData = filteredData.filter(advert => advert.mileage >= from && advert.mileage <= to);
  }

  console.log(filteredData)
  return filteredData;
};
