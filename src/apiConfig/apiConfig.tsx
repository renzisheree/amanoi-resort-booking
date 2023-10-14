//all room   : http://localhost:3000/rooms
//get room by type params :  http://localhost:3000/rooms/residences
//get room by slug  : http://localhost:3000/rooms/residencies/biet-thu-4-phong-ngu  (name)

interface Room {}
interface RoomResponse {
  results: Room[];
}

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
const apiEndpoint = "http://localhost:3000";
// const apiGetRoomType = "http://localhost:3000/rooms/residences";
export const amanoiAPI = {
  getRoomList: (): Promise<RoomResponse> => {
    return fetcher(`${apiEndpoint}/rooms`);
  },
};

export const tmdbAPI = {
  getMovieList: async () => {
    return fetcher(`${apiEndpoint}/rooms`);
  },
};
