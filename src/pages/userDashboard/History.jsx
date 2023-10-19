import React, { useEffect, useState } from "react";
import RentalTable from "../../components/userDashboardComponents/Histoy/HistoryTable";
import { months } from "../../utils/calender_generator";
import { years } from "../../utils/dropdowncontents";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";
import { BeatLoader } from "react-spinners";
import { baseURLGeneral } from "../../utils";
export default function History() {
  const [month, setMonth] = React.useState(months[new Date().getMonth()]);
  const [data, setData] = React.useState();
  const [carDetails, setCarDetails] = React.useState([]);
  const [year, setYear] = React.useState(years[0]);
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth0();
  const [showMessageBox, setShowMessageBox] = React.useState(false);
  const [activeUserEmail, setActiveUserEmail] = React.useState("");

  async function getData() {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/get-user-history?id=${user.sub.slice(
          6
        )}`,
        method: "get",
      });
      if (response?.data?.status) {
        console.log("history", response?.data?.data);
        if (response?.data?.data.length > 0) {
          response?.data?.data.map((item) => {
            getCar(item.carId);
          });
        }
        setData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured \n Try again");
    } finally {
      setLoading(false);
    }
  }

  async function getCar(id) {
    try {
      // setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/specific-car?id=${id}`,
        method: "get",
      });

      if (response?.data?.status) {
        console.log("response?.data?.data", response?.data?.data);
        setCarDetails((prevCarDetails) => [
          ...prevCarDetails,
          response?.data?.data,
        ]);
        // dispatch(setData(response?.data?.data));
      } else {
        // nav("/dashboard");
      }
    } catch (error) {
      console.log(error);
      // toast.error("Error occured");
    } finally {
      // setLoading(false);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  // const mock_list = [
  //   {
  //     id: "#1394",
  //     user: "John Doe",
  //     status: "Completed",
  //     date: ["15th July", "ongoing"],
  //     car: "Mercedes-Benz S-Class",
  //     amount: 2567.89,
  //   },
  //   {
  //     id: "#1330",
  //     user: "Elon Musk",
  //     status: "On going",
  //     date: ["2nd August", "10th August"],
  //     car: "Tesla Model S",
  //     amount: 9876.54,
  //   },
  //   {
  //     id: "#1551",
  //     user: "Jane Smith",
  //     status: "Completed",
  //     date: ["7th June", "14th June"],
  //     car: "BMW 5 Series",
  //     amount: 4321.98,
  //   },
  //   {
  //     id: "#1423",
  //     user: "Mark Johnson",
  //     status: "On going",
  //     date: ["18th September", "ongoing"],
  //     car: "Audi A8",
  //     amount: 7532.1,
  //   },
  //   {
  //     id: "#1654",
  //     user: "Sarah Wilson",
  //     status: "Completed",
  //     date: ["12th May", "19th May"],
  //     car: "Lamborghini Huracan",
  //     amount: 11111.11,
  //   },
  //   {
  //     id: "#1765",
  //     user: "Robert Davis",
  //     status: "On going",
  //     date: ["30th October", "ongoing"],
  //     car: "Ferrari 488 GTB",
  //     amount: 8765.43,
  //   },
  //   {
  //     id: "#1890",
  //     user: "Emily Brown",
  //     status: "Completed",
  //     date: ["5th November", "15th November"],
  //     car: "Porsche 911",
  //     amount: 6543.21,
  //   },
  // ];

  return (
    <>
      {showMessageBox && <MessageInterface />}

      <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[10px] pt-[2rem]">
        <div className="mb-8">
          <h4 className="text-egreen text-[3rem] font-[500]">Rental History</h4>
          <span className="flex gap-3">
            <CustomSelect state={month} options={months} setState={setMonth} />
            <CustomSelect state={year} options={years} setState={setYear} />
          </span>
        </div>
        {/* <RentalTable data={data} loading={loading} /> */}
        <div className="flex flex-wrap w-[100%] justify-center items-center">
          {data?.map((item, index) => {
            const car = carDetails.filter((item2) => {
              return item2._id == item.carId;
            })[0];
            return (
              <div
                id={index}
                className="flex flex-col items-center p-[15px] rounded-lg border-[1px] border-[#d8d8d8] m-[15px] w-[350px]"
              >
                <div className="flex border-b-[1px] border-b-[#a0a0a0] pb-[10px] w-[100%]">
                  <img
                    src={car?.photos[0]}
                    alt=""
                    className="w-[70px] h-[70px] rounded-full"
                  />
                  <span className="flex flex-col ml-[10px] justify-center">
                    <span className="text-[18px]">
                      {car?.basicInformation.make} {car?.basicInformation.model}
                    </span>
                    <span className="text-[#a3a3a3] text-[12px]">
                      {car?.additionalInformation.licensePlate}
                    </span>
                    <span className={`text-[#a3a3a3] text-[12px]`}>
                      {dayjs(data?.pickupDate).format("DD/MM/YYYY")} -{" "}
                      {dayjs(data?.returnDate).format("DD/MM/YYYY")}
                    </span>
                    <span
                      className={`flex text-[#ffffff] text-[15px] mt-[10px] rounded-lg italic`}
                    >
                      {item.status}
                    </span>
                    <span
                      className={`flex text-egreen font-bold text-[16px] mt-[2px]`}
                    >
                      GHS {item.rentalPrice.toLocaleString()}.00
                    </span>
                  </span>
                </div>
                <div className="flex w-[100%] pt-[10px] justify-center items-center">
                  <span>{item.vendorName}</span>
                  <span
                    className="flex p-[5px] rounded-full bg-[#FFF] ml-[15px] justify-center items-center"
                    onClick={() => {
                      setShowMessageBox(true);
                      setActiveUserEmail(item.vendorEmail);
                    }}
                  >
                    <p className="text-[#000]">Chat</p>
                    <Icon
                      icon="material-symbols:chat-outline"
                      width={20}
                      color="black"
                      className="ml-[5px]"
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  function MessageInterface() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState([]);

    const getConversation = async () => {
      setLoading(true);
      const requestData = {
        firstUserEmail: user.email,
        secondUserEmail: activeUserEmail,
        // Add other data properties as needed
      };
      const apiUrl = `${baseURLGeneral}/messages-get`;

      try {
        const response = await axios.post(apiUrl, requestData);

        // Handle the response data as needed
        console.log("Response Data:", response.data.data);
        sorting(response.data.data[0]);
        setLoading(false);
        // You can perform additional actions based on the response here
      } catch (error) {
        setLoading(false);
        // Handle any errors that occur during the request
        console.error("Request Error:", error);

        // You can display an error message or handle the error in your application
      }
    };

    const sorting = (data) => {
      const messages1 = data.userOne.userMessages?.map((item) => {
        const name = { name: data.userOne.name, email: data.userOne.email };
        const final = Object.assign(item, name);
        return [final];
      });
      const messages2 = data.userTwo.userMessages?.map((item) => {
        const name = { name: data.userTwo.name, email: data.userTwo.email };
        const final = Object.assign(item, name);
        return [final];
      });
      const messages = messages1.concat(messages2);

      const final = messages.flat(1).sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
      // this.setState({ messages: final })
      setConversation(final);
      console.log("final", final);
      // if(this.state.typedNewMessage !== null){
      //     let joined = this.state.messages.concat({
      //         email: this.state.email,
      //         messages: this.state.typedNewMessage,
      //         _id: Math.random() * 10000000,
      //         createdAt: Date.now(),
      //         name: 'akmg'
      //     })
      //     this.setState({ messages: joined})
      // }
      // this.setState({ typedNewMessage: null })
    };

    useEffect(() => {
      getConversation();
    }, [activeUserEmail]);

    const sendMessage = async () => {
      const requestData = {
        firstUserEmail: user.email,
        secondUserEmail: activeUserEmail,
        firstUserMessage: message,
        secondUserMessage: "",
        firstUserphoneNumber: "",
        firstUserNotificationToken: "",
        secondUserPhoneNumber: "",
        secondUserNotificationToken: "",
        // Add other data properties as needed
      };
      const apiUrl = `${baseURLGeneral}/messages-create`;

      try {
        const response = await axios.post(apiUrl, requestData);
        getConversation();
        setMessage("");
        // Handle the response data as needed
        console.log("Response Data:", response.data);
        // You can perform additional actions based on the response here
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Request Error:", error);

        // You can display an error message or handle the error in your application
      }
    };

    return (
      <div className="w-[100vw] h-[100vh] fixed top-0 bg-[#00000061] z-[1000] flex justify-center items-center">
        <div className="flex flex-col h-[100%] w-[100%] bg-[#FFF] relative rounded-lg overflow-hidden sm:h-[90%] sm:w-[500px]">
          <span
            onClick={() => {
              setShowMessageBox(false);
              setActiveUserEmail("");
            }}
            className="absolute top-[5px] right-[5px] w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#000] text-[#FFF]"
          >
            X
          </span>
          <div className="h-[60px] border-b-[1px] border-b-[#838383]"></div>

          <div className="flex flex-col flex-1 overflow-y-scroll bg-[#9c9c9c] relative">
            {loading && (
              <div className="absolute top-0 w-[100%] h-[100%] flex justify-center items-center bg-[#0000007a]">
                <BeatLoader size={20} color="white" />
              </div>
            )}
            {conversation?.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className={`${
                    item.email === user.email ? "self-end" : "self-start"
                  } p-2 items-center justify-center min-h-10 max-w-70 bg-${
                    item.email === user.email ? "[#FFF]" : "[#000]"
                  } m-2 rounded-lg shadow-sm shadow-md hover:shadow-lg`}
                >
                  <span
                    className={`text-[15px] text-${
                      item.email === user.email ? "[#000]" : "[#FFF]"
                    }`}
                  >
                    {item.messages}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex h-[60px] border-t-[1px] border-t-[#838383]">
            <input
              type="text"
              placeholder="Please enter your message..."
              className="h-[100%] flex-1 p-[10px] outline-none "
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <span
              className="flex justify-center items-center p-[5px] rounded-full m-[7px] bg-[#5b79f1] text-[#FFF]"
              onClick={sendMessage}
            >
              send
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const CustomSelect = ({ options, state, setState }) => {
  return (
    <select
      className="select bg-[transparent] outline-egreen  border-[#fff] border-[1px] rounded-lg px-3 py-2 "
      value={state}
      onChange={(e) => {
        setState(e.currentTarget.value);
      }}
    >
      {options?.map((elem) => {
        return <option>{elem}</option>;
      })}
    </select>
  );
};
