import { useState } from "react";
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

  const [products, setProducts] = useState([
    {
      code: "312944",
      descricao: "Velocity Nitro 5",
      tipo: "Running",
      genero: "Masculino",
      pdv: "999,99",
      rating: ""
    },
    {
      code: "403840",
      descricao: "Shuffle Downtown",
      tipo: "Casual",
      genero: "Masculino",
      pdv: "449,99",
      rating: ""
    }
  ]);

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

  const updateRating = (index, value) => {

    const updated = [...products];

    updated[index].rating = value;

    setProducts(updated);

  };

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
      "A cópia será enviada ao seu email, clique em OK e aguarde a segunda confirmação"
    );

    if (!confirmacao) return;

    try {

      await axios.post(
        `${API_URL}/send-email`,
        {
          customerData,
          products: selectedProducts
        }
      );

      alert(
        "Email enviado com sucesso"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Erro ao enviar email"
      );

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
          >
            Salvar
          </button>

        </div>

      </div>

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

            {filteredProducts.map((product, index) => (

              <tr key={index}>

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
                      updateRating(index, "Gostei")
                    }
                  />

                </td>

                <td data-label="Talvez">

                  <input
                    type="checkbox"
                    checked={product.rating === "Talvez"}
                    onChange={() =>
                      updateRating(index, "Talvez")
                    }
                  />

                </td>

                <td data-label="Não gostei">

                  <input
                    type="checkbox"
                    checked={product.rating === "Não gostei"}
                    onChange={() =>
                      updateRating(index, "Não gostei")
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
