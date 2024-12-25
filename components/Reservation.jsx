import React from 'react'
import Input from './form/Input'
import Title from './ui/Title'
import { useFormik } from 'formik'
import { reservationSchema } from '@/schema/reservation'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router' 
import { useSession } from 'next-auth/react'

const Reservation = ({userList}) => {
  const {data:session} = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = userList?.find((user) => user.email === session?.user?.email);
  const onSubmit = async (values, actions) => {
    try {
      if (session) {
        if (confirm("Are you sure to reservation?")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
            values 
          );
          if (res.status === 201) {
            router.push(`../reservation/${res.data._id}`);
            dispatch(reset());
            toast.success("Reservation created successfully", {
              autoClose: 1000,
            });
          }
          actions.resetForm(); 
        }
      } else {
        toast.error("Please login first.", {
          autoClose: 1000,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { autoClose: 1000 });
    }
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
  useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      people:"",
      date: "",
    },
    onSubmit,
    validationSchema: reservationSchema,
  });

const inputs = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    placeholder: "Your Full Name",
    value: values.fullName,
    errorMessage: errors.fullName,
    touched: touched.fullName,
  },
  {
    id: 2,
    name: "phoneNumber",
    type: "number",
    placeholder: "Your Phone Number",
    value: values.phoneNumber,
    errorMessage: errors.phoneNumber,
    touched: touched.phoneNumber,
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Your Email Address",
    value: values.email,
    errorMessage: errors.email,
    touched: touched.email,
  },
  {
    id: 4,
    name: "people",
    type: "number",
    placeholder: "How Many People?",
    value: values.people,
    errorMessage: errors.people,
    touched: touched.people,
  },
  {
    id: 5,
    name: "date",
    type: "datetime-local",
    value: values.date,
    errorMessage: errors.date,
    touched: touched.date,
  },
];
const newReservation = {
  fullName: user?.fullName,
  phoneNumber: user?.phoneNumber, 
  email:user?.email,
  people:user?.people,
  date:user?.date,
  method: 0,
};

// const createReservation = async () => {
//   try {
//     if (session) {
//       if (confirm("Are you sure to reservation?")) {
//         const res = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
//           newReservation
//         );
//         if (res.status === 201) {
//           router.push(`/reservation/${res.data._id}`);
//           dispatch(reset());
//           toast.success("Reservation created successfully", {
//             autoClose: 1000,
//           });
//         }
//       }
//     } else {
//       toast.error("Please login first.", {
//         autoClose: 1000,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
return (
  <div className="container mx-auto py-12">
    <Title className="text-[40px] mb-10">Book A Table</Title>
    <div className="flex justify-between flex-wrap-reverse gap-10">
      <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-3">
          {inputs.map((input) => (
            
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <button className="btn-primary mt-4" type="submit" >
          Book Now
        </button>
      </form>
      <div className="lg:flex-1 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  </div>
);
};
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};

export default Reservation;