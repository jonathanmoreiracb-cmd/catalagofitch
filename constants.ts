
import { Product, TradeInModel } from './types';

export const STORE_LOGO_URL = "https://i.imgur.com/KqZ3C8s.png";

export const CATEGORIES = [
  { id: 'iphones_novos', label: 'iPhones Novos' },
  { id: 'iphones_seminovos', label: 'iPhones Seminovos' },
  { id: 'apple', label: 'Produtos Apple' },
  { id: 'android', label: 'Android' },
  { id: 'eletronicos', label: 'Eletrônicos' },
  { id: 'acessorios', label: 'Acessórios' },
];

// Taxas ELLO conforme imagem (Coluna 2)
// O cálculo usado é: Valor / (1 - (Taxa/100)) para garantir o recebimento do valor à vista.
export const ELLO_RATES: Record<number, number> = {
  1: 4.05,
  2: 5.12,
  3: 5.79,
  4: 6.47,
  5: 7.15,
  6: 7.83,
  7: 8.94,
  8: 9.62,
  9: 10.29,
  10: 10.97,
  11: 11.64,
  12: 12.32,
  13: 12.99,
  14: 13.67,
  15: 14.34,
  16: 15.02,
  17: 15.69,
  18: 16.37
};

/**
 * Calcula o valor total parcelado com base na quantidade de parcelas.
 * Para 1-18x usa a tabela ELLO.
 * Para 19-21x usa o fator padrão da loja (proporcional ao preço de 21x).
 */
export const calculateInstallmentTotal = (cashAmount: number, n: number, productFactor21x: number) => {
  if (n === 0) return cashAmount; // Pix/Dinheiro
  
  if (n <= 18) {
    const rate = ELLO_RATES[n];
    return Number((cashAmount / (1 - (rate / 100))).toFixed(2));
  }
  
  // Para 19, 20 e 21 mantemos o padrão de fator baseado no preço de 21x
  // Fator = Preço21x / PreçoCash
  return Number((cashAmount * productFactor21x).toFixed(2));
};

