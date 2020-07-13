import moment from "moment";

export const processUsDailyCount = (data) => {
  const dataList = data.map(({ positive, death, date }) => ({
    postive: positive,
    death: death,
    date: moment(date.toString()).format("MMM Do"),
  }));
  return dataList.reverse();
};

export const processUsDailyLabels = (data) => {
  const dataList = data.map(({ date }, index) => ({
    date:
      index === 0 || index % 6 === 0
        ? moment(date.toString()).format("MMM Do")
        : "",
  }));
  return dataList.reverse();
};

export const getDailyDif = (data) => {
  let newDailyCounts = [];

  for (let i = 1; i < data.length; i++) {
    const todaysData = data[i];
    const yestData = data[i - 1];

    const todaysCounts = {
      date: todaysData.date,
      death: todaysData.death - yestData.death,
      postive: todaysData.postive - yestData.postive,
    };
    newDailyCounts.push(todaysCounts);
  }
  return newDailyCounts;
};
