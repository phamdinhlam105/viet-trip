const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}search`;


export const searchByQuery = async (query: string) => {
   const request = {
      keyword:query
    }
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(request)
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
