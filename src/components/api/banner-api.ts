const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}banner`;

export const getTopBanner = async () => {
  try {
    const response = await fetch(`${API_URL}/top`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

export const getPromotionBanner = async () => {
  try {
    const response = await fetch(`${API_URL}/promotion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
