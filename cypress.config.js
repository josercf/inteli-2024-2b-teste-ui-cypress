const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar event listeners de Node.js aqui, se necessário
    },
    specPattern: "cypress/integration/**/*.js", // Padrão de busca dos arquivos de teste
    baseUrl: "https://www.footstats.com.br/#/", // URL base para os testes
    viewportWidth: 1280, // Largura da tela
    viewportHeight: 720,  // Altura da tela
  },

  component: {
    devServer: {
      framework: "angular", // Se estiver usando Angular no projeto
      bundler: "webpack",  // Bundler Webpack para o Angular
    },
    specPattern: "**/*.cy.ts", // Padrão para os testes de componentes
  },
});
