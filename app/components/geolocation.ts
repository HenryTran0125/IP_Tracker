const apiKey = "at_GfcP6MKgLdcsPP8FDiaim5Li20OvZ";

function success(position: any) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}

function error(err: any) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const currPosition = navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);

export async function testAPI(domain?: string) {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}&ipAddress=8.8.8.8&domain=${domain}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const data = await response.json(); // Chờ xử lý JSON từ phản hồi

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
