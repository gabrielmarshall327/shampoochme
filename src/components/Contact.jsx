import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      message: Yup.string().required("Message is required"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div id="contact" className=" text-center max-w-xl mx-auto pb-8 pt-12 px-4">
      <div>
        <h1 className="pb-4">Contact Us!</h1>
        <hr className="pb-4 w-20 mx-auto" />
        <p className=" max-w-md mx-auto pb-8">
          To schedule an appointment, either fill out the form below, call/text
          979-709-7297, or email mb@shampoochme.pet
        </p>
        <form onSubmit={formik.handleSubmit} className=" flex flex-wrap">
          <label className="flex flex-col mb-4 w-[48%] mr-auto max-md:w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.name && formik.touched.name ? "text-red-600" : ""
              }`}
            >
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : "Name"}
            </span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={"max-md:text-sm bg-gray-100 border border-black p-2 "}
              placeholder="What's your name?"
            />
          </label>
          <label className="flex flex-col mb-4 w-[48%] ml-auto max-md:w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.phone && formik.touched.phone
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.phone && formik.touched.phone
                ? formik.errors.phone
                : "Phone Number"}
            </span>
            <input
              type="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="max-md:text-sm bg-gray-100 border border-black p-2"
              placeholder="What's your phone number?"
            />
          </label>
          <label className="flex flex-col mb-4 w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.email && formik.touched.email
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : "Email Address"}
            </span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="max-md:text-sm bg-gray-100 border border-black p-2"
              placeholder="What's your email?"
            />
          </label>
          <label className="flex flex-col mb-4 w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.message && formik.touched.message
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.message && formik.touched.message
                ? formik.errors.message
                : "Message"}
            </span>
            <textarea
              rows="7"
              type="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-100 border border-black p-2 max-md:text-sm "
              placeholder="What's your address, phone number, and puppie's breed?"
            />
          </label>
          <div className=" flex justify-center w-full">
            {" "}
            <button
              type="submit"
              className=" bg-custom-pink p-3 px-4 rounded-xl text-white font-semibold "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
