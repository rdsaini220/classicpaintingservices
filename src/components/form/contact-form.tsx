'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  email: string;
  phone: string;    // ✅ added phone
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  phone: yup
  .string()
  .required("Phone is required")
  .matches(
    /^(\+?\d{1,4}[\s-]?)?(\(?\d{2,4}\)?[\s-]?)?[\d\s-]{5,}$/,
    "Please enter a valid phone number"
  ),  message: yup.string().required().label("Message"),
});

type IProps = {
  btnCls?: string;
}

export default function ContactForm({ btnCls = '' }: IProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data: FormData) => {
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("✅ Message sent successfully!");
        reset();
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("❌ Something went wrong.");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Name</label>
        <input id='name' {...register("name")} type="text" placeholder="John Doe" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>Email</label>
        <input id='email' {...register("email")} type="email" placeholder="your@email.com" />
        <ErrorMsg msg={errors.email?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>Phone</label> {/* ✅ added */}
        <input id='phone' {...register("phone")} type="text" placeholder="Your Phone Number" />
        <ErrorMsg msg={errors.phone?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>

      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Send Message
        </button>
      </div>

      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
