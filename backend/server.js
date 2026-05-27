import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

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
      success:true,
      excel: excelBuffer.toString("base64"),
      pdf: pdfBuffer.toString("base64")
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success:false,
      error:error.message
    });

  }

});

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
    // EMAIL
    // =========================

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

      }

    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

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
          content: excelBuffer
        },

        {
          filename: "sortimento.pdf",
          content: pdfBuffer
        }

      ]

    });

    res.json({
      success:true
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success:false,
      error:error.message
    });

  }

});


export default app;
