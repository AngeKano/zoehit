import Data from "../../../../public/Data/Data";
const { DataBuis_Old, DataBuis_Down } = Data;

export default function Dashboard() {
  return (
    <div className="p-7">
      <div className="flex flex-col gap-y-1 mb-4">
        <span className="text-xl font-semibold text-[#8786F6] ">
          Bienvenu, Ange.
        </span>
        <span className="font-medium">
          Surveillez vos analyses et statistiques commerciales
        </span>
      </div>
      {/* //Hero 1 */}
      <div className="border p-3 rounded-xl mb-4">
        <div className="flex flex-row justify-between items-center mb-4 px-5">
          <div className="flex flex-row gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
            <span>Dashboard Analyse</span>
          </div>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit
            focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected>Durée</option>
            <option value="CA">Aujourdhui</option>
            <option value="FR">Hier</option>
            <option value="US">Les derniers mois </option>
            <option value="DE">L'année derniere</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {DataBuis_Old.map((item) => (
            <div className="p-4 flex flex-col border-2  rounded-xl shadow-lg">
              <div className="flex flex-row-reverse">{item.Icon}</div>
              <span className="text-lg font-medium">{item.Label}</span>
              <span className="text-2xl font-bold">{item.qt_now}</span>
            </div>
          ))}
          {DataBuis_Down.map((item) => (
            <div className="p-4 flex flex-row bg-gray-100 justify-between rounded-xl items-center ">
              <div className="flex flex-row gap-4 items-center ">
                <div className="flex flex-row-reverse">{item.Icon}</div>
                <span className="text-lg font-medium">{item.Label}</span>
              </div>

              <span className="text-lg font-medium">{item.qt_now}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
