import Field from "../../components/shared_components/InputField";
// src/components/userDashboardComponents/home
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const SignUpPage = () => {
  const nav = useNavigate();
  const [file, setFile] = useState("");
  const [isloading, setLoading] = React.useState(false);
    const id_type = ['Ghana-Card','Driver-License']
  const formic = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
      existing: false,
      issued: '',
      expiry: '',
      phoneNumber: '', 
      idNumber: ''
    },
    validate: (values) => {},
    onSubmit: (values) => {
      signUp();
    },
  });
  async function signUp() {
    setLoading(true);
    try {
      const response = await axios({
        url: "https://elite-ryde-management-api.azurewebsites.net/api/become-a-user",
        method: "post",
        data: {
          firstName: formic.values.firstName,
          lastName: formic.values.lastName,
          email: formic.values.email,
          phoneNumber: formic.values.phoneNumber,
          idType: id_type[formic.values.id],
          idNumber: formic.values.idNumber,
          idImage: formic.values.idImage,
          existing: formic.values.existing,
        },
      });

      if (response?.data?.status) {
        nav("/sucess");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-[30%] mx-auto bg-[#000] p-8 mb-6 text-[#fff]">
      <h4 className="text-[2.3rem] mb-4">Become a user.</h4>
      <form onSubmit={formic.handleSubmit} className="flex flex-col gap-5">
        <Field
          name={"firstName"}
          type={"text"}
          value={formic.values.firstName}
          label={"Firstname"}
          onChange={formic.handleChange}
        />
        <Field
          name={"lastName"}
          type={"text"}
          value={formic.values.lastName}
          label={"Lastname"}
          onChange={formic.handleChange}
        />
        <Field
          name={"email"}
          type={"email"}
          value={formic.values.email}
          label={"Email"}
          onChange={formic.handleChange}
        />
        <Field
          name={"phoneNumber"}
          type={"number"}
          value={formic.values.phoneNumber}
          label={"Phone Number"}
          onChange={formic.handleChange}
        />

        <div className="flex flex-col gap-3 lg:gap-2">
          <label
            htmlFor={formic.values.id}
            className="font-[100] text-[1.2rem]"
          >
            ID Type
          </label>
          <select
            name={"id"}
            value={formic.values.id}
            className="bg-[#000] text-[#fff] border-[0.5px] border-[#fff] mt-4 outline-none text-[0.9rem]  py-2 px-0"
          >
            <option value={0}>Ghana Card</option>
            <option value={1}>Driver license</option>
          </select>
        </div>
        <Field
          name={"idNumber"}
          type={"text"}
          value={formic.values.idNumber}
          label={"ID Number"}
          onChange={formic.handleChange}
        />

        <span className="grid grid-cols-2 gap-3">
          <Field
            name={"issued"}
            type={"date"}
            value={formic.values.issued}
            label={"Date Issued"}
            onChange={formic.handleChange}
          />

          <Field
            name={"expiry"}
            type={"date"}
            value={formic.values.expiry}
            label={"Expiry Date"}
            onChange={formic.handleChange}
          />
        </span>
        <div className="flex flex-col gap-3 lg:gap-2">
          <label
            htmlFor={formic.values.id}
            className="font-[100] text-[1.2rem]"
          >
            UPLOAD ID (PDF Only)
          </label>
          <input
            name={"id"}
            type="file"
            onChange={(e) => {
              formic.setFieldValue("idImage", e?.target?.files[0])
            }}
            className="bg-[#000] text-[#fff] mt-4 outline-none text-[0.9rem]  py-2 px-0"
          />
        </div>

        <button
          className="bg-[#ffffff4f] text-[#000] py-3 rounded-xl grid place-items-center"
          type="submit"
          disabled={isloading}
        >
          {isloading ? (
            <Icon icon="line-md:loading-loop" className="font-[900]" />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
