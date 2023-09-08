import React from "react";

function page() {
  return (
    <div className="p-7">
      {/* En Tete */}
      <div className="flex flex-col gap-y-1 mb-4">
        <div className=" flex flex-row items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#F8AC67"
            class="w-6 h-6"
          >
            <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
          </svg>

          <span className="text-xl font-semibold">POS Order</span>
          <div className="w-4 h-4 rounded-full p-3 bg-gray-300 flex flex-row items-center justify-center">
            <span>0</span>
          </div>
        </div>
      </div>
      {/* Hero First */}
      <div className="border p-3 rounded-xl  shadow-md">
        <span className="mb-4 font-" >Select Date Range</span>
        <div className="grid-cols-4 grid gap-7 ">
          <div className="flex flex-col gap-y-3 justify-end ">
            <span>{null}</span>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected>All Branch</option>
              <option value="CA">Main Branch</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-3">
            <span>Start Date</span>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <span>End Date</span>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span></span>
            <button
              className="bg-[#7473E1] hover:bg-[#8786F6] text-white font-bold py-2.5 px-4 rounded
            focus:outline-none focus:shadow-outline
            text-center"
              type="button"
            >
              Show Data
            </button>
          </div>
        </div>
      </div>
      {/* Hero Two */}
      <div className="border px-3 py-7 rounded-b-xl mb-4 shadow-lg ">
        <div className="flex flex-row items-center justify-between mx-7 mb-5">
          <div className="flex flex-row items-center  ">
            <input
              type="search"
              class="shadow appearance-none border rounded w-fit py-2 px-3 
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="Search by ID customer or payement"
            ></input>
            <input
              type="submit"
              value="Search"
              className="bg-[#7473E1] hover:bg-[#8786F6] text-white font-bold py-2 px-4 rounded
            text-center cursor-pointer"
            />
          </div>
          <button
            className="transition ease-in delay-100 button border-[#7473E1] border hover:bg-[#8786F6] font-bold py-2 px-4 rounded
          text-center flex gap-3 items-center text-[#7473E1] hover:text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#7473E1"
              className="w-4 h-4 "
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Export</span>
          </button>
        </div>
        <table class="table-fixed w-full mb-7">
          <thead className="bg-gray-100 ">
            <tr>
              <th className="py-5 px-3">Sl</th>
              <th>Order</th>
              <th>Order Date</th>
              <th>Customer Info</th>
              <th> Branch</th>
              <th>Total Amount</th>
              <th>Order Status</th>
              <th>Order Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
            <span className="text-center flex items-center justify-center text-gray-500">Empty Data</span>
      </div>
    </div>
  );
}

export default page;
