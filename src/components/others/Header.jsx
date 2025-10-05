import React from "react";

function Header({ data }) {
  const handleLogOut = () => {
    localStorage.setItem("loginUser", "");
    window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-white font-bold text-xl">
        Hello <br />{" "}
        <p className="text-3xl font-bold">
          {data ? data?.firstName : "Admin"} 👋
        </p>
      </h2>
      <button
        className="bg-red-600 hover:bg-red-500 transition-all duration-100 cursor-pointer text-white px-4 py-2 rounded-md text-xl font-bold"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
