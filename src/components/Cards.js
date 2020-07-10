import React from "react";
import CountUp from "react-countup";

// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Flex,
//   Col,
//   Row,
//   Container,
//   Image,
//   FillButton,
//   OutlineButton,
//   Box,
// } from "tailwind-react-ui";

const Cards = ({
  fetchedData: {
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
}) => {
  if (!positive) {
    return "Loading...";
  }
  // console.log(positive);

  return (
    <div className="flex flex-wrap p-4 justify-evenly  ">
      <div className="p-4">
        <div className=" h-64 w-64 max-w-sm border-8 border-red-600 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Positive with Covid-19</div>
            <p className=" font-bold text-gray-700 text-base">Positive Cases</p>
            <CountUp start={0} end={positive} duration={2.75} separator="," />
            <p className="text-black-700 text-base"></p>
            <p className="text-gray-700 text-base">Increase in Cases</p>
            <p className="text-black-700 text-base">
              <CountUp
                start={0}
                end={positiveIncrease}
                duration={2.75}
                separator=","
              />
            </p>

            <p className="text-gray-700 text-base">Last Updated</p>
            <p className="text-black-700 text-base">
              {new Date(lastModified).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="h-64 w-64 max-w-sm border-8 border-blue-700 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Negative from Covid-19</div>
            <p className="text-gray-700 text-base">Negative Cases</p>
            <p className="text-black-700 text-base">
              <CountUp start={0} end={negative} duration={2.75} separator="," />
            </p>
            <p className="text-gray-700 text-base">Increase in Negatives</p>
            <p className="text-black-700 text-base">
              <CountUp
                start={0}
                end={negativeIncrease}
                duration={2.75}
                separator=","
              />
            </p>
            <p className="text-gray-700 text-base">Last Updated</p>
            <p className="text-black-700 text-base">
              {new Date(lastModified).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className=" h-64 w-64 max-w-sm border-8 border-green-600 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">
              Recovered from Covid-19
            </div>
            <p className="text-gray-700 text-base">Recovered Cases</p>
            <p className="text-black-700 text-base">
              <CountUp
                start={0}
                end={recovered}
                duration={2.75}
                separator=","
              />
            </p>
            <p className="text-gray-700 text-base">Last Updated</p>
            <p className="text-black-700 text-base">
              {new Date(lastModified).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="h-64 w-64 max-w-sm border-8 border-black rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Deaths from Covid-19</div>
            <p className="text-gray-700 text-base">Deaths </p>
            <p className="text-black-700 text-base">
              <CountUp start={0} end={death} duration={2.75} separator="," />
            </p>
            <p className="text-gray-700 text-base">Increase in Deaths</p>
            <p className="text-black-700 text-base">
              <CountUp
                start={0}
                end={deathIncrease}
                duration={2.75}
                separator=","
              />
            </p>
            <p className="text-gray-700 text-base">Last Updated</p>
            <p className="text-black-700 text-base">
              {new Date(lastModified).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
