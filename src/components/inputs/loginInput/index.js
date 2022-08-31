import React from 'react';
import { useField, ErrorMessage } from 'formik';
export default function LoginInput({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3 form-group row align-items-center justify-content-center">
      <div className="col-md-2">
        <label htmlFor="">{label}</label>
      </div>
      <div className="col-md-8">
        <input
          type={field.type}
          name={field.name}
          placeholder={placeholder}
          {...field}
          {...props}
          className={`form-control ${
            meta.touched && meta.error ? 'border border-danger' : ''
          }`}
        />
      </div>
      <div className="col-md-6">
        {meta.touched && meta.error && (
          <div className="pt-2 text-danger  ">
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          </div>
        )}
      </div>
    </div>
  );
}
