import React, { useState } from "react";

import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailSent((prev) => !prev);

    const emailData = {
      email,
      name,
      message,
    };
  }
  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-16">
        <h1 className="text-2xl font-semibold uppercase tracking-wide text-zinc-50">
          Let&apos;s Connect
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-full flex-col gap-3 md:w-[640px]"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-zinc-200">
              Email
            </label>
            <div className="rounded border">
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-zinc-50 p-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-200">
              Name
            </label>
            <div className="rounded border">
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded bg-zinc-50 p-2 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-zinc-200">
              Message
            </label>
            <div className="rounded border">
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded bg-zinc-50 p-2 outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-32 cursor-pointer rounded p-2 text-lg font-semibold transition-all duration-300 ease-linear ${
                emailSent
                  ? "bg-green-600 text-zinc-50 hover:bg-green-500"
                  : "bg-blue-600 text-zinc-50 hover:bg-blue-500"
              }`}
            >
              {emailSent ? "Connected" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
