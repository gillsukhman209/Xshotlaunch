import React from "react";

import { useRouter } from "next/navigation";
function Contact({ contact }) {
  let balance = contact.totalLent - contact.totalBorrowed;

  const router = useRouter();
  // Check if balance is a number
  if (isNaN(balance)) {
    return null; // Hide the component if balance is NaN
  }

  let textBalance = Math.abs(balance);
  const owesMessage =
    balance > 0 ? `You owe $${textBalance}` : `Owes you $${textBalance}`;

  return (
    <div className="flex h-[100px] w-full items-center justify-between rounded-lg bg-white p-4 shadow-xl">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-semibold text-gray-800">{contact.name}</h3>
          {balance !== 0 && (
            <p
              className={`text-sm font-semibold ${
                balance > 0 ? "text-red-600" : "text-green-600"
              }`}
            >
              {owesMessage}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => router.push(`/api/mongo/contact/${contact.uniqueCode}`)}
        className="max-w-[120px] text-xs lg:text-sm lg:max-w-[140px] rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        View Contact
      </button>
    </div>
  );
}

export default Contact;
