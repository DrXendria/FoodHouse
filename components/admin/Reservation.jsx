import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../ui/Title";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    const getReservations = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/reservations`
        );
        setReservations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getReservations();
  }, []);
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this reservation?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}`
        );
        if (res.status === 200) {
          toast.success("Reservation Deleted!");
          getReservations();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
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
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
            {reservations.length > 0 &&
              reservations
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((reservation) => (
                  <tr
                    className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                    key={reservation?._id}
                  >
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                      {reservation?._id.substring(0, 6)}...
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
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      <button
                        className="btn-primary !bg-danger"
                        onClick={() => handleDelete(reservation?._id)}
                        
                      >
                        Delete
                      </button>
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