import axios from "axios";
import { processUsDailyCount, processUsDailyLabels } from "./helper";

const urlUS = "https://covidtracking.com/api/us";
const urlUSDaily = "https://covidtracking.com/api/us/daily";
const urlStates = "https://covidtracking.com/api/states";
const urlStatesDaily = "https://covidtracking.com/api/states/daily";

export const fetchData = async () => {
  try {
    const {
      data: [
        {
          date,
          lastModified,
          positive,
          positiveIncrease,
          negative,
          negativeIncrease,
          hospitalized,
          hospitalizedIncrease,
          death,
          deathIncrease,
          recovered,
        },
      ],
    } = await axios.get(urlUS);

    return {
      date,
      lastModified,
      positive,
      positiveIncrease,
      negative,
      negativeIncrease,
      hospitalized,
      hospitalizedIncrease,
      death,
      deathIncrease,
      recovered,
    };
  } catch (error) {
    return error;
  }
};

export const fetchUSDailyData = async () => {
  try {
    const { data } = await axios.get(urlUSDaily);
    console.log(data);
    return processUsDailyCount(data);
    // console.log(dataList.reverse());
  } catch (error) {}
};

export const fetchUSDailyDataLabel = async () => {
  try {
    const { data } = await axios.get(urlUSDaily);
    console.log(data);
    return processUsDailyLabels(data);
    // console.log(dataList.reverse());
  } catch (error) {}
};

export const fetchStates = async () => {
  try {
    const { data } = await axios.get(urlUSDaily);
  } catch (error) {
    return error;
  }
};

export const fetchStatesData = async () => {
  try {
    const {
      data: [
        {
          date,
          lastUpdateEt,
          positive,
          positiveIncrease,
          negative,
          negativeIncrease,
          hospitalized,
          hospitalizedIncrease,
          death,
          deathIncrease,
          recovered,
        },
      ],
    } = await axios.get(urlStates);

    return {
      date,
      lastUpdateEt,
      positive,
      positiveIncrease,
      negative,
      negativeIncrease,
      hospitalized,
      hospitalizedIncrease,
      death,
      deathIncrease,
      recovered,
    };
  } catch (error) {
    return error;
  }
};

export const fetchStatesDailyData = async () => {
  try {
    const {
      data: [
        {
          date,
          lastUpdateEt,
          positive,
          positiveIncrease,
          negative,
          negativeIncrease,
          hospitalized,
          hospitalizedIncrease,
          death,
          deathIncrease,
          recovered,
        },
      ],
    } = await axios.get(urlStatesDaily);

    return {
      date,
      lastUpdateEt,
      positive,
      positiveIncrease,
      negative,
      negativeIncrease,
      hospitalized,
      hospitalizedIncrease,
      death,
      deathIncrease,
      recovered,
    };
  } catch (error) {
    return error;
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get({ urlUSDaily });
//     // console.log(data);
//     return data.map(
//       ({
//         dateCheck: date,
//         deaths,
//         positive,
//         negative,
//         hospitalized,
//         recovered,
//       }) => ({
//         deaths,
//         date,
//         positive,
//         negative,
//         hospitalized,
//         recovered,
//       })
//     );
//   } catch (error) {
//     return error;
//   }
// };
