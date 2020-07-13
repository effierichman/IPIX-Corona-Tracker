import React from "react";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
// import { Image, Header } from "tailwind-react-ui";
import leo from "./Leo.png";
import covid from "./corona.png";
import Chart from "./components/Chart";
import { fetchData, fetchStatesDailyData, fetchStatesData } from "./api/";

class App extends React.Component {
  state = {
    fetchedData: {},
    // fetchDailyData: {},
    stateData: {},
    stateDataDaily: {},
    state: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // const fetchedDataDaily = await fetchDailyData();
    const fetchedStateData = await fetchStatesData();
    const fetchedStateDataDaily = await fetchStatesDailyData();

    this.setState({ fetchedData });
    this.setState({ stateData: fetchedStateData });
    this.setState({ stateDataDaily: fetchedStateDataDaily });

    console.log(fetchedData);
    console.log(fetchedStateData);
    console.log(fetchedStateDataDaily);
  }

  render() {
    const { fetchedData } = this.state;

    return (
      <div className=" p-4 justify-evenly">
        <div className="flex flex-wrap p-4 justify-evenly justify-center">
          <div className="h-16 w-24">
            <img
              src={leo}
              alt="..."
              className="shadow rounded max-w-full h-auto align-middle border-none"
            />
          </div>

          <div className="font-bold text-3xl bg-white ">
            <div>
              <img
                src={covid}
                alt="..."
                className=" shadow rounded max-w-full h-auto align-middle border-none"
              />
              <div>
                <h1>IPIX Covid-19 Tracker</h1>
              </div>
            </div>
          </div>
        </div>
        <Toggle />
        <Cards fetchedData={fetchedData} />
        <Chart />
      </div>
    );
  }
}

export default App;
