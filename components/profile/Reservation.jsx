import { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useSession } from "next-auth/react";
import axios from "axios";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const getReservations = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/reservations`
        );
        setReservations(
          res.data.filter((reservation) => reservation?.fullName === currentUser?.fullName)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getReservations();
  }, [currentUser]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
        setCurrentUser(
          res.data.filter((user) => user.email === session.user.email)[0]
        );
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [session]);
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]">Reservations</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Reservation ID
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Phone Number
              </th>
              <th scope="col" className="py-3 px-6">
                E-Mail
              </th>
              <th scope="col" className="py-3 px-6">
                People
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
           
            {reservations.map((reservation) => (
              <tr
                className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                key={reservation?._id}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <span>{reservation?._id.substring(0,5)}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {reservation?.fullName}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {reservation?.phoneNumber}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {reservation?.email}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {reservation?.people}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {reservation?.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;