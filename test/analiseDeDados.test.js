const AnaliseDeDados = require("../src/analiseDeDados");

describe("AnaliseDeDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([10, 20, 30, 40, 50]);
  });

  test("Deve calcular a média corretamente", () => {
    expect(analise.calcularMedia()).toBe(30);
  });

  test("Deve calcular a mediana corretamente", () => {
    expect(analise.calcularMediana()).toBe(30);
  });

  test("Deve calcular a moda corretamente", () => {
    analise.adicionarDados([20, 20, 40, 40]);
    expect(analise.calcularModa()).toEqual([20, 40]);
  });

  test("Deve calcular a variância corretamente", () => {
    expect(analise.calcularVariancia()).toBe(200);
  });

  test("Deve calcular o desvio padrão corretamente", () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(14.14, 2);
  });

  test("Deve encontrar o valor mínimo corretamente", () => {
    expect(analise.encontrarMinimo()).toBe(10);
  });

  test("Deve encontrar o valor máximo corretamente", () => {
    expect(analise.encontrarMaximo()).toBe(50);
  });

  test("Deve normalizar os dados corretamente", () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test("Deve calcular o percentil corretamente", () => {
    expect(analise.calcularPercentil(50)).toBe(30);
    expect(analise.calcularPercentil(25)).toBe(20);
  });

  test("Deve calcular a soma corretamente", () => {
    expect(analise.calcularSoma()).toBe(150);
  });

  test("Deve calcular o produto corretamente", () => {
    expect(analise.calcularProduto()).toBe(12000000);
  });

  test("Deve calcular a amplitude corretamente", () => {
    expect(analise.calcularAmplitude()).toBe(40);
  });

  test("Deve calcular o coeficiente de variação corretamente", () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14, 2);
  });

  test("Deve remover outliers corretamente", () => {
    analise.adicionarDados([1000]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([10, 20, 30, 40, 50]);
  });

  test("Deve calcular a correlação corretamente", () => {
    const outroConjunto = [15, 25, 35, 45, 55];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1, 5);
  });

  test("Deve ordenar os dados corretamente", () => {
    expect(analise.ordenarDados()).toEqual([10, 20, 30, 40, 50]);
  });

  test("Deve adicionar novos dados corretamente", () => {
    analise.adicionarDados([60, 70]);
    expect(analise.dados).toContain(60);
    expect(analise.dados).toContain(70);
  });

  test("Deve limpar os dados corretamente", () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test("Deve retornar null para métodos com array vazio", () => {
    analise.limparDados();
    expect(analise.calcularMedia()).toBeNull();
    expect(analise.calcularMediana()).toBeNull();
    expect(analise.calcularModa()).toBeNull();
    expect(analise.calcularVariancia()).toBeNull();
    expect(analise.calcularDesvioPadrao()).toBeNull();
    expect(analise.encontrarMinimo()).toBeNull();
    expect(analise.encontrarMaximo()).toBeNull();
    expect(analise.calcularPercentil(50)).toBeNull();
    expect(analise.calcularCorrelacao([1, 2, 3])).toBeNull();
  });

  test("Deve retornar null para percentil inválido", () => {
    expect(analise.calcularPercentil(-10)).toBeNull();
    expect(analise.calcularPercentil(110)).toBeNull();
  });

  test("Deve retornar null para correlação com array de tamanho diferente", () => {
    expect(analise.calcularCorrelacao([1, 2])).toBeNull();
  });
});
