import { carprops, filterprops } from "../types/index";
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '10382ba40emshc9b2bbbb2750e74p1c3857jsn0d59f204bfd4',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchcars(Filters: filterprops) {
  const { manufacturer, year, fuel, limit, model } = Filters;
  const headers = {
    "X-RapidAPI-Key": "10382ba40emshc9b2bbbb2750e74p1c3857jsn0d59f204bfd4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export const generateCarImageUrl = (car: carprops, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/get-image");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", ` ${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
export const updatesearchparams=(type:string,value:string)=>{
  const searchParams =new URLSearchParams(window.location.search)
  searchParams.set(type,value)
const newpathname=  `${window.location.pathname}?${searchParams.toString()}`
return newpathname;

}