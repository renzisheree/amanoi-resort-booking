//all room   : https://api.badenn.me/rooms
//get room by type params :  https://api.badenn.me/rooms/residences
//get room by slug  : https://api.badenn.me/rooms/residencies/biet-thu-4-phong-ngu  (name)

interface Room {}
interface RoomResponse {
  results: Room[];
}

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
const apiEndpoint = "https://api.badenn.me";
// const apiGetRoomType = "https://api.badenn.me/rooms/residences";
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
