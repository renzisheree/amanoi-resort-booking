import axios from "axios";

class BookingSingleton {
  private static instance: BookingSingleton;

  private constructor() {}
  //single ton
  public static getInstance(): BookingSingleton {
    if (!BookingSingleton.instance) {
      BookingSingleton.instance = new BookingSingleton();
    }
    return BookingSingleton.instance;
  }

  public async searchRooms(
    startDate: string,
    endDate: string,
    adults: number,
    children: number
  ): Promise<unknown> {
    try {
      const response = await axios.post(
        `http://localhost:3000/rooms/booking/search?start=${startDate}&end=${endDate}&adults=${adults}&children=${children}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default BookingSingleton;
