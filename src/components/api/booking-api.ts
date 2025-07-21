const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}booking`

export type BookingRequest= {
    customerName:string;
    phoneNumber:string;
    note?:string;
    numberOfPerson:number;
    bookingDate:string;
    tourId:string[];
    hotelId:string[];
    comboId:string[];
    email?:string;
}

export const newBooking = async(request: BookingRequest)=>{
     try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch {
    return null;
  }
}