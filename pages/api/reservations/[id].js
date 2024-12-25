import Reservation from "@/models/Reservation";
import dbConnect from "@/util/dbConnect";
const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const reservation = await Reservation.findById(id);
      res.status(200).json(reservation);
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "DELETE") {
    try {
      const reservation = await Reservation.findByIdAndDelete(id);
      res.status(200).json(reservation);
    } catch (err) {
      console.log(err);
    }
  }
};
export default handler;