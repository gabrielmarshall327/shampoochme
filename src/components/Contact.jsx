import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function Contact() {
  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      breed: "",
      service: "",
      message: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.number()
        .positive("Invalid Phone Number")
        .integer("Invalid Phone Number")
        .lessThan(99999999999, "Invalid Phone Number")
        .required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      address: Yup.string().required("Address is required"),
      breed: Yup.string().required("Dog breed is required"),
      service: Yup.string().required("Service Package is required"),
      message: Yup.string(),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          console.log("Email Sent");
          alert("Message Successfully Sent!");
        });
    },
  });

  return (
    <div id="contact" className=" text-center max-w-xl mx-auto pb-8 pt-12 px-4">
      <div>
        <h1 className="pb-4">Contact Us!</h1>
        <hr className="pb-4 w-20 mx-auto" />
        <p className=" max-w-sm mx-auto pb-4">
          To schedule an appointment, please fill out the form below or text
          979-709-7297
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-wrap"
          method="post"
          id="contactForm"
        >
          <label className="flex flex-col mb-2 w-[48%] mr-auto max-md:w-full">
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
              placeholder="Name"
            />
          </label>
          <label className="flex flex-col mb-2 w-[48%] ml-auto max-md:w-full">
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
              placeholder="Phone Number"
            />
          </label>
          <label className="flex flex-col mb-2 w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.address && formik.touched.address
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.address && formik.touched.address
                ? formik.errors.address
                : "Address"}
            </span>
            <input
              type="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="max-md:text-sm bg-gray-100 border border-black p-2"
              placeholder="Address"
            />
          </label>
          <label className="flex flex-col mb-2 w-full">
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
              placeholder="Email Address"
            />
          </label>
          <label className="flex flex-col mb-2 w-[48%] mr-auto max-md:w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.breed && formik.touched.breed
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.breed && formik.touched.breed
                ? formik.errors.breed
                : "Dog Breed"}
            </span>
            <input
              type="breed"
              name="breed"
              value={formik.values.breed}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="max-md:text-sm bg-gray-100 border border-black p-2"
              placeholder="Dog Breed"
            />
          </label>
          <label className="flex flex-col mb-2 w-[48%] ml-auto max-md:w-full">
            <span
              className={`mb-1 text-left ${
                formik.errors.service && formik.touched.service
                  ? "text-red-600"
                  : ""
              }`}
            >
              {formik.errors.service && formik.touched.service
                ? formik.errors.service
                : "Service"}
            </span>
            <select
              type="service"
              name="service"
              value={formik.values.service}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="max-md:text-sm bg-gray-100 border border-black p-2"
            >
              <option value=""></option>
              <option value="fullbath">Full Bath</option>
              <option value="fullbath&groom">Full Bath & Groom</option>
            </select>
          </label>
          <label className="flex flex-col mb-2 w-full">
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
              rows="4"
              type="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-100 border border-black p-2 max-md:text-sm "
              placeholder="Any Special Notes or Needs"
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
