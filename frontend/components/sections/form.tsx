import * as yup from "yup";

import {
  Field,
  Formik,
  Form as FormikForm,
  FormikErrors,
  FormikTouched,
} from "formik";
import { Fragment, useMemo, useState } from "react";

import Button from "../elements/button";
import { fetchAPI } from "../../utils/api";

type FormProps = {
  data: any;
};

type InputErrorProps = {
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
};

const InputError = ({ error, touched }: InputErrorProps) => {
  if (!error || !touched) {
    return null;
  }
  return (
    <div className="text-red-400 text-base mt-1 ml-2 text-left">{error}</div>
  );
};

const Form = ({ data }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const LeadSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email name is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    message: yup.string().required("Don't forget your message"),
  });

  const initialValues = useMemo(
    () =>
      data.inputs.reduce((map: Record<string, string>[], input: any) => {
        const key = input.name;
        return {
          ...map,
          [key]: "",
        };
      }, {}),

    [data.inputs]
  );

  const onSubmit = async (
    values: Record<string, any>,
    { setSubmitting, setErrors, resetForm, ...rest }: any
  ) => {
    console.log("🚀  ~ rest", values);
    setLoading(true);

    try {
      setErrors({ api: null });
      await fetchAPI(data.responseCollection, {
        method: "POST",
        body: JSON.stringify(values),
      });
      setSubmitSuccessful(true);
      resetForm();
    } catch (err: any) {
      console.log("Cathcing", err);
      setErrors({ api: err.message });
    }

    setLoading(false);
    setSubmitting(false);
  };

  return (
    <div className="py-10 px-6 text-center">
      {data.title && <h1 className="text-3xl font-bold mb-2">{data.title}</h1>}
      <div className="flex flex-col items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={LeadSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting, resetForm, ...rest }) => {
            return (
              <div>
                <FormikForm className="grid grid-cols-2 gap-6">
                  {data.inputs.map(({ width, ...input }: Record<any, any>) => {
                    const inputWidth = width === "full" ? "col-span-2" : "";
                    const height = input.type === "textarea" ? "h-32" : "h-12";
                    return (
                      <Fragment key={input.name}>
                        <label
                          className={`flex flex-col justify-start text-white ${inputWidth} text-left`}
                        >
                          {input.label}
                          {input.required && "*"}
                          <Field
                            className={`text-base text-black focus:outline-none py-4 px-4 border-2 rounded-md mt-2 ${height}`}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            as={
                              input.type === "textarea" ? "textarea" : "input"
                            }
                          />
                          <InputError
                            error={errors[input.name]}
                            touched={touched[input.name]}
                          />
                        </label>
                      </Fragment>
                    );
                  })}
                  <Button
                    type="submit"
                    text={data.submitButton.text}
                    disabled={isSubmitting || submitSuccessful}
                    loading={loading}
                    success={submitSuccessful}
                    variant={data.submitButton.type}
                  />
                </FormikForm>
                <p className="text-red-500 h-12 text-sm mt-1 ml-2 text-left">
                  {errors.api}
                </p>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