export const TRADE_IN_DATA: TradeInModel[] = [
  {
    model: 'iPhone 11',
    capacities: [
      { size: '64GB', gradeA: 700, gradeB: 500 },
      { size: '128GB', gradeA: 800, gradeB: 600 },
      { size: '256GB', gradeA: 900, gradeB: 700 },
    ]
  },
  {
    model: 'iPhone 11 Pro',
    capacities: [
      { size: '64GB', gradeA: 1000, gradeB: 750 },
      { size: '256GB', gradeA: 1100, gradeB: 850 },
      { size: '512GB', gradeA: 1200, gradeB: 950 },
    ]
  },
  {
    model: 'iPhone 11 Pro Max',
    capacities: [
      { size: '64GB', gradeA: 1100, gradeB: 850 },
      { size: '256GB', gradeA: 1300, gradeB: 1050 },
      { size: '512GB', gradeA: 1400, gradeB: 1150 },
    ]
  },
  {
    model: 'iPhone 12',
    capacities: [
      { size: '64GB', gradeA: 1000, gradeB: 800 },
      { size: '128GB', gradeA: 1100, gradeB: 900 },
      { size: '256GB', gradeA: 1200, gradeB: 1000 },
    ]
  },
  {
    model: 'iPhone 12 Pro',
    capacities: [
      { size: '128GB', gradeA: 1350, gradeB: 1100 },
      { size: '256GB', gradeA: 1450, gradeB: 1200 },
      { size: '512GB', gradeA: 1550, gradeB: 1300 },
    ]
  },
  {
    model: 'iPhone 12 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 1930, gradeB: 1680 },
      { size: '256GB', gradeA: 2030, gradeB: 1780 },
      { size: '512GB', gradeA: 2130, gradeB: 1880 },
    ]
  },
  {
    model: 'iPhone 13',
    capacities: [
      { size: '128GB', gradeA: 1700, gradeB: 1500 },
      { size: '256GB', gradeA: 1800, gradeB: 1600 },
      { size: '512GB', gradeA: 1900, gradeB: 1700 },
    ]
  },
  {
    model: 'iPhone 13 Pro',
    capacities: [
      { size: '128GB', gradeA: 2040, gradeB: 1790 },
      { size: '256GB', gradeA: 2200, gradeB: 1950 },
      { size: '512GB', gradeA: 2300, gradeB: 2050 },
      { size: '1TB', gradeA: 2400, gradeB: 2150 },
    ]
  },
  {
    model: 'iPhone 13 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 2340, gradeB: 2090 },
      { size: '256GB', gradeA: 2440, gradeB: 2190 },
      { size: '512GB', gradeA: 2540, gradeB: 2290 },
      { size: '1TB', gradeA: 2640, gradeB: 2390 },
    ]
  },
  {
    model: 'iPhone 14',
    capacities: [
      { size: '128GB', gradeA: 1900, gradeB: 1700 },
      { size: '256GB', gradeA: 2000, gradeB: 1800 },
      { size: '512GB', gradeA: 2100, gradeB: 1900 },
    ]
  },
  {
    model: 'iPhone 14 Plus',
    capacities: [
      { size: '128GB', gradeA: 2100, gradeB: 1900 },
      { size: '256GB', gradeA: 2200, gradeB: 2000 },
      { size: '512GB', gradeA: 2300, gradeB: 2100 },
    ]
  },
  {
    model: 'iPhone 14 Pro',
    capacities: [
      { size: '128GB', gradeA: 2450, gradeB: 2200 },
      { size: '256GB', gradeA: 2700, gradeB: 2450 },
      { size: '512GB', gradeA: 2800, gradeB: 2550 },
      { size: '1TB', gradeA: 2900, gradeB: 2650 },
    ]
  },
  {
    model: 'iPhone 14 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 3000, gradeB: 2750 },
      { size: '256GB', gradeA: 3100, gradeB: 2850 },
      { size: '512GB', gradeA: 3200, gradeB: 2950 },
      { size: '1TB', gradeA: 3300, gradeB: 3050 },
    ]
  },
  {
    model: 'iPhone 15',
    capacities: [
      { size: '128GB', gradeA: 2550, gradeB: 2350 },
      { size: '256GB', gradeA: 2650, gradeB: 2450 },
      { size: '512GB', gradeA: 2750, gradeB: 2550 },
    ]
  },
  {
    model: 'iPhone 15 Plus',
    capacities: [
      { size: '128GB', gradeA: 2750, gradeB: 2550 },
      { size: '256GB', gradeA: 2850, gradeB: 2650 },
      { size: '512GB', gradeA: 2950, gradeB: 2750 },
    ]
  },
  {
    model: 'iPhone 15 Pro',
    capacities: [
      { size: '128GB', gradeA: 3050, gradeB: 2800 },
      { size: '256GB', gradeA: 3150, gradeB: 2900 },
      { size: '512GB', gradeA: 3250, gradeB: 3000 },
      { size: '1TB', gradeA: 3350, gradeB: 3100 },
    ]
  },
  {
    model: 'iPhone 15 Pro Max',
    capacities: [
      { size: '256GB', gradeA: 3550, gradeB: 3300 },
      { size: '512GB', gradeA: 3750, gradeB: 3500 },
      { size: '1TB', gradeA: 3850, gradeB: 3600 },
    ]
  },
  {
    model: 'iPhone 16',
    capacities: [
      { size: '128GB', gradeA: 3000, gradeB: 2800 },
      { size: '256GB', gradeA: 3100, gradeB: 2900 },
      { size: '512GB', gradeA: 3200, gradeB: 3000 },
    ]
  },
  {
    model: 'iPhone 16 Plus',
    capacities: [
      { size: '128GB', gradeA: 3200, gradeB: 3000 },
      { size: '256GB', gradeA: 3300, gradeB: 3100 },
      { size: '512GB', gradeA: 3400, gradeB: 3200 },
    ]
  },
  {
    model: 'iPhone 16 Pro',
    capacities: [
      { size: '128GB', gradeA: 4100, gradeB: 3850 },
      { size: '256GB', gradeA: 4200, gradeB: 3950 },
      { size: '512GB', gradeA: 4300, gradeB: 4050 },
      { size: '1TB', gradeA: 4400, gradeB: 4150 },
    ]
  },
  {
    model: 'iPhone 16 Pro Max',
    capacities: [
      { size: '256GB', gradeA: 4850, gradeB: 4600 },
      { size: '512GB', gradeA: 5250, gradeB: 5000 },
      { size: '1TB', gradeA: 5450, gradeB: 5200 },
    ]
  }
];

