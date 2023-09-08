"use client";
import Image from "next/image";
import Data from "../../../public/Data/Data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { DataNav } = Data;
export default function DashboardLayout({ children }) {
  const path = usePathname();
  return (
    <section className="min-h-screen bg-white flex flex-row">
      {/* Section de Gauche */}
      <section className="flex flex-col w-[17%] h-screen border-r border-r-gray-200  bg-white fixed">
        <div className=" px-4 pb-4 overflow-auto overflow-x-hidden">
          <div className="flex flex-row justify-between items-center px-2 py-3 mb-4">
            <Image src={"/images/logo.png"} width={100} height={100} />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>

          <input
            class="shadow border rounded w-full py-2 px-3 
            text-gray-700 focus:outline-none focus:shadow-outline mb-1"
            type="search"
            placeholder="Search Menu..."
          />
          <div className="flex flex-col gap-4 ">
            {DataNav.map((item) => (
              <div>
                <span className="uppercase font-bold text-gray-400 px-2 mb-4">
                  {item.Label}
                </span>
                <div className="flex flex-col gap-4 ">
                  {item.Option.map((item) =>
                    item.Option ? (
                      <details className="group">
                        <summary className="flex justify-between items-center py-2 px-3 font-medium cursor-pointer list-none">
                          <div className="flex flex-row gap-2 items-center">
                            {item.Icon}
                            <span>{item.Label}</span>
                          </div>

                          <span className="transition group-open:rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>
                        {item.Option.map((item) => (
                          <div className="flex flex-row justify-between items-center px-5 py-4">
                            <div className="flex flex-row items-center gap-5">
                              <div className="w-1 h-1  rounded-full bg-gray-400"></div>
                              <span>{item.Label}</span>
                            </div>
                            <div className="w-3 h-3 p-3 rounded-full bg-red-100 flex items-center justify-center">
                              <span className="text-sm text-red-400">0</span>
                            </div>
                          </div>
                        ))}
                      </details>
                    ) : (
                      <Link href={item.lien}>
                        <div
                          className={
                            path == item.lien
                              ? "flex flex-row justify-between items-center py-2 px-3 cursor-pointer bg-[#CDCCFF]"
                              : "flex flex-row justify-between items-center py-2 px-3 cursor-pointer"
                          }
                        >
                          <div className="flex flex-row gap-2 items-center">
                            {path == item.lien ? item.IconActive : item.Icon}
                            <span
                              className={
                                path == item.lien
                                  ? "font-normal normal-case text-[#2A2979]"
                                  : "font-normal normal-case"
                              }
                            >
                              {item.Label}
                            </span>
                          </div>
                          {item.Option ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          ) : null}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section nav */}
      <section className=" flex-1 w-[83%]">
        <nav
          className="flex flex-row-reverse gap-7 bg-white  white items-center ml-[17%] w-[83%]
        py-3 px-6 border-b fixed border-b-gray-200 "
        >
          <div></div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-right font-semibold">Ange Kano</span>
              <span className="text-right font-light">Master Admin</span>
            </div>
            <div className="p-3 rounded-full bg-gray-100 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
              <div
                className="absolute bg-green-500 rounded-full p-2
               border-white border-2 left-9 bottom-0"
              ></div>
            </div>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <div className="rounded-full w-5 h-5 flex items-center justify-center bg-red-500 absolute -top-2 -right-2">
              <span className="text-white text-sm">0</span>
            </div>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <div className="rounded-full w-5 h-5 flex items-center justify-center bg-red-500 absolute -top-2 -right-2">
              <span className="text-white text-sm">0</span>
            </div>
          </div>
        </nav>
        <section className="ml-[17%] mt-[5%] ">{children}</section>
      </section>
    </section>
  );
}
