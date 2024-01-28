import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/redux/store/store";
import { searchProducts } from "../../../core/redux/thunks";
import { setSearchValue } from "../../../core/redux/slices";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const currentSearchValue = useAppSelector(
    (state) => state.product.searchValue
  );
  const [IsDebounce, setIsDebounce] = useState(true);
  const [searchString, setSearchString] = useState("");

  const handleSearching = (value?: string) => {
    setSearchString(value ?? "");
  };

  useEffect(() => {
    if (!searchString) {
      setIsDebounce(false);
      dispatch(setSearchValue(""));
    }
    setTimeout(() => setIsDebounce(!IsDebounce), 500);
  }, [IsDebounce, searchString]);

  useEffect(() => {
    if (
      !searchString ||
      !searchString.length ||
      currentSearchValue === searchString ||
      !IsDebounce
    ) {
      return;
    }
    dispatch(setSearchValue(searchString));
    dispatch(searchProducts({ value: searchString }));
  }, [searchString, IsDebounce, currentSearchValue]);

  return (
    <div className="py-2">
      <div className="">
        <SearchIcon fontSize="large" className="mx-1 my-2 align-text-middle" />
        <TextField
          className="w-25"
          onChange={(e) => handleSearching(e.target.value)}
          placeholder="Searching..."
        ></TextField>
      </div>
    </div>
  );
};
