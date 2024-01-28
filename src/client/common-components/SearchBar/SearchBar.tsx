import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../core/redux/store/store";
import { searchProducts } from "../../../core/redux/thunks";
import { setIsSearchingProduct } from "../../../core/redux/slices";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [IsDebounce, setIsDebounce] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSearching = (value?: string) => {
    if (!value) {
      dispatch(setIsSearchingProduct(false));
      return;
    }
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) {
      setIsDebounce(false);
    }
    setTimeout(() => setIsDebounce(!IsDebounce), 500);
  }, [IsDebounce, searchValue]);

  useEffect(() => {
    if (!searchValue || !searchValue.length) {
      return;
    }
    if (!IsDebounce) {
      return;
    }
    dispatch(setIsSearchingProduct(true));
    dispatch(searchProducts({ value: searchValue }));
    setSearchValue("");
  }, [searchValue, IsDebounce]);

  return (
    <div className="py-2">
      <div className="">
        <SearchIcon fontSize="large" className="mx-1 my-2 align-text-middle" />
        <TextField
          onChange={(e) => handleSearching(e.target.value)}
          placeholder="Searching..."
        ></TextField>
      </div>
    </div>
  );
};
