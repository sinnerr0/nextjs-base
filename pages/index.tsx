import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1 className={"text-3xl font-bold text-center"}>Welcome to Next.js!</h1>
        <div className="accordion" id="accordionExample">
          <div className="bg-white border border-gray-200 accordion-item">
            <h2 className="mb-0 accordion-header" id="headingOne">
              <button
                className="
        flex
        relative
        items-center
        py-4
        px-5
        w-full
        text-base
        text-left text-gray-800 bg-white
        rounded-none
        border-0
        focus:outline-none
        transition
        accordion-button
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="py-4 px-5 accordion-body">
                <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 accordion-item">
            <h2 className="mb-0 accordion-header" id="headingTwo">
              <button
                className="
        flex
        relative
        items-center
        py-4
        px-5
        w-full
        text-base
        text-left
        text-gray-800 bg-white rounded-none
        border-0
        focus:outline-none
        transition
        accordion-button
        collapsed
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="py-4 px-5 accordion-body">
                <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 accordion-item">
            <h2 className="mb-0 accordion-header" id="headingThree">
              <button
                className="
        flex
        relative
        items-center
        py-4
        px-5
        w-full
        text-base
        text-left
        text-gray-800 bg-white rounded-none
        border-0
        focus:outline-none
        transition
        accordion-button
        collapsed
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="py-4 px-5 accordion-body">
                <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Primary
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Secondary
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Success
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Danger
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Warning
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Info
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-700 uppercase bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Light
            </button>
            <button
              type="button"
              className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900 rounded-full focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
            >
              Dark
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
