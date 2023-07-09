import Field from "../../components/shared_components/InputField";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconLoading from "../../components/shared_components/IconLoading";
import { toast } from "react-toastify";
import * as Yup from "yup";
const SignUpPage = () => {
  const [uploadLoading, setUploadLoading] = React.useState(false);
  const [nonGh, setNonGh] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Fisrt name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    existing: Yup.boolean(),
    GPSAddress: !nonGh && Yup.string().required(),
    phoneNumber: Yup.string().required("Phone number is required"),
    ghanaian: Yup.boolean(),
    idNumber: Yup.string().required("This field must be filled"),
    password: Yup.string().required("Required"),
    image: nonGh && Yup.string().required(),
  });
  const nav = useNavigate();

  const [isloading, setLoading] = React.useState(false);
  const id_type = ["Ghana-Card", "Driver-License"];
  const formic = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
      GPSAddress: "",
      existing: false,
      issued: "",
      expiry: "",
      phoneNumber: "",
      idNumber: "",
      ghanaian: !nonGh,
      password: "",
      image: "",
      idImage: "",
    },
    validationSchema,
    validate: (values) => {
      console.log("yes");
    },
    onSubmit: (values) => {
      signUp();
    },
  });
  async function upload(file, field) {
    const formData = new FormData();
    formData?.append("file", file);
    try {
      setUploadLoading(true);
      const response = await axios.post(
        `https://elite-ryde-management-api.azurewebsites.net/api/upload-document?documentType=business%20registration%20document&userEmail=${formic.values.email?.replace(
          /[^\w\s]/g,
          ""
        )}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.data?.status) {
        // formic.setFieldValue("doc", e?.target?.files[0]);
        toast.success("Document uploaded succesfully");
        formic.setFieldValue(field, response?.data.data.url);
        //  dispatch(set_image(`${response.data.data.url}?${token}`))
      }
    } catch (error) {
      toast.error("An error occured. \n Try again");
    } finally {
      setUploadLoading(false);
    }
  }
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
          location: formic.values.GPSAddress,
          passportPicture: formic.values.image || "ghanaian",
          nonGhanaian: formic.values.ghanaian,
          password: formic.values.password,
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
            <FieldPassword
              name={"password"}
              type={"password"}
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
                  upload(e?.target?.files[0], "idImage");
                }}
                className="bg-[#000] text-[#fff] mt-4 outline-none text-[0.9rem]  py-2 px-0"
              />
            </div>
            {nonGh && (
              <div className="flex flex-col gap-3 lg:gap-2">
                <label
                  htmlFor={formic.values.image}
                  className="font-[100] text-[1.2rem]"
                >
                  UPLOAD PASSPORT PICTURE (PDF Only)
                </label>
                <input
                  name={"id"}
                  type="file"
                  onChange={(e) => {
                    upload(e?.target?.files[0], "image");
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
function FieldPassword({ name, placeholder, value, label, onChange, type,error }) {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col gap-3 lg:gap-2">
    <label htmlFor={name} className="font-[100] text-[1.2rem]">
        {label}
    </label>
    <div>
    <input
    autoComplete='new-password'
      type={show? 'text': 'password'}
      name={name}
      placeholder={placeholder}
      value={value}
      className="outline-none bg-[#000] border-bgrey border-b-[0.5px] text-[0.9rem]  w-[90%] py-2 placeholder:text-bgrey    text-[#fff]"
      onChange={onChange}
    />
    <p className="text-[#fff] inline-block cursor-pointer text-center" onClick={() => {
      setShow(!show)
    }}>{show ? 'hide': 'show'}</p>
    </div>
    {error  && (
        <p className="text-[#EF0107] font-[300] text-[0.8rem]">
          *{error.toLowerCase()}
        </p>
      )}
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
