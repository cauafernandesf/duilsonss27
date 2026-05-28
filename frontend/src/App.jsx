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
{
  code: "312944",
  descricao: "Velocity NITRO 5",
  tipo: "Running",
  genero: "Masculino",
  pdv: "999,99",
  rating: ""
},
{
  code: "312945",
  descricao: "Velocity NITRO 5 Wns",
  tipo: "Running",
  genero: "Feminino",
  pdv: "999,99",
  rating: ""
},
{
  code: "313486",
  descricao: "Action Pro TR",
  tipo: "Training",
  genero: "Unissex",
  pdv: "699,99",
  rating: ""
},
{
  code: "313533",
  descricao: "Action Pro TR Wns",
  tipo: "Training",
  genero: "Feminino",
  pdv: "699,99",
  rating: ""
},
{
  code: "313739",
  descricao: "Agile Lite TR",
  tipo: "Training",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "313313",
  descricao: "Maxima Pro",
  tipo: "Running",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "314358",
  descricao: "Unleash Pro",
  tipo: "Running",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "314402",
  descricao: "Unleash Pro Rhythm",
  tipo: "Running",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "313498",
  descricao: "Scend Pro 3",
  tipo: "Running",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "313497",
  descricao: "MaxStride Lite",
  tipo: "Running",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "314350",
  descricao: "Dasher Lite Wns BDP",
  tipo: "Running",
  genero: "Feminino",
  pdv: "399,99",
  rating: ""
},
{
  code: "314349",
  descricao: "Dasher Lite BDP",
  tipo: "Running",
  genero: "Masculino",
  pdv: "399,99",
  rating: ""
},
{
  code: "314356",
  descricao: "Skyrocket Lite 2 BDP",
  tipo: "Running",
  genero: "Masculino",
  pdv: "379,99",
  rating: ""
},
{
  code: "314355",
  descricao: "Skyrocket Lite 2 Wns BDP",
  tipo: "Running",
  genero: "Feminino",
  pdv: "379,99",
  rating: ""
},
{
  code: "313499",
  descricao: "Flyer Lite 4",
  tipo: "Running",
  genero: "Unissex",
  pdv: "349,99",
  rating: ""
},
{
  code: "409336",
  descricao: "Puma Brooklyn SD",
  tipo: "Core",
  genero: "Unissex",
  pdv: "549,99",
  rating: ""
},
{
  code: "409338",
  descricao: "Puma Brooklyn OG",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "400214",
  descricao: "Rebound Retro SD",
  tipo: "Core",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "407179",
  descricao: "Profoam Galactic",
  tipo: "Core",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "409366",
  descricao: "Carina Wedge",
  tipo: "Core",
  genero: "Feminino",
  pdv: "499,99",
  rating: ""
},
{
  code: "409367",
  descricao: "Carina Wedge SD",
  tipo: "Core",
  genero: "Feminino",
  pdv: "499,99",
  rating: ""
},
{
  code: "408798",
  descricao: "PUMA CATCH BDP",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "408797",
  descricao: "PUMA CATCH SD BDP",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "407286",
  descricao: "Court Bae OG",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "407185",
  descricao: "Court Bae",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "402467",
  descricao: "X-Ray 3 BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "599,99",
  rating: ""
},
{
  code: "402468",
  descricao: "X-Ray 3 Wns BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "599,99",
  rating: ""
},
{
  code: "400231",
  descricao: "Trinity 2 LT",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "407348",
  descricao: "Shuffle Tech OG",
  tipo: "Core",
  genero: "Unissex",
  pdv: "549,99",
  rating: ""
},
{
  code: "407157",
  descricao: "Shuffle Tech",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "402596",
  descricao: "Shuffle Downtown",
  tipo: "Core",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "403840",
  descricao: "Shuffle Downtown OG",
  tipo: "Core",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "402597",
  descricao: "Shuffle Downtown SD",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},


