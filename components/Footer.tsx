import SendIcon from "../assets/icons/send.svg";

export default function Footer() {
  return (
    <div className="container">
      <div className="py-24 max-w-md mx-auto flex flex-col justify-center gap-y-6 text-slate-50">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Contact me</h2>
          <p>
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it
          </p>
        </div>
        <div>
          <form
            id="form"
            className="flex flex-col text-slate-700"
            action="https://formspree.io/f/mrgjopje"
            method="post"
          >
            <input
              className="h-12 my-2 p-2 rounded-md"
              type="text"
              placeholder="Your name"
              name="name"
              maxLength={30}
              required
            />
            <input
              id="email"
              className="h-12 my-2 p-2 rounded-md"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              className="my-2 p-2 rounded-md"
              placeholder="Write your message here"
              maxLength={500}
              rows={5}
              name="message"
              required
            ></textarea>
            <small className="contact__form-errors" id="errors"></small>
            <button
              className="w-full flex items-center justify-center gap-4 md:w-auto px-6 py-2 mt-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 rounded-md"
              type="submit"
            >
              <SendIcon className="h-5 w-5" />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
