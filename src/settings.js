export const localURL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:8080/sys"
    : "digitaloceanserver";
export const hotelList = "/api/info/HotelList/";
