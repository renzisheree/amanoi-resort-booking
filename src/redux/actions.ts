interface dataProps {
  room: string;
  startDate: string;
  endDate: string;
  adult: string;
  children: string;
}
export const setData = (data: dataProps) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};
