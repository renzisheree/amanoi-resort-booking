import axios from "axios";

class BookingFacade {
  private static instance: BookingFacade;

  private constructor() {}

  public static getInstance(): BookingFacade {
    if (!BookingFacade.instance) {
      BookingFacade.instance = new BookingFacade();
    }
    return BookingFacade.instance;
  }

  public async searchRooms(
    startDate: string,
    endDate: string,
    adults: number,
    children: number
  ): Promise<unknown> {
    try {
      const response = await axios.post(
        `https://api.badenn.me/rooms/booking/search?start=${startDate}&end=${endDate}&adults=${adults}&children=${children}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default BookingFacade;
