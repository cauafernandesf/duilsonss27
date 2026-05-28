import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

// =====================================
// CORS
// =====================================

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json({
  limit: "50mb"
}));

// =====================================
// HEALTH CHECK
// =====================================

app.get("/", (req, res) => {

  res.send("Backend online");

});

// =====================================
// GENERATE FILES
// =====================================

app.post("/generate-files", async (req, res) => {

  try {

    const { customerData, products } = req.body;

    // =========================
    // EXCEL EM MEMÓRIA
    // =========================

    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet("Produtos");

    sheet.columns = [

      { header: "Código", key: "code", width: 20 },

      { header: "Descrição", key: "descricao", width: 40 },

      { header: "Tipo", key: "tipo", width: 20 },

      { header: "Gênero", key: "genero", width: 20 },

      { header: "PDV", key: "pdv", width: 20 },

      { header: "Avaliação", key: "rating", width: 20 }

    ];

    products.forEach((product) => {

      sheet.addRow(product);

    });

    const excelBuffer = await workbook.xlsx.writeBuffer();

    // =========================
    // PDF EM MEMÓRIA
    // =========================

    const pdfBuffer = await new Promise((resolve) => {

      const doc = new PDFDocument({
        margin: 40
      });

      const buffers = [];

      doc.on("data", buffers.push.bind(buffers));

      doc.on("end", () => {

        resolve(Buffer.concat(buffers));

      });

      doc
        .fontSize(22)
        .fillColor("black")
        .text(
          "SORTIMENTO DUILSON SS27",
          {
            align: "center"
          }
        );

      doc.moveDown();

      doc
        .fontSize(12)
        .text(`RAZÃO SOCIAL: ${customerData.razaoSocial}`);

      doc.text(`CNPJ: ${customerData.cnpj}`);

      doc.text(`NOME DO RESPONSÁVEL: ${customerData.responsavel}`);

      doc.text(`TELEFONE: ${customerData.telefone}`);

      doc.text(`E-MAIL: ${customerData.email}`);

      doc.moveDown();

      doc
        .fontSize(14)
        .fillColor("black")
        .text("PRODUTOS");

      doc.moveDown();

      products.forEach((product) => {

        doc
          .fontSize(11)
          .text(
            `${product.code} | ${product.descricao} | ${product.tipo} | ${product.genero} | PDV ${product.pdv} | ${product.rating}`
          );

        doc.moveDown(0.5);

      });

      doc.end();

    });

    res.json({
      success: true,
      excel: excelBuffer.toString("base64"),
      pdf: pdfBuffer.toString("base64")
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

// =====================================
// SEND EMAIL
// =====================================

app.post("/send-email", async (req, res) => {

  try {

    const {
      customerData,
      products
    } = req.body;

    // =========================
    // EXCEL EM MEMÓRIA
    // =========================

    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet("Produtos");

    sheet.columns = [

      { header: "Código", key: "code", width: 20 },

      { header: "Descrição", key: "descricao", width: 40 },

      { header: "Tipo", key: "tipo", width: 20 },

      { header: "Gênero", key: "genero", width: 20 },

      { header: "PDV", key: "pdv", width: 20 },

      { header: "Avaliação", key: "rating", width: 20 }

    ];

    products.forEach((product) => {

      sheet.addRow(product);

    });

    const excelBuffer = await workbook.xlsx.writeBuffer();

    // =========================
    // PDF EM MEMÓRIA
    // =========================

    const pdfBuffer = await new Promise((resolve) => {

      const doc = new PDFDocument({
        margin: 40
      });

      const buffers = [];

      doc.on("data", buffers.push.bind(buffers));

      doc.on("end", () => {

        resolve(Buffer.concat(buffers));

      });

      doc
        .fontSize(22)
        .fillColor("black")
        .text(
          "SORTIMENTO DUILSON SS27",
          {
            align: "center"
          }
        );

      doc.moveDown();

      doc
        .fontSize(12)
        .text(`RAZÃO SOCIAL: ${customerData.razaoSocial}`);

      doc.text(`CNPJ: ${customerData.cnpj}`);

      doc.text(`NOME DO RESPONSÁVEL: ${customerData.responsavel}`);

      doc.text(`TELEFONE: ${customerData.telefone}`);

      doc.text(`E-MAIL: ${customerData.email}`);

      doc.moveDown();

      doc
        .fontSize(14)
        .fillColor("black")
        .text("PRODUTOS");

      doc.moveDown();

      products.forEach((product) => {

        doc
          .fontSize(11)
          .text(
            `${product.code} | ${product.descricao} | ${product.tipo} | ${product.genero} | PDV ${product.pdv} | ${product.rating}`
          );

        doc.moveDown(0.5);

      });

      doc.end();

    });

    // =========================
    // EMAIL RESEND
    // =========================

    await resend.emails.send({

      from: "Acme <onboarding@resend.dev>",

      to: [
        customerData.email,
        "atendimento.puma@gmail.com",
        "marcelo.pumamg@gmail.com"
      ],

      subject: `SORTIMENTO DUILSON SS27 - ${customerData.cnpj}`,

      text: `
RAZÃO SOCIAL: ${customerData.razaoSocial}

CNPJ: ${customerData.cnpj}

NOME DO RESPONSÁVEL: ${customerData.responsavel}

TELEFONE: ${customerData.telefone}

E-MAIL: ${customerData.email}

Segue em anexo o sortimento selecionado.
      `,

      attachments: [

        {
          filename: "sortimento.xlsx",
          content: Buffer.from(excelBuffer).toString("base64")
        },

        {
          filename: "sortimento.pdf",
          content: Buffer.from(pdfBuffer).toString("base64")
        }

      ]

    });

    res.json({
      success: true
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

// =====================================
// PORTA
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Servidor rodando na porta ${PORT}`);

});