{
  code: "404228",
  descricao: "Park Lifestyle Easy SD BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "549,99",
  rating: ""
},
{
  code: "406050",
  descricao: "Park Lifestyle Easy SD Wns BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "549,99",
  rating: ""
},
{
  code: "402464",
  descricao: "Park Lifestyle OG BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "549,99",
  rating: ""
},
{
  code: "406051",
  descricao: "Park Lifestyle OG Wns BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "549,99",
  rating: ""
},
{
  code: "404134",
  descricao: "Rebound v6 Low BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "449,99",
  rating: ""
},
{
  code: "399666",
  descricao: "ST Runner v4 Mesh",
  tipo: "Core",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "397447",
  descricao: "Puma Club II Era",
  tipo: "Core",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "407170",
  descricao: "Puma Club LT",
  tipo: "Core",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "411774",
  descricao: "Carina Mary Jane",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "314379",
  descricao: "Softride Dani Slip On Wns",
  tipo: "Core",
  genero: "Feminino",
  pdv: "399,99",
  rating: ""
},
{
  code: "400718",
  descricao: "Puma Club Klassika SD",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "406644",
  descricao: "CC Park Vulc",
  tipo: "Core",
  genero: "Unissex",
  pdv: "499,99",
  rating: ""
},
{
  code: "408796",
  descricao: "Rebound Femme Low BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "499,99",
  rating: ""
},
{
  code: "405885",
  descricao: "Carina 3.0 BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "405899",
  descricao: "Carina 3.0 SD BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "449,99",
  rating: ""
},
{
  code: "408406",
  descricao: "Court Classic Clean SD BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "379,99",
  rating: ""
},
{
  code: "408407",
  descricao: "Court Lally SD BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "379,99",
  rating: ""
},
{
  code: "404439",
  descricao: "Court Lally BDP",
  tipo: "Core",
  genero: "Feminino",
  pdv: "349,99",
  rating: ""
},
{
  code: "404440",
  descricao: "Court Classic Clean BDP",
  tipo: "Core",
  genero: "Masculino",
  pdv: "349,99",
  rating: ""
},
{
  code: "410089",
  descricao: "Puma Serve Buck",
  tipo: "Core",
  genero: "Unissex",
  pdv: "379,99",
  rating: ""
},
{
  code: "407188",
  descricao: "Puma Serve",
  tipo: "Core",
  genero: "Unissex",
  pdv: "349,99",
  rating: ""
},
{
  code: "409428",
  descricao: "Softride ZeroG Slide LT",
  tipo: "Core",
  genero: "Unissex",
  pdv: "229,99",
  rating: ""
},
{
  code: "399706",
  descricao: "Leadcat 2.0",
  tipo: "Core",
  genero: "Unissex",
  pdv: "179,99",
  rating: ""
},
{
  code: "394254",
  descricao: "Puma Rickie Classic V Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "279,99",
  rating: ""
},
{
  code: "394253",
  descricao: "Puma Rickie Classic V PS",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "329,99",
  rating: ""
},
{
  code: "394252",
  descricao: "Puma Rickie Classic JR",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "349,99",
  rating: ""
},
{
  code: "314732",
  descricao: "Sky Runner Slip On Bold Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "299,99",
  rating: ""
},
{
  code: "314733",
  descricao: "Sky Runner Slip On Bold PS",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "329,99",
  rating: ""
},
{
  code: "399741",
  descricao: "ST Runner v4 NL V Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "329,99",
  rating: ""
},
{
  code: "314715",
  descricao: "FlexFocus 2 AC+ Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "299,99",
  rating: ""
},
{
  code: "314046",
  descricao: "Flyer 4 AC+ Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "299,99",
  rating: ""
},
{
  code: "312415",
  descricao: "Rebound Slam Lo AC+ Inf",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "299,99",
  rating: ""
},
{
  code: "401480",
  descricao: "Carina 3.0 V Inf",
  tipo: "Kids",
  genero: "Feminino",
  pdv: "329,99",
  rating: ""
},
{
  code: "402283",
  descricao: "Carina 3.0 Holo 2.0 V Inf",
  tipo: "Kids",
  genero: "Feminino",
  pdv: "329,99",
  rating: ""
},
{
  code: "409385",
  descricao: "Carina 3.0 Metallic Denim V Inf",
  tipo: "Kids",
  genero: "Feminino",
  pdv: "329,99",
  rating: ""
},
{
  code: "387671",
  descricao: "X-Ray AC Inf BDP",
  tipo: "Kids",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109565",
  descricao: "ULTRA 7 PLAY FG/AG",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109570",
  descricao: "ULTRA 7 PLAY TT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109567",
  descricao: "ULTRA 7 PLAY IT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109580",
  descricao: "ULTRA 7 PLAY V TT Jr",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109576",
  descricao: "ULTRA 7 PLAY IT Jr",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109577",
  descricao: "ULTRA 7 PLAY TT Jr",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109409",
  descricao: "FUTURE 10 ULTIMATE FG",
  tipo: "Football",
  genero: "Unissex",
  pdv: "2099,99",
  rating: ""
},
{
  code: "109882",
  descricao: "FUTURE 10 MATCH FG/AG",
  tipo: "Football",
  genero: "Unissex",
  pdv: "699,99",
  rating: ""
},
{
  code: "109883",
  descricao: "FUTURE 10 MATCH IT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "699,99",
  rating: ""
},
{
  code: "109884",
  descricao: "FUTURE 10 MATCH TT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "699,99",
  rating: ""
},
{
  code: "109885",
  descricao: "FUTURE 10 PLAY FG/AG",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109886",
  descricao: "FUTURE 10 PLAY IT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109887",
  descricao: "FUTURE 10 PLAY TT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "449,99",
  rating: ""
},
{
  code: "109888",
  descricao: "FUTURE 10 PLAY IT Jr",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109889",
  descricao: "FUTURE 10 PLAY TT Jr",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109890",
  descricao: "FUTURE 10 PLAY IT V PS BDP",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109891",
  descricao: "FUTURE 10 PLAY TT V PS BDP",
  tipo: "Football",
  genero: "Unissex",
  pdv: "399,99",
  rating: ""
},
{
  code: "109552",
  descricao: "ULTRA NITRO 7 MATCH FG/AG",
  tipo: "Football",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "109557",
  descricao: "ULTRA NITRO 7 MATCH TT",
  tipo: "Football",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "106455",
  descricao: "King FG BDP",
  tipo: "Football",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "106456",
  descricao: "King TT BDP",
  tipo: "Football",
  genero: "Unissex",
  pdv: "599,99",
  rating: ""
},
{
  code: "306342",
  descricao: "Ferrari Rebound Slam Lo",
  tipo: "Motorsport",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "309521",
  descricao: "Ferrari Caven III",
  tipo: "Motorsport",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "309556",
  descricao: "AMF1 Caven III",
  tipo: "Motorsport",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "309567",
  descricao: "BMW MMS Caven III",
  tipo: "Motorsport",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
},
{
  code: "309549",
  descricao: "McLaren Caven III",
  tipo: "Motorsport",
  genero: "Unissex",
  pdv: "649,99",
  rating: ""
}


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

    setStatus("Validando informações...");

    setTimeout(() => {
      setStatus("Gerando documentos...");
    }, 1000);

    setTimeout(() => {
      setStatus("Enviando formulário...");
    }, 2500);

    await axios.post(
      `${API_URL}/send-email`,
      {
        customerData,
        products: selectedProducts
      }
    );

    setStatus("✅ Formulário enviado com sucesso!");

    setTimeout(() => {
      setStatus("");
    }, 3000);

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
          PROGRAMAÇÃO PUMA SS27 - GRUPO DUILSON
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
