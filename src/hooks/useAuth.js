import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default ()=> useContext(AuthContext);