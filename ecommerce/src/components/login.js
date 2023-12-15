import React, { useState } from "react";
import Logo from "../images/Logo.png";

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [columnsOrder, setColumnsOrder] = useState("row");

  const handleRegisterClick = () => {
    setIsRegistering(true);
    setColumnsOrder("row-reverse");
  };

  const handleBackToLogin = () => {
    setIsRegistering(false);
    setColumnsOrder("row");
  };

  return (
    <section className="gradient-form h-screen px-4 flex justify-center items-center bg-ffb551">
      <div className="container h-full p-20">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-white">
          <div className="w-full pb-10">
            <div
              className={`block rounded-lg bg-white shadow-lg lg:flex lg:flex-wrap`}
              style={{
                flexDirection: columnsOrder,
                background: isRegistering ? "#FFB551" : "#2EC4B6",
              }}
            >
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-8">
                  <div className="text-center">
                    <img className="mx-auto w-100" src={Logo} alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-2xl font-semibold">
                      Welcome to your favorite Pet Shop!
                    </h4>
                  </div>

                  <form>
                    <p className="mb-4">
                      {isRegistering ? "Register now" : "Please login to your account"}
                    </p>
                    {!isRegistering && (
                      <>
                        <div className="relative mb-4">
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-text-black text-black"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-text-black text-black"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                          />
                        </div>
                      </>
                    )}
                    {isRegistering && (
                      <>
                        <div className="relative mb-4">
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-text-black text-black"
                            id="fullNameInput"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-text-black text-black"
                            id="emailInput"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-text-black text-black"
                            id="passwordInput"
                            placeholder="Password"
                          />
                        </div>
                      </>
                    )}
                    <div className="mb-12 pb-1 pt-8 text-center">
                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                          background: "#FFB551",
                        }}
                        onClick={isRegistering ? handleBackToLogin : handleRegisterClick}
                      >
                        {isRegistering ? "Register Now" : "Log in"}
                      </button>
                      {!isRegistering && (
                        <a href="#!" className="text-white hover:text-primary">
                          Forgot password?
                        </a>
                      )}
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">
                        {!isRegistering ? "Don't have an account?" : "Already have an account?"}
                      </p>
                      <button
                        type="button"
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                          background: "#FFB551",
                        }}
                        onClick={isRegistering ? handleBackToLogin : handleRegisterClick}
                      >
                        {!isRegistering ? "Register" : "Back to Login"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{ background: isRegistering ? "#2EC4B6" : "#FFB551" }}
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-3xl font-semibold">
                    We are more than just a shop
                  </h4>
                  <p className="text-xl">
                    Trust our caring team for pet sitting services, providing
                    a home away from home for your beloved furry companions.
                    We provide you with personalized consultations to your
                    furry friend's needs, ensuring optimal health and
                    happiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
