"use client"
import SearchBar from "@/search/general/SearchBar"
import SearchResultList from "@/search/general/SearchResultList"
import { useState } from "react"


export default function GeneralSearch() {
  const [results, setResults]= useState([])
  return (
    <>
     <SearchBar setResults={setResults}/>
      <SearchResultList results={results}/>
    </>
  )
}
