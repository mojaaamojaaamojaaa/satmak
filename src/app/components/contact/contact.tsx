"use client";
import { useState } from "react";
import { send } from "emailjs-com";
import { emailjsConfig } from "./EmailJS";
import FadeIn from "../animation/FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //入力フォームの内容の更新
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isEmailValid = (email: string) => {
    // MailAdressのヴァリデーションチェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    // 空欄がないかをチェック
    if (!formData.name || !formData.email || !formData.message) {
      alert("項目に入力をお願いします。");
      return; // Exit the function if validation fails
    }

    // Email欄に@があるかチェック
    if (!isEmailValid(formData.email)) {
      alert("正しいメールアドレスを入力してください。");
      return;
    }

    // フィールドがすべて埋まってメールアドレスにも誤りがなければ送信
    if (
      emailjsConfig.serviceId !== undefined &&
      emailjsConfig.templateId !== undefined
    ) {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("送信が完了しました！");
        })
        .catch((err) => {
          console.error("FAILED...", err);
          alert("送信エラーです。");
        });
    }
  };

  // フォーム
  return (
    <FadeIn delay={2}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-1 block w-full lg:w-1/2 bg-white  border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-1 block w-full lg:w-1/2 border border-black bg-white  rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 block w-full lg:w-3/4 border border-black bg-white  rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue p-2 w-28 text-lg  rounded-md text-slate-200"
        >
          send
        </button>
      </form>
    </FadeIn>
  );
}
