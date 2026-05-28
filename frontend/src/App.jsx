import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  const [customerData, setCustomerData] = useState({
    razaoSocial: "",
    cnpj: "",
    responsavel: "",
    telefone: "",
    email: ""
  });

  const [search, setSearch] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");


const [products, setProducts] = useState(() => {

  const savedProducts = localStorage.getItem("puma-products");

  if (savedProducts) {
    return JSON.parse(savedProducts);
  }

  return [

{ code: "312944 24", descricao: "Velocity NITRO 5", tipo: "Running", genero: "Masculino", pdv: "999,99", rating: "" },
{ code: "312944 22", descricao: "Velocity NITRO 5", tipo: "Running", genero: "Masculino", pdv: "999,99", rating: "" },
{ code: "312944 17", descricao: "Velocity NITRO 5", tipo: "Running", genero: "Masculino", pdv: "999,99", rating: "" },
{ code: "312944 20", descricao: "Velocity NITRO 5", tipo: "Running", genero: "Masculino", pdv: "999,99", rating: "" },
{ code: "312945 18", descricao: "Velocity NITRO 5 Wns", tipo: "Running", genero: "Feminino", pdv: "999,99", rating: "" },
{ code: "312945 16", descricao: "Velocity NITRO 5 Wns", tipo: "Running", genero: "Feminino", pdv: "999,99", rating: "" },
{ code: "312945 21", descricao: "Velocity NITRO 5 Wns", tipo: "Running", genero: "Feminino", pdv: "999,99", rating: "" },
{ code: "312945 23", descricao: "Velocity NITRO 5 Wns", tipo: "Running", genero: "Feminino", pdv: "999,99", rating: "" },
{ code: "313486 01", descricao: "Action Pro TR", tipo: "Training", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "313486 18", descricao: "Action Pro TR", tipo: "Training", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "313533 01", descricao: "Action Pro TR Wns", tipo: "Training", genero: "Feminino", pdv: "699,99", rating: "" },
{ code: "313533 10", descricao: "Action Pro TR Wns", tipo: "Training", genero: "Feminino", pdv: "699,99", rating: "" },
{ code: "313533 11", descricao: "Action Pro TR Wns", tipo: "Training", genero: "Feminino", pdv: "699,99", rating: "" },
{ code: "313739 01", descricao: "Agile Lite TR", tipo: "Training", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313739 09", descricao: "Agile Lite TR", tipo: "Training", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313739 17", descricao: "Agile Lite TR", tipo: "Training", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313739 16", descricao: "Agile Lite TR", tipo: "Training", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313739 24", descricao: "Agile Lite TR", tipo: "Training", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313313 47", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 45", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 48", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 50", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 46", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 49", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 51", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 02", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 01", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 56", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313313 55", descricao: "Maxima Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 01", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 03", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 04", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 05", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 07", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 12", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 14", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 02", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314358 11", descricao: "Unleash Pro", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314402 01", descricao: "Unleash Pro Rhythm", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314402 02", descricao: "Unleash Pro Rhythm", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "314402 08", descricao: "Unleash Pro Rhythm", tipo: "Running", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "313498 20", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 19", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 22", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 18", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 02", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 14", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 01", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 17", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313498 25", descricao: "Scend Pro 3", tipo: "Running", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "313497 17", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 22", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 23", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 20", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 19", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 02", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 01", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "313497 24", descricao: "MaxStride Lite", tipo: "Running", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "314350 13", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 01", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 16", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 18", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 50", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 04", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 30", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 32", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314350 31", descricao: "Dasher Lite Wns BDP", tipo: "Running", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314349 03", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 50", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 21", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 01", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 02", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 38", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 33", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 30", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 36", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314349 31", descricao: "Dasher Lite BDP", tipo: "Running", genero: "Masculino", pdv: "399,99", rating: "" },
{ code: "314356 01", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 08", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 46", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 47", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 09", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 14", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 18", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 74", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 67", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 77", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 72", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314356 68", descricao: "Skyrocket Lite 2 BDP", tipo: "Running", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "314355 01", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 09", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 14", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 21", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 28", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 53", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 60", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 30", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 67", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 65", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 74", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "314355 62", descricao: "Skyrocket Lite 2 Wns BDP", tipo: "Running", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "313499 20", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 17", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 18", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 23", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 01", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 02", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 26", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "313499 27", descricao: "Flyer Lite 4", tipo: "Running", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "409336 02", descricao: "Puma Brooklyn SD", tipo: "Core", genero: "Unissex", pdv: "549,99", rating: "" },
{ code: "409336 01", descricao: "Puma Brooklyn SD", tipo: "Core", genero: "Unissex", pdv: "549,99", rating: "" },
{ code: "409338 03", descricao: "Puma Brooklyn OG", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "409338 04", descricao: "Puma Brooklyn OG", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "409338 01", descricao: "Puma Brooklyn OG", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "409338 02", descricao: "Puma Brooklyn OG", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "400214 06", descricao: "Rebound Retro SD", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "400214 01", descricao: "Rebound Retro SD", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "400214 19", descricao: "Rebound Retro SD", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "400214 18", descricao: "Rebound Retro SD", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 01", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 02", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 04", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 03", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 16", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "407179 18", descricao: "Profoam Galactic", tipo: "Core", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "409366 01", descricao: "Carina Wedge", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "409366 03", descricao: "Carina Wedge", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "409367 01", descricao: "Carina Wedge SD", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "409367 02", descricao: "Carina Wedge SD", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408798 01", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408798 02", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408798 03", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408798 04", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408798 05", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408798 50", descricao: "PUMA CATCH BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 02", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 03", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 05", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 07", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 09", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 12", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 13", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 50", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 51", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408797 52", descricao: "PUMA CATCH SD BDP", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407286 01", descricao: "Court Bae OG", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "407286 03", descricao: "Court Bae OG", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "407286 02", descricao: "Court Bae OG", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "407185 04", descricao: "Court Bae", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "407185 01", descricao: "Court Bae", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "407185 02", descricao: "Court Bae", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "402467 01", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 02", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 04", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 05", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 16", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 18", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 25", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 50", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 51", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 52", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 53", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402467 54", descricao: "X-Ray 3 BDP", tipo: "Core", genero: "Masculino", pdv: "599,99", rating: "" },
{ code: "402468 01", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 02", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 07", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 21", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 50", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 51", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 52", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "402468 53", descricao: "X-Ray 3 Wns BDP", tipo: "Core", genero: "Feminino", pdv: "599,99", rating: "" },
{ code: "400231 01", descricao: "Trinity 2 LT", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "400231 02", descricao: "Trinity 2 LT", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "400231 42", descricao: "Trinity 2 LT", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407348 01", descricao: "Shuffle Tech OG", tipo: "Core", genero: "Unissex", pdv: "549,99", rating: "" },
{ code: "407348 05", descricao: "Shuffle Tech OG", tipo: "Core", genero: "Unissex", pdv: "549,99", rating: "" },
{ code: "407157 07", descricao: "Shuffle Tech", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407157 02", descricao: "Shuffle Tech", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407157 01", descricao: "Shuffle Tech", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407157 03", descricao: "Shuffle Tech", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "407157 09", descricao: "Shuffle Tech", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "402596 04", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 07", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 14", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 06", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 01", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 02", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "402596 21", descricao: "Shuffle Downtown", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "403840 01", descricao: "Shuffle Downtown OG", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "403840 05", descricao: "Shuffle Downtown OG", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "403840 02", descricao: "Shuffle Downtown OG", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "403840 13", descricao: "Shuffle Downtown OG", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "403840 12", descricao: "Shuffle Downtown OG", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "402597 03", descricao: "Shuffle Downtown SD", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "402597 02", descricao: "Shuffle Downtown SD", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "402597 01", descricao: "Shuffle Downtown SD", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "402597 11", descricao: "Shuffle Downtown SD", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "402597 10", descricao: "Shuffle Downtown SD", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "404228 01", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 02", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 04", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 05", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 08", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 09", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 11", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 50", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 51", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 52", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 53", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 54", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "404228 58", descricao: "Park Lifestyle Easy SD BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "406050 01", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 02", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 09", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 52", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 55", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 56", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 57", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406050 58", descricao: "Park Lifestyle Easy SD Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "402464 01", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 02", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 06", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 09", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 10", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 50", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 51", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 52", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "402464 53", descricao: "Park Lifestyle OG BDP", tipo: "Core", genero: "Masculino", pdv: "549,99", rating: "" },
{ code: "406051 01", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406051 09", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406051 50", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406051 51", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406051 52", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "406051 53", descricao: "Park Lifestyle OG Wns BDP", tipo: "Core", genero: "Feminino", pdv: "549,99", rating: "" },
{ code: "404134 01", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 02", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 03", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 04", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 37", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 38", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 42", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 43", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 53", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 54", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 62", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 50", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 51", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "404134 52", descricao: "Rebound v6 Low BDP", tipo: "Core", genero: "Masculino", pdv: "449,99", rating: "" },
{ code: "399666 01", descricao: "ST Runner v4 Mesh", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "399666 03", descricao: "ST Runner v4 Mesh", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "399666 24", descricao: "ST Runner v4 Mesh", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "399666 02", descricao: "ST Runner v4 Mesh", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 45", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 07", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 02", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 72", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 73", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "397447 76", descricao: "Puma Club II Era", tipo: "Core", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "407170 05", descricao: "Puma Club LT", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "407170 02", descricao: "Puma Club LT", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "407170 01", descricao: "Puma Club LT", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "407170 07", descricao: "Puma Club LT", tipo: "Core", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "411774 02", descricao: "Carina Mary Jane", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "411774 01", descricao: "Carina Mary Jane", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "314379 03", descricao: "Softride Dani Slip On Wns", tipo: "Core", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314379 06", descricao: "Softride Dani Slip On Wns", tipo: "Core", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "314379 01", descricao: "Softride Dani Slip On Wns", tipo: "Core", genero: "Feminino", pdv: "399,99", rating: "" },
{ code: "400718 02", descricao: "Puma Club Klassika SD", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "400718 01", descricao: "Puma Club Klassika SD", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "406644 11", descricao: "CC Park Vulc", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "406644 13", descricao: "CC Park Vulc", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "406644 14", descricao: "CC Park Vulc", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "406644 15", descricao: "CC Park Vulc", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "406644 01", descricao: "CC Park Vulc", tipo: "Core", genero: "Unissex", pdv: "499,99", rating: "" },
{ code: "408796 08", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 13", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 14", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 01", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 02", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 03", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 06", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 22", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 50", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 51", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 52", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "408796 53", descricao: "Rebound Femme Low BDP", tipo: "Core", genero: "Feminino", pdv: "499,99", rating: "" },
{ code: "405885 01", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 03", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 04", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 05", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 06", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 14", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 16", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 50", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 51", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 52", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405885 53", descricao: "Carina 3.0 BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 01", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 02", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 03", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 51", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 52", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "405899 53", descricao: "Carina 3.0 SD BDP", tipo: "Core", genero: "Feminino", pdv: "449,99", rating: "" },
{ code: "408406 01", descricao: "Court Classic Clean SD BDP", tipo: "Core", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "408406 50", descricao: "Court Classic Clean SD BDP", tipo: "Core", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "408406 51", descricao: "Court Classic Clean SD BDP", tipo: "Core", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "408406 52", descricao: "Court Classic Clean SD BDP", tipo: "Core", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "408406 54", descricao: "Court Classic Clean SD BDP", tipo: "Core", genero: "Masculino", pdv: "379,99", rating: "" },
{ code: "408407 01", descricao: "Court Lally SD BDP", tipo: "Core", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "408407 02", descricao: "Court Lally SD BDP", tipo: "Core", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "408407 04", descricao: "Court Lally SD BDP", tipo: "Core", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "408407 06", descricao: "Court Lally SD BDP", tipo: "Core", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "408407 50", descricao: "Court Lally SD BDP", tipo: "Core", genero: "Feminino", pdv: "379,99", rating: "" },
{ code: "404439 01", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 02", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 03", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 04", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 08", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 51", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 52", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 53", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404439 54", descricao: "Court Lally BDP", tipo: "Core", genero: "Feminino", pdv: "349,99", rating: "" },
{ code: "404440 01", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 02", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 03", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 05", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 07", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 11", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 13", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 14", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 50", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 51", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "404440 52", descricao: "Court Classic Clean BDP", tipo: "Core", genero: "Masculino", pdv: "349,99", rating: "" },
{ code: "410089 02", descricao: "Puma Serve Buck", tipo: "Core", genero: "Unissex", pdv: "379,99", rating: "" },
{ code: "410089 01", descricao: "Puma Serve Buck", tipo: "Core", genero: "Unissex", pdv: "379,99", rating: "" },
{ code: "410089 03", descricao: "Puma Serve Buck", tipo: "Core", genero: "Unissex", pdv: "379,99", rating: "" },
{ code: "410089 04", descricao: "Puma Serve Buck", tipo: "Core", genero: "Unissex", pdv: "379,99", rating: "" },
{ code: "407188 02", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 03", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 01", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 04", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 06", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 09", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 10", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "407188 11", descricao: "Puma Serve", tipo: "Core", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "409428 01", descricao: "Softride ZeroG Slide LT", tipo: "Core", genero: "Unissex", pdv: "229,99", rating: "" },
{ code: "409428 02", descricao: "Softride ZeroG Slide LT", tipo: "Core", genero: "Unissex", pdv: "229,99", rating: "" },
{ code: "409428 04", descricao: "Softride ZeroG Slide LT", tipo: "Core", genero: "Unissex", pdv: "229,99", rating: "" },
{ code: "409428 03", descricao: "Softride ZeroG Slide LT", tipo: "Core", genero: "Unissex", pdv: "229,99", rating: "" },
{ code: "399706 01", descricao: "Leadcat 2.0", tipo: "Core", genero: "Unissex", pdv: "179,99", rating: "" },
{ code: "399706 03", descricao: "Leadcat 2.0", tipo: "Core", genero: "Unissex", pdv: "179,99", rating: "" },
{ code: "399706 02", descricao: "Leadcat 2.0", tipo: "Core", genero: "Unissex", pdv: "179,99", rating: "" },
{ code: "399706 08", descricao: "Leadcat 2.0", tipo: "Core", genero: "Unissex", pdv: "179,99", rating: "" },
{ code: "399706 04", descricao: "Leadcat 2.0", tipo: "Core", genero: "Unissex", pdv: "179,99", rating: "" },
{ code: "394254 13", descricao: "Puma Rickie Classic V Inf", tipo: "Kids", genero: "Unissex", pdv: "279,99", rating: "" },
{ code: "394254 08", descricao: "Puma Rickie Classic V Inf", tipo: "Kids", genero: "Unissex", pdv: "279,99", rating: "" },
{ code: "394254 04", descricao: "Puma Rickie Classic V Inf", tipo: "Kids", genero: "Unissex", pdv: "279,99", rating: "" },
{ code: "394254 03", descricao: "Puma Rickie Classic V Inf", tipo: "Kids", genero: "Unissex", pdv: "279,99", rating: "" },
{ code: "394253 13", descricao: "Puma Rickie Classic V PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "394253 04", descricao: "Puma Rickie Classic V PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "394253 03", descricao: "Puma Rickie Classic V PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "394253 08", descricao: "Puma Rickie Classic V PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "394252 08", descricao: "Puma Rickie Classic JR", tipo: "Kids", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "394252 13", descricao: "Puma Rickie Classic JR", tipo: "Kids", genero: "Unissex", pdv: "349,99", rating: "" },
{ code: "314732 01", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314732 02", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314732 03", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314732 04", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314732 05", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314732 06", descricao: "Sky Runner Slip On Bold Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314733 01", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314733 02", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314733 03", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314733 04", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314733 05", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314733 06", descricao: "Sky Runner Slip On Bold PS", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "399741 01", descricao: "ST Runner v4 NL V Inf", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "399741 24", descricao: "ST Runner v4 NL V Inf", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "399741 25", descricao: "ST Runner v4 NL V Inf", tipo: "Kids", genero: "Unissex", pdv: "329,99", rating: "" },
{ code: "314715 05", descricao: "FlexFocus 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314715 01", descricao: "FlexFocus 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314715 08", descricao: "FlexFocus 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314715 07", descricao: "FlexFocus 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314715 06", descricao: "FlexFocus 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314046 01", descricao: "Flyer 4 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314046 03", descricao: "Flyer 4 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "314046 09", descricao: "Flyer 4 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "312415 01", descricao: "Rebound Slam Lo AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "312415 26", descricao: "Skyrocket 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "312415 24", descricao: "Skyrocket 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "312415 27", descricao: "Skyrocket 2 AC+ Inf", tipo: "Kids", genero: "Unissex", pdv: "299,99", rating: "" },
{ code: "401480 01", descricao: "Carina 3.0 V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "401480 02", descricao: "Carina 3.0 V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "401480 23", descricao: "Carina 3.0 V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "401480 22", descricao: "Carina 3.0 V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "402283 01", descricao: "Carina 3.0 Holo 2.0 V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "409385 01", descricao: "Carina 3.0 Metallic Denim V Inf", tipo: "Kids", genero: "Feminino", pdv: "329,99", rating: "" },
{ code: "387671 53", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "387671 55", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "387671 64", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "387671 65", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "387671 66", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "387671 69", descricao: "X-Ray AC Inf BDP", tipo: "Kids", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109565 01", descricao: "ULTRA 7 PLAY FG/AG", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109570 01", descricao: "ULTRA 7 PLAY TT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109567 01", descricao: "ULTRA 7 PLAY IT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109580 01", descricao: "ULTRA 7 PLAY V TT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109576 01", descricao: "ULTRA 7 PLAY IT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109577 01", descricao: "ULTRA 7 PLAY TT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109409 01", descricao: "FUTURE 10 ULTIMATE FG", tipo: "Football", genero: "Unissex", pdv: "2099,99", rating: "" },
{ code: "109409 03", descricao: "FUTURE 10 ULTIMATE FG", tipo: "Football", genero: "Unissex", pdv: "2099,99", rating: "" },
{ code: "109882 01", descricao: "FUTURE 10 MATCH FG/AG", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109882 03", descricao: "FUTURE 10 MATCH FG/AG", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109883 01", descricao: "FUTURE 10 MATCH IT", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109883 03", descricao: "FUTURE 10 MATCH IT", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109884 01", descricao: "FUTURE 10 MATCH TT", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109884 03", descricao: "FUTURE 10 MATCH TT", tipo: "Football", genero: "Unissex", pdv: "699,99", rating: "" },
{ code: "109885 01", descricao: "FUTURE 10 PLAY FG/AG", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109885 03", descricao: "FUTURE 10 PLAY FG/AG", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109886 01", descricao: "FUTURE 10 PLAY IT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109886 03", descricao: "FUTURE 10 PLAY IT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109887 01", descricao: "FUTURE 10 PLAY TT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109887 03", descricao: "FUTURE 10 PLAY TT", tipo: "Football", genero: "Unissex", pdv: "449,99", rating: "" },
{ code: "109888 01", descricao: "FUTURE 10 PLAY IT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109888 03", descricao: "FUTURE 10 PLAY IT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109889 01", descricao: "FUTURE 10 PLAY TT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109889 03", descricao: "FUTURE 10 PLAY TT Jr", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109890 01", descricao: "FUTURE 10 PLAY IT V PS BDP", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109890 03", descricao: "FUTURE 10 PLAY IT V PS BDP", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109891 01", descricao: "FUTURE 10 PLAY TT V PS BDP", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109891 03", descricao: "FUTURE 10 PLAY TT V PS BDP", tipo: "Football", genero: "Unissex", pdv: "399,99", rating: "" },
{ code: "109552 01", descricao: "ULTRA NITRO 7 MATCH FG/AG", tipo: "Football", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "109552 03", descricao: "ULTRA NITRO 7 MATCH FG/AG", tipo: "Football", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "109557 01", descricao: "ULTRA NITRO 7 MATCH TT", tipo: "Football", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "109557 03", descricao: "ULTRA NITRO 7 MATCH TT", tipo: "Football", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "106455 01", descricao: "King FG BDP", tipo: "Football", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "106455 02", descricao: "King FG BDP", tipo: "Football", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "106456 01", descricao: "King TT BDP", tipo: "Football", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "106456 02", descricao: "King TT BDP", tipo: "Football", genero: "Unissex", pdv: "599,99", rating: "" },
{ code: "306342 02", descricao: "Ferrari Rebound Slam Lo", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "306342 01", descricao: "Ferrari Rebound Slam Lo", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309521 03", descricao: "Ferrari Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309521 04", descricao: "Ferrari Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309556 02", descricao: "AMF1 Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309556 01", descricao: "AMF1 Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309567 02", descricao: "BMW MMS Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309567 01", descricao: "BMW MMS Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309549 02", descricao: "McLaren Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },
{ code: "309549 01", descricao: "McLaren Caven III", tipo: "Motorsport", genero: "Unissex", pdv: "649,99", rating: "" },

];

});

  // =====================================
  // URL DO BACKEND ONLINE
  // =====================================

  const API_URL = "https://duilsonss27.onrender.com";

  const formatCNPJ = (value) => {

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/, "$1.$2");

    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");

    value = value.replace(/(\d{4})(\d)/, "$1-$2");

    return value.slice(0, 18);

  };

  const formatPhone = (value) => {

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");

    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    return value.slice(0, 15);

  };

  const updateRating = (productCode, value) => {

  const updated = products.map((product) => {

    if (product.code === productCode) {

      return {
        ...product,
        rating: product.rating === value ? "" : value
      };

    }

    return product;

  });

  setProducts(updated);

};

useEffect(() => {

  localStorage.setItem(
    "puma-products",
    JSON.stringify(products)
  );

}, [products]);

  const filteredProducts = products.filter((product) => {

    return (
      product.code
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      product.descricao
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  });

  const selectedProducts = products.filter(
    (product) => product.rating !== ""
  );

  // =========================
  // VALIDAR CAMPOS
  // =========================

  const validateFields = () => {

    if (!customerData.razaoSocial)
      return "Preencha a Razão Social";

    if (!customerData.cnpj)
      return "Preencha o CNPJ";

    if (!customerData.responsavel)
      return "Preencha o nome do Responsável";

    if (!customerData.telefone)
      return "Preencha o Telefone";

    if (!customerData.email)
      return "Preencha o E-mail";

    return null;

  };

  // =========================
  // EXCEL
  // =========================

  const generateExcel = async () => {

    const validationError = validateFields();

    if (validationError) {

      alert(validationError);

      return;

    }

    try {

      await axios.post(
        `${API_URL}/generate-excel`,
        {
          customerData,
          products: selectedProducts
        }
      );

      alert("Excel gerado com sucesso");

    } catch (error) {

      console.log(error);

      alert("Erro ao gerar Excel");

    }

  };

  // =========================
  // PDF
  // =========================

  const generatePDF = async () => {

    const validationError = validateFields();

    if (validationError) {

      alert(validationError);

      return;

    }

    try {

      await axios.post(
        `${API_URL}/generate-pdf`,
        {
          customerData,
          products: selectedProducts
        }
      );

      alert("PDF gerado com sucesso");

    } catch (error) {

      console.log(error);

      alert("Erro ao gerar PDF");

    }

  };

  // =========================
  // EMAIL
  // =========================

  const sendEmail = async () => {

  const validationError = validateFields();

  if (validationError) {

    alert(validationError);

    return;

  }

  const confirmacao = window.confirm(
    "A cópia será enviada ao seu email, clique em OK e aguarde o envio."
  );

  if (!confirmacao) return;

  try {

    setSending(true);


setStatus(
  "⏳ Processando sua solicitação. Aguarde alguns segundos..."
);

    await axios.post(
      `${API_URL}/send-email`,
      {
        customerData,
        products: selectedProducts
      }
    );

setStatus(
  "✅ Sortimento enviado com sucesso! Uma cópia foi enviada para o seu e-mail."
);
    setTimeout(() => {
      setStatus("");
    }, 4000);

  } catch (error) {

    console.log(error);

    setStatus("❌ Erro ao enviar formulário");

  } finally {

    setSending(false);

  }

};

  return (

    <div className="container">

      <div className="topbar">

        <div className="logo">
          PROGRAMAÇÃO PUMA SS27
        </div>

        <div className="actions">

          <button
            className="gmail"
             onClick={sendEmail}
             disabled={sending}>
             {sending ? "Enviando..." : "Salvar"}
          </button>

        </div>

      </div>

      {status && (
  <div className="status-box">
    {status}
  </div>
)}


      <div className="form-container">

        <input
          placeholder="RAZÃO SOCIAL"
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              razaoSocial: e.target.value
            })
          }
        />

        <input
          placeholder="CNPJ"
          value={customerData.cnpj}
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              cnpj: formatCNPJ(e.target.value)
            })
          }
        />

        <input
          placeholder="NOME DO RESPONSÁVEL"
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              responsavel: e.target.value
            })
          }
        />

        <input
          placeholder="TELEFONE"
          value={customerData.telefone}
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              telefone: formatPhone(e.target.value)
            })
          }
        />

        <input
          placeholder="E-MAIL"
          onChange={(e) =>
            setCustomerData({
              ...customerData,
              email: e.target.value
            })
          }
        />

      </div>

      <input
        className="search-input"
        placeholder="Buscar por código ou descrição..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Código</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Gênero</th>
              <th>PDV</th>
              <th>Gostei</th>
              <th>Talvez</th>
              <th>Não gostei</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr key={product.code}>

                <td data-label="Código">
                  {product.code}
                </td>

                <td data-label="Descrição">
                  {product.descricao}
                </td>

                <td data-label="Tipo">
                  {product.tipo}
                </td>

                <td data-label="Gênero">
                  {product.genero}
                </td>

                <td data-label="PDV">
                  {product.pdv}
                </td>

                <td data-label="Gostei">

                  <input
  type="checkbox"
  checked={product.rating === "Gostei"}
  onChange={() =>
    updateRating(product.code, "Gostei")
  }
/>

</td>

<td data-label="Talvez">

  <input
    type="checkbox"
    checked={product.rating === "Talvez"}
    onChange={() =>
      updateRating(product.code, "Talvez")
    }
  />

</td>

<td data-label="Não gostei">

  <input
    type="checkbox"
    checked={product.rating === "Não gostei"}
    onChange={() =>
      updateRating(product.code, "Não gostei")
    }
  />

</td>

</tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}