const calcFitchInstallments = (priceCash: number, price21x: number) => ({
  price6xTotal: Number((priceCash / (1 - (7.83 / 100))).toFixed(2)),
  price12xTotal: Number((priceCash / (1 - (12.32 / 100))).toFixed(2)),
  price18xTotal: Number((priceCash / (1 - (16.37 / 100))).toFixed(2)),
  price21xTotal: price21x
});

export const CATALOG: Product[] = [
  // --- iPHONES NOVOS (LACRADOS 05.02) ---
  { id: 'n_13_128_cpo', category: 'iphones_novos', name: '13 128GB - LACRADO CPO', priceCash: 3099, ...calcFitchInstallments(3099, 3656.82) },
  { id: 'n_15_128', category: 'iphones_novos', name: '15 128GB - LACRADO', priceCash: 3989, ...calcFitchInstallments(3989, 4707.02) },
  { id: 'n_16_128', category: 'iphones_novos', name: '16 128GB - LACRADO', priceCash: 4679, ...calcFitchInstallments(4679, 5521.22) },
  { id: 'n_16p_128', category: 'iphones_novos', name: '16 PLUS 128GB - LACRADO', priceCash: 4929, ...calcFitchInstallments(4929, 5816.22) },
  { id: 'n_16pro_128', category: 'iphones_novos', name: '16 PRO 128GB - LACRADO', priceCash: 5739, ...calcFitchInstallments(5739, 6772.02) },
  { id: 'n_air_256', category: 'iphones_novos', name: 'AIR 256GB GOLD - LACRADO', priceCash: 5999, ...calcFitchInstallments(5999, 7078.82) },
  { id: 'n_17_256', category: 'iphones_novos', name: '17 256GB - LACRADO', priceCash: 5499, ...calcFitchInstallments(5499, 6488.82) },
  { id: 'n_17p_256_o', category: 'iphones_novos', name: '17 PRO 256GB LARANJA - LACRADO', priceCash: 7529, ...calcFitchInstallments(7529, 8884.22) },
  { id: 'n_17p_256_a', category: 'iphones_novos', name: '17 PRO 256GB AZUL - LACRADO', priceCash: 8099, ...calcFitchInstallments(8099, 9556.82) },
  { id: 'n_17p_256_s', category: 'iphones_novos', name: '17 PRO 256GB SILVER - LACRADO', priceCash: 7749, ...calcFitchInstallments(7749, 9143.82) },
  { id: 'n_17pm_256_o', category: 'iphones_novos', name: '17 PRO MAX 256GB LARANJA- LACRADO', priceCash: 8149, ...calcFitchInstallments(8149, 9615.82) },
  { id: 'n_17pm_256_a', category: 'iphones_novos', name: '17 PRO MAX 256GB AZUL - LACRADO', priceCash: 8299, ...calcFitchInstallments(8299, 9792.82) },
  { id: 'n_17pm_256_s', category: 'iphones_novos', name: '17 PRO MAX 256GB SILVER - LACRADO', priceCash: 8399, ...calcFitchInstallments(8399, 9910.82) },
  { id: 'n_17pm_512_o', category: 'iphones_novos', name: '17 PRO MAX 512GB LARANJA - LACRADO', priceCash: 10149, ...calcFitchInstallments(10149, 11975.82) },

  // --- iPHONES SEMINOVOS (05.02) ---
  { id: 's_11_64', category: 'iphones_seminovos', name: '11 64GB - SEMINOVO', priceCash: 1349, ...calcFitchInstallments(1349, 1591.82) },
  { id: 's_11_128', category: 'iphones_seminovos', name: '11 128GB - SEMINOVO', priceCash: 1599, ...calcFitchInstallments(1599, 1886.82) },
  { id: 's_11_256', category: 'iphones_seminovos', name: '11 256GB - SEMINOVO', priceCash: 1699, ...calcFitchInstallments(1699, 2004.82) },
  { id: 's_11p_64', category: 'iphones_seminovos', name: '11 PRO 64GB - SEMINOVO', priceCash: 1649, ...calcFitchInstallments(1649, 1945.82) },
  { id: 's_11pm_64', category: 'iphones_seminovos', name: '11 PRO MAX 64GB - SEMINOVO', priceCash: 1849, ...calcFitchInstallments(1849, 2181.82) },
  { id: 's_12_64', category: 'iphones_seminovos', name: '12 64GB - SEMINOVO', priceCash: 1749, ...calcFitchInstallments(1749, 2063.82) },
  { id: 's_12p_128', category: 'iphones_seminovos', name: '12 PRO 128GB - SEMINOVO', priceCash: 2069, ...calcFitchInstallments(2069, 2441.42) },
  { id: 's_12pm_128', category: 'iphones_seminovos', name: '12 PRO MAX 128GB - SEMINOVO', priceCash: 2579, ...calcFitchInstallments(2579, 3043.22) },
  { id: 's_13_128', category: 'iphones_seminovos', name: '13 128GB - SEMINOVO', priceCash: 2299, ...calcFitchInstallments(2299, 2712.82) },
  { id: 's_13p_128', category: 'iphones_seminovos', name: '13 PRO 128GB - SEMINOVO', priceCash: 2689, ...calcFitchInstallments(2689, 3173.02) },
  { id: 's_13pm_128', category: 'iphones_seminovos', name: '13 PRO MAX 128GB - SEMINOVO', priceCash: 2999, ...calcFitchInstallments(2999, 3538.82) },
  { id: 's_14_128', category: 'iphones_seminovos', name: '14 128GB - SEMINOVO', priceCash: 2499, ...calcFitchInstallments(2499, 2948.82) },
  { id: 's_14p_128', category: 'iphones_seminovos', name: '14 PRO 128GB - SEMINOVO', priceCash: 3149, ...calcFitchInstallments(3149, 3715.82) },
  { id: 's_14pm_128', category: 'iphones_seminovos', name: '14 PRO MAX 128GB - SEMINOVO', priceCash: 3649, ...calcFitchInstallments(3649, 4305.82) },
  { id: 's_15_128', category: 'iphones_seminovos', name: '15 128GB - SEMINOVO', priceCash: 3179, ...calcFitchInstallments(3179, 3751.22) },
  { id: 's_15p_128', category: 'iphones_seminovos', name: '15 PRO 128GB - SEMINOVO', priceCash: 3699, ...calcFitchInstallments(3699, 4364.82) },
  { id: 's_15pm_256', category: 'iphones_seminovos', name: '15 PRO MAX 256GB - SEMINOVO', priceCash: 4599, ...calcFitchInstallments(4599, 5426.82) },
  { id: 's_16p_128', category: 'iphones_seminovos', name: '16 PRO 128GB - SEMINOVO', priceCash: 4999, ...calcFitchInstallments(4999, 5898.82) },
  { id: 's_16pm_256', category: 'iphones_seminovos', name: '16 PRO MAX 256GB - SEMINOVO', priceCash: 6499, ...calcFitchInstallments(6499, 7668.82) },

  // --- PRODUTOS APPLE (05.02) ---
  { id: 'ap_max_l', category: 'apple', name: 'AIRPODS MAX - LACRADO', priceCash: 4399, ...calcFitchInstallments(4399, 5190.82) },
  { id: 'ap_pro3_l', category: 'apple', name: 'AIRPODS PRO 3GER - LACRADO', priceCash: 1799, ...calcFitchInstallments(1799, 2122.82) },
  { id: 'aw_se2_40_l', category: 'apple', name: 'WATCH SE 2ºGER 40MM - LACRADO', priceCash: 1589, ...calcFitchInstallments(1589, 1875.02) },
  { id: 'aw_se2_44_l', category: 'apple', name: 'WATCH SE 2ºGER 44MM - LACRADO', priceCash: 1949, ...calcFitchInstallments(1949, 2299.82) },
  { id: 'aw_se3_40_l', category: 'apple', name: 'WATCH SE 3ºGER 40MM - LACRADO', priceCash: 2099, ...calcFitchInstallments(2099, 2476.82) },
  { id: 'aw_se3_44_l', category: 'apple', name: 'WATCH SE 3ºGER 44MM - LACRADO', priceCash: 2299, ...calcFitchInstallments(2299, 2712.82) },
  { id: 'aw_s11_42_l', category: 'apple', name: 'WATCH S11 42MM - LACRADO', priceCash: 2949, ...calcFitchInstallments(2949, 3479.82) },
  { id: 'aw_s11_46_l', category: 'apple', name: 'WATCH S11 46MM - LACRADO', priceCash: 3249, ...calcFitchInstallments(3249, 3833.82) },
  { id: 'mb_m1_13', category: 'apple', name: 'MACBOOK M1 256GB 13"', priceCash: 4599, ...calcFitchInstallments(4599, 5426.82) },
  { id: 'mb_m2_16', category: 'apple', name: 'MACBOOK M2 256GB/16RAM', priceCash: 5599, ...calcFitchInstallments(5599, 6606.82) },
  { id: 'ipad_11_128', category: 'apple', name: 'IPAD 11 A16 128GB - LACRADO', priceCash: 2839, ...calcFitchInstallments(2839, 3350.02) },
  { id: 'ap_pencil2', category: 'apple', name: 'APPLE PENCIL 2º GERAÇÃO', priceCash: 989, ...calcFitchInstallments(989, 1167.02) },
  { id: 'ap_airtag4', category: 'apple', name: 'AIRTAG PACK C/4', priceCash: 819, ...calcFitchInstallments(819, 966.42) },
  { id: 'ap_tv_4k', category: 'apple', name: 'APPLE TV 4K', priceCash: 1299, ...calcFitchInstallments(1299, 1532.82) },

  // --- ANDROID (05.02) ---
  { id: 'an_red_a5', category: 'android', name: 'XIAOMI REDMI A5 128GB/4GB', priceCash: 859, ...calcFitchInstallments(859, 1013.62) },
  { id: 'an_red_15c', category: 'android', name: 'XIAOMI REDMI 15C 256GB/8GB', priceCash: 1089, ...calcFitchInstallments(1089, 1285.02) },
  { id: 'an_note_14_256', category: 'android', name: 'XIAOMI NOTE 14 256GB/8RAM - LACRADO', priceCash: 1369, ...calcFitchInstallments(1369, 1615.42) },
  { id: 'an_note_14p_256', category: 'android', name: 'XIAOMI NOTE 14 PRO 256GB/8RAM 5G - LACRADO', priceCash: 1949, ...calcFitchInstallments(1949, 2299.82) },
  { id: 'an_note_14pp_256', category: 'android', name: 'XIAOMI NOTE 14 PRO PLUS 256GB/8RAM 5G - LACRADO', priceCash: 2439, ...calcFitchInstallments(2439, 2878.02) },
  { id: 'an_note_15_256', category: 'android', name: 'XIAOMI NOTE 15 256GB/8RAM 5G - LACRADO', priceCash: 1519, ...calcFitchInstallments(1519, 1792.42) },
  { id: 'an_poco_c71', category: 'android', name: 'XIAOMI POCO C71 128GB/4RAM - LACRADO', priceCash: 899, ...calcFitchInstallments(899, 1060.82) },
  { id: 'an_poco_c85', category: 'android', name: 'XIAOMI POCO C85 256GB/12RAM C/NFC- LACRADO', priceCash: 1119, ...calcFitchInstallments(1119, 1320.42) },
  { id: 'an_poco_x7_256', category: 'android', name: 'XIAOMI POCO X7 256GB/8RAM - LACRADO', priceCash: 1749, ...calcFitchInstallments(1749, 2063.82) },
  { id: 'an_poco_x7p_512', category: 'android', name: 'XIAOMI POCO X7 PRO 512GB/12RAM -LC', priceCash: 2399, ...calcFitchInstallments(2399, 2830.82) },
  { id: 'an_poco_f7_512', category: 'android', name: 'XIAOMI POCO F7 512GB/12RAM -LC', priceCash: 3249, ...calcFitchInstallments(3249, 3833.82) },
  { id: 'an_real_t14', category: 'android', name: 'REALME T14 256GB/8RAM', priceCash: 1769, ...calcFitchInstallments(1769, 2087.42) },
  { id: 'an_real_12pp', category: 'android', name: 'REALME 12 PRO PLUS 512GB/8GB', priceCash: 2409, ...calcFitchInstallments(2409, 2842.62) },
  { id: 'an_umi_90a', category: 'android', name: 'UMIDIGI NOTE 90A 64GB/4RAM', priceCash: 719, ...calcFitchInstallments(719, 848.42) },
  { id: 'an_umi_90c', category: 'android', name: 'UMIDIGI NOTE 90C 64GB/4RAM', priceCash: 889, ...calcFitchInstallments(889, 1049.02) },
  { id: 'an_red_14c_s', category: 'android', name: 'REDMI 14C 256GB - SEMINOVO', priceCash: 749, ...calcFitchInstallments(749, 883.82) },
  { id: 'an_red_note13p_s', category: 'android', name: 'REDMI NOTE 13 PRO 256GB/8RAM - SEMINOVO', priceCash: 1399, ...calcFitchInstallments(1399, 1650.82) },
  { id: 'an_poco_c75_s', category: 'android', name: 'POCO C75 256GB/8RAM - SEMINOVO', priceCash: 999, ...calcFitchInstallments(999, 1178.82) },

  // --- ELETRÔNICOS (05.02) ---
  { id: 'el_ps5_1t', category: 'eletronicos', name: 'VIDEOGAME PS5 1TR S/JOGO', priceCash: 3349, ...calcFitchInstallments(3349, 3951.82) },
  { id: 'el_xbox_s', category: 'eletronicos', name: 'VIDEOGAME XBOX -S 512GB', priceCash: 2999, ...calcFitchInstallments(2999, 3538.82) },
  { id: 'el_switch', category: 'eletronicos', name: 'VIDEOGAME NINTENDO SWITC', priceCash: 1399, ...calcFitchInstallments(1399, 1650.82) },
  { id: 'el_ps5_ctrl', category: 'eletronicos', name: 'CONTROLE PS5', priceCash: 559, ...calcFitchInstallments(559, 659.62) },
  { id: 'el_tab_a9', category: 'eletronicos', name: 'GALAXY TAB A9 64GB CHIP + WIFI PRETO - LACRADO', priceCash: 1059, ...calcFitchInstallments(1059, 1249.62) },
  { id: 'el_tab_pos', category: 'eletronicos', name: 'TABLET POSITIVO 7"', priceCash: 569, ...calcFitchInstallments(569, 671.42) },
  { id: 'el_tab_red_pad2', category: 'eletronicos', name: 'TABLET REDMI PAD 2 256GB/8RAM', priceCash: 1449, ...calcFitchInstallments(1449, 1709.82) },
  { id: 'el_starlink', category: 'eletronicos', name: 'ANTENA STARLINK', priceCash: 2299, ...calcFitchInstallments(2299, 2712.82) },
  { id: 'el_dji_mini_4k', category: 'eletronicos', name: 'DRONE DJI MINI 4K - 1 CONTROLE - 1 BATERIA', priceCash: 3049, ...calcFitchInstallments(3049, 3597.82) },

  // --- ACESSÓRIOS ---
  { id: 'ac_f_orig', category: 'acessorios', name: 'FONTE USB-C ORIGINAL APPLE', priceCash: 219, ...calcFitchInstallments(219, 260) },
  { id: 'ac_f_1l', category: 'acessorios', name: 'FONTE USB-C 1ºLINHA', priceCash: 135, ...calcFitchInstallments(135, 160) },
  { id: 'ac_c_2m_orig', category: 'acessorios', name: 'CABO 2M ORIGINAL LIGHT', priceCash: 249, ...calcFitchInstallments(249, 300) },
  { id: 'ac_c_1m_orig', category: 'acessorios', name: 'CABO 1M ORIGINAL', priceCash: 199, ...calcFitchInstallments(199, 240) },
  { id: 'ac_c_prem', category: 'acessorios', name: 'CABO USB-C APPLE PREMIUM', priceCash: 99, ...calcFitchInstallments(99, 120) },
  { id: 'ac_p_3d', category: 'acessorios', name: 'PELÍCULA 3D', priceCash: 25, ...calcFitchInstallments(25, 30) },
  { id: 'ac_case_orig', category: 'acessorios', name: 'CASE ORIGINAL', priceCash: 30, ...calcFitchInstallments(30, 35) },
  { id: 'ac_case_magsafe', category: 'acessorios', name: 'CASE MAGSAFE TRANSPARENTE', priceCash: 40, ...calcFitchInstallments(40, 50) },
];
