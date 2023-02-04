import React, { useEffect, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // Reset emailSent boolean
  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  }, [emailSent]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailSent((prev) => !prev);

    const emailData = {
      email,
      name,
      message,
    };

    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(emailData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setEmail("");
        setName("");
        setMessage("");
      });
    } catch (error) {
      console.log("error");
    }
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
            <div className="rounded">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-zinc-50 p-2 outline-none ring-4 transition-all duration-150 ease-in focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-200">
              Name
            </label>
            <div className="rounded">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded bg-zinc-50 p-2 outline-none ring-4 transition-all duration-150 ease-in focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-zinc-200">
              Message
            </label>
            <div className="rounded">
              <textarea
                name="message"
                id="message"
                rows={5}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded border-none bg-zinc-50 p-2 outline-none ring-4 transition-all duration-150 ease-in focus:ring-blue-600"
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
