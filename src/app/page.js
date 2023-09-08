"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [connexion, setConnexion] = useState(true);
  const [restauranat, setRestaurant] = useState(true);
  const [client, setClient] = useState(false);
  const [admin, setAdmin] = useState(false);
  return (
    <main className="flex min-h-screen flex-row overflow-hidden">
      <section className="flex-1 bg-[#9C9CF4] h-screen relative">
        <Image
          src="/images/bgfood.png"
          width={800}
          height={800}
          alt="Picture of the author"
          class="absolute -bottom-36 "
        />
        <Image
          src="/images/logo.png"
          width={300}
          height={300}
          alt="Picture of the author"
          class="absolute left-52 "
        />
      </section>
      <section className="flex-1 h-screen items-center bg-white justify-center flex">
        {/* Connexion */}
        <div
          className={
            connexion
              ? "flex flex-col h-fit p-4 w-[70%] "
              : "hidden flex-col h-fit  p-4 w-[70%]"
          }
        >
          <div>
            <span className="font-bold text-5xl mb-5">Connexion</span>
          </div>

          <span className="font-normal text-lg text-gray-500 mb-4">
            Choisissez votre type de profile
          </span>
          {/* Mode de connexion */}
          <div className="flex gap-x-5 mb-6">
            <button
              onClick={() => {
                setRestaurant(true);
                setClient(false);
                setAdmin(false);
              }}
              className={
                restauranat
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Restaurant
            </button>

            <button
              onClick={() => {
                setClient(true);
                setRestaurant(false);
                setAdmin(false);
              }}
              className={
                client
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Client
            </button>

            <button
              onClick={() => {
                setAdmin(true);
                setRestaurant(false);
                setClient(false);
              }}
              className={
                admin
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Admin
            </button>
          </div>
          {/* Formulare  */}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-3 px-4 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              focus:border-[#7473E1]
              "
              id="username"
              type="email"
              placeholder=""
            />
          </div>
          <div class="mb-4">
            <div className="flex flex-row justify-between">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Mot de passe
              </label>
              <span className="underline text-sm ">oubliez?</span>
            </div>

            <input
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder=""
            />
          </div>
          <a
            className="bg-[#7473E1] hover:bg-[#8786F6] text-white font-bold py-3 px-4 rounded
            focus:outline-none focus:shadow-outline mb-4
            text-center"
            type="button"
            href="/admin/dashboard"
          >
            Connexion
          </a>
          <span className="text-sm text-gray-600 text-center">
            Creez vous un compte restaurant,{" "}
            <button
              className="underline transition ease-in-out delay-150 "
              onClick={() => setConnexion(!connexion)}
            >
              ici
            </button>
          </span>
        </div>
        {/* Inscription */}
        <div
          className={
            connexion
              ? "hidden flex-col h-fit  p-4 w-[70%]"
              : "flex flex-col h-fit p-4 w-[70%]"
          }
        >
          <span className="font-bold text-5xl mb-5">Inscription</span>

          <span className="font-normal text-lg text-gray-500 mb-4">
            Choisissez votre type de profile
          </span>
          {/* Mode de connexion */}
          <div className="flex gap-x-5 mb-6">
            <button
              onClick={() => {
                setRestaurant(true);
                setClient(false);
                setAdmin(false);
              }}
              className={
                restauranat
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Restaurant
            </button>

            <button
              onClick={() => {
                setClient(true);
                setRestaurant(false);
                setAdmin(false);
              }}
              className={
                client
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Client
            </button>

            <button
              onClick={() => {
                setAdmin(true);
                setRestaurant(false);
                setClient(false);
              }}
              className={
                admin
                  ? "bg-[#7473E1] text-white rounded-full px-4 py-3 cursor-pointer"
                  : "border-[#8786F6] border text-black rounded-full px-4 py-3 cursor-pointer"
              }
            >
              Admin
            </button>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Nom complet
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-3 px-4 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              focus:border-[#7473E1]
              "
              id="username"
              type="email"
              placeholder=""
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-3 px-4 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              focus:border-[#7473E1]
              "
              id="username"
              type="email"
              placeholder=""
            />
          </div>
          <div class="mb-4">
            <div className="flex flex-row justify-between">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Mot de passe
              </label>
            </div>

            <input
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
            />
          </div>
          <button
            class="bg-[#7473E1] hover:bg-[#8786F6] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            type="button"
          >
            Connexion
          </button>
          <span className="text-sm text-gray-600 text-center">
            Creez vous un compte restaurant,{" "}
            <button
              className="underline"
              onClick={() => setConnexion(!connexion)}
            >
              ici
            </button>
          </span>
        </div>
      </section>
    </main>
  );
}
