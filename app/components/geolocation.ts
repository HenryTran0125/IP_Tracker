const apiKey = "at_GfcP6MKgLdcsPP8FDiaim5Li20OvZ";
const apiBigData = "bdc_06dded7af18448d0a739dbd84b03160e";

function getPosition(position: any) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}

function getErrorPosition(error: any) {
  console.error("Error Position: ", error);
}

export function getUserPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition, getErrorPosition);
  }
}

getUserPosition();

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

export async function reverseGeocoding(lat: number, lng: number) {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=${apiBigData}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
