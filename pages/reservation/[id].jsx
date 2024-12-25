import axios from "axios";


const Reservation = ({ reservation }) => {
  
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
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
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  {reservation?._id.substring(0, 5)}...
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
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/reservations/${params.id}`
  );

  return {
    props: {
      reservation: res.data ? res.data : null,
    },
  };
};

export default Reservation;