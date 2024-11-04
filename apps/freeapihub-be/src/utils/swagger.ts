import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "FreeApiHub",
      version: "1.0.0",
      description:
        "This is the API documentation for FreeApiHub to interact with public data. For more details, visit the [documentation](http://your-docs-link.com).",
      contact: {
        name: "Rehan",
        email: "rehanalire52@gmail.com",
        url: "https://github.com/rehan-adi",
      },
      license: {
        name: "MIT",
        url: "https://github.com/rehan-adi/FreeApiHub/blob/main/LICENSE",
      },
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
