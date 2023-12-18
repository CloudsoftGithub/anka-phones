"use client";
import Link from "next/link";
import { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("/api/products", {
      cache: "no-store",
    }).then((response) =>
      response.json().then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
    );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="container section-bg">
      <div className=" d-flex justify-content-center align-items-center  mb-3 mb-2 text-justify">
        <Link
          className="btn border-0  back  shadow btn-sm mx-1"
          href="/allproducts"
        >
          <i className="bi bi-arrow-left mx-1"> </i>
        </Link>

        <button type="button" class="btn btl btn-lg position-relative ">
          Search using phone name.
        </button>
      </div>
      <div className="row d-flex justify-content-center align-items-center mx-4 ">
        <input
          type="text"
          className="shadow border-0 p-2 mb-2 rounded-2 mx-2 col-12 col-lg-6"
          placeholder="search for your product"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}
