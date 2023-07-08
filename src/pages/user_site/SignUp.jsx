import Field from "../../components/shared_components/InputField";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconLoading from "../../components/shared_components/IconLoading";
import { toast } from "react-toastify";
import * as Yup from "yup";
const SignUpPage = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Fisrt name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    issued: Yup.string().required("Required Date"),
    expiry: Yup.string().required("Required Date"),
    existing: Yup.boolean(),
    GPSAddress:Yup.string().required(),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[1-9]\d{5,}$/,
        "Invalid Number"
      ),
    ghanaian: Yup.boolean(),
    idNumber:Yup.string().required('This field must be filled'),
    password:Yup.string().required("Required")
    
  });
  const nav = useNavigate();
  const [nonGh, setNonGh] = useState(false);
  const [isloading, setLoading] = React.useState(false);
  const id_type = ["Ghana-Card", "Driver-License"];
  const formic = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
      GPSAddress:'',
      existing: false,
      issued: "",
      expiry: "",
      phoneNumber: "",
      idNumber: "",
      ghanaian: !nonGh,
      password:""
    },
    validationSchema,
    validate: (values) => {
      console.log('yes')
    },
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
          idImage: "formic.values.idImage",
          existing: formic.values.existing,
          location: "test",
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
    <div className="w-[65%] mx-auto bg-[#000] p-8 mb-6 text-[#fff]">
      <h4 className="text-[2.3rem] mb-4">Become a user.</h4>
      <form onSubmit={formic.handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-[3rem]">
          <SectionLayout>
            <Field
              name={"firstName"}
              type={"text"}
              value={formic.values.firstName}
              label={"Firstname"}
              onChange={formic.handleChange}
              
              error={formic.errors.firstName}
            />
            <Field
              name={"lastName"}
              type={"text"}
              value={formic.values.lastName}
              label={"Lastname"}
              onChange={formic.handleChange}
              error={formic.errors.lastName}
            />
              <Field
              name={"Password"}
              type={"text"}
              value={formic.values.password}
              label={"Password"}
              onChange={formic.handleChange}
              
              error={formic.errors.password}
            />
            <Field
              name={"email"}
              type={"email"}
              value={formic.values.email}
              label={"Email"}
              onChange={formic.handleChange}
              error={formic.errors.email}
            />
            <Field
              name={"phoneNumber"}
              type={"number"}
              value={formic.values.phoneNumber}
              label={"Phone Number"}
              onChange={formic.handleChange}
              error={formic.errors.phoneNumber}
            />
            {!nonGh && (
              <Field
                name={"GPSAddress"}
                type={"GPSAddress"}
                value={formic.values.GPSAddress}
                label={"GPS address"}
                onChange={formic.handleChange}
                error={formic.errors.GPSAddress}
              />
            )}
          </SectionLayout>
          <SectionLayout>
            <div className="flex items-center justify-between h-[3rem] ">
              <input
                type="checkbox"
                name="existing"
                value={nonGh}
                onChange={() => setNonGh(!nonGh)}
                className="accent-egreen h-[1.5rem] w-[1.2rem] "
                id=""
              />
              <p className="text-[1.2rem] font-[100]">Non Ghanaian?</p>
            </div>
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
                {nonGh ? (
                  <option value={"Passport"}>Passport</option>
                ) : (
                  <>
                    <option value={0}>Ghana Card</option>
                    <option value={1}>Driver license</option>
                  </>
                )}
              </select>
            </div>
            <Field
              name={"idNumber"}
              type={"text"}
              value={formic.values.idNumber}
              label={"ID Number"}
              onChange={formic.handleChange}

              error={formic.errors.idNumber}
            />

            <span className="grid grid-cols-2 gap-3">
              <Field
                name={"issued"}
                type={"date"}
                value={formic.values.issued}
                label={"Date Issued"}
                onChange={formic.handleChange}
                error={formic.errors.issued}
              />

              <Field
                name={"expiry"}
                type={"date"}
                value={formic.values.expiry}
                label={"Expiry Date"}
                onChange={formic.handleChange}
                error={formic.errors.expiry}
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
                  formic.setFieldValue("idImage", e?.target?.files[0]);
                }}
                className="bg-[#000] text-[#fff] mt-4 outline-none text-[0.9rem]  py-2 px-0"
              />
            </div>
            {nonGh && (
              <div className="flex flex-col gap-3 lg:gap-2">
                <label
                  htmlFor={formic.values.id}
                  className="font-[100] text-[1.2rem]"
                >
                  UPLOAD PASSPORT PICTURE (PDF Only)
                </label>
                <input
                  name={"id"}
                  type="file"
                  onChange={(e) => {
                    formic.setFieldValue("idImage", e?.target?.files[0]);
                  }}
                  className="bg-[#000] text-[#fff] mt-4 outline-none text-[0.9rem]  py-2 px-0"
                />
              </div>
            )}
          </SectionLayout>
        </div>

        <button
          className="bg-[#fff] text-[#000] py-3 rounded-xl grid place-items-center"
          type="submit"
          disabled={isloading}
        >
          {isloading ? <IconLoading /> : "Sign up"}
        </button>
      </form>
    </div>
  );
};

const SectionLayout = ({ children }) => {
  return (
    <section className="flex flex-col gap-3 justify-between">
      {children}
    </section>
  );
};

export default SignUpPage;
