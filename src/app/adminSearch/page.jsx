
"use client"
import SearchBar from "@/search/admin/SearchBar";
import SearchResultList from "@/search/admin/SearchResultList";
import { useState } from "react";


export default function AdminSearch() {
  const [results, setResults] = useState([]);
  return (
    <>
      <SearchBar setResults={setResults} />
      <SearchResultList results={results} />
    </>
  );
}
