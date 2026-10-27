import { useState } from "react";
import MyOffers from "../components/account/MyOffers";
import MyRequest from "../components/account/myRequest";
import MyWantedItems from "../components/account/MyWantedItems";
import MyProducts from "../components/account/MyProducts";

const tabs = [
  { key: "sentRequests", label: "בקשות ששלחתי" },
  { key: "receivedRequests", label: "בקשות שקיבלתי" },
  { key: "sentOffers", label: "הצעות ששלחתי" },
  { key: "receivedOffers", label: "הצעות שקיבלתי" },
  { key: "myWanted", label: "הבקשות שפרסמתי" },
  { key: "myProducts", label: "המוצרים שלי" },
];

const Account = () => {
  const [tab, setTab] = useState("receivedRequests");

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbf7f2] px-4 py-8 sm:px-7">
      <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-black text-[#352c3b]">
        האזור שלי<span className="text-[#d17d6b]">.</span>
      </h1>

      <div className="mx-auto mb-8 flex max-w-4xl flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${tab === t.key
                ? "bg-[#352c3b] text-white"
                : "border border-[#e7dad2] bg-white text-[#6f6170] hover:bg-[#fff1ec]"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "sentRequests" && <MyRequest box="sent" />}
      {tab === "receivedRequests" && <MyRequest box="received" />}
      {tab === "sentOffers" && <MyOffers box="sent" />}
      {tab === "receivedOffers" && <MyOffers box="received" />}
      {tab === "myWanted" && <MyWantedItems />}
      {tab === "myProducts" && <MyProducts />}
    </main>
  );
};

export default Account;