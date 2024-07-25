"use client";

import { WixClientContext } from "@/context/wixContent";
import { useContext } from "react";
export const useWixClient = () => {
  return useContext(WixClientContext);
};
