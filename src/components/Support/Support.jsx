import React from "react";

const Support = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="md:text-4xl text-3xl text-center font-bold text-[#AD49E1] mb-4">
          Support Center
        </h1>
        <p className="text-base text-center dark:text-gray-200 leading-relaxed">
          Welcome to the Recipe Book Support Center! We're here to help you with
          any questions, technical issues, or feedback you may have. Whether
          you're having trouble uploading a recipe, can't find your favorites,
          or just want to say hi — we've got your back. Our goal is to ensure
          you have a smooth and enjoyable experience on our platform. From
          step-by-step guidance to troubleshooting tips, we’re committed to
          providing fast and friendly support whenever you need it. If you’re
          new to Recipe Book, feel free to explore our FAQs, user guides, or
          contact us directly — we’re always happy to assist!
        </p>
      </div>
      <div className="flex justify-between gap-10 flex-col md:flex-row my-10">
        <div className="flex-1">
          <h1 className="md:text-4xl text-3xl text-center font-bold text-[#AD49E1] mb-4">
            Technical issues
          </h1>
          <p className="text-base dark:text-gray-200 text-center leading-relaxed">
            Something not working right? Let us know and we'll fix it as soon as
            possible. Your feedback helps us improve the app for everyone.
            Whether it's a bug, a broken link, or a feature that’s not behaving
            as expected — we’re here to help and make things right.
          </p>
        </div>
        <div className="flex-1">
          <form>
            <div className="grid grid-cols-1 mb-4 gap-4 dark:text-gray-200 md:grid-cols-2">
              <label htmlFor="" className="flex flex-col">
                First Name :
                <input
                  type="text"
                  className="py-2 px-4 dark:text-black  rounded-md mt-2 outline-none bg-gray-100"
                  placeholder="First Name"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Email :
                <input
                  type="email"
                  className="py-2 px-4 rounded-md dark:text-black mt-2 outline-none bg-gray-100"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <label className="mt-4 dark:text-white" htmlFor="">
              Describe the issue :{" "}
            </label>
            <textarea
              className="py-2 px-4 mt-2  h-40 rounded-md outline-none bg-gray-100 w-full"
              placeholder="Describe the issue"
              name=""
              id=""
            ></textarea>
            <button className="bg-[#AD49E1] mt-4 w-full text-white font-medium px-4 py-2 rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
