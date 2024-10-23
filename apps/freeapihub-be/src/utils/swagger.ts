import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "FreeApiHub",
      version: "1.0.0",
      description:
        "This is the API documentation for FreeApiHub to interact with public data",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? process.env.PROD_URL
            : "http://localhost:8080",
        description:
          process.env.NODE_ENV === "production"
            ? "Production server"
            : "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const OpenAPISpecs = swaggerJSDoc(options);
