import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import * as THREE from "three";
import { Scene } from "./Scene";


createRoot(document.getElementById("root")).render(
  <Scene />
);