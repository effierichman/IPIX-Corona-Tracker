import moment from "moment";

export const processUsDailyCount = (data) => {
  const dataList = data.map(({ positive, death, date }) => ({
    postive: positive,
    death: death,
    date: moment(date.toString()).format("MMM Do"),
  }));
  return dataList.reverse();
};
