"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("dda40208-dcad-436e-9ad0-465bf587da26");
  }, []);

  return null;
};
