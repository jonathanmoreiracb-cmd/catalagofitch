
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

export const TRADE_IN_DATA: TradeInModel[] = [
  {
    model: 'iPhone 11',
    capacities: [
      { size: '64GB', gradeA: 700, gradeB: 600 },
      { size: '128GB', gradeA: 800, gradeB: 700 },
    ]
  },
  {
    model: 'iPhone 11 Pro Max',
    capacities: [
      { size: '64GB', gradeA: 1200, gradeB: 1000 },
      { size: '256GB', gradeA: 1300, gradeB: 1050 },
    ]
  },
  {
    model: 'iPhone 12',
    capacities: [
      { size: '64GB', gradeA: 1000, gradeB: 900 },
      { size: '128GB', gradeA: 1150, gradeB: 1050 },
    ]
  },
  {
    model: 'iPhone 12 Pro',
    capacities: [
      { size: '128GB', gradeA: 1550, gradeB: 1350 },
      { size: '256GB', gradeA: 1650, gradeB: 1450 },
    ]
  },
  {
    model: 'iPhone 12 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 2000, gradeB: 1800 },
      { size: '256GB', gradeA: 2100, gradeB: 1900 },
    ]
  },
  {
    model: 'iPhone 13',
    capacities: [
      { size: '128GB', gradeA: 1650, gradeB: 1550 },
      { size: '256GB', gradeA: 1700, gradeB: 1650 },
    ]
  },
  {
    model: 'iPhone 13 Pro',
    capacities: [
      { size: '128GB', gradeA: 2000, gradeB: 1800 },
      { size: '256GB', gradeA: 2100, gradeB: 1850 },
    ]
  },
  {
    model: 'iPhone 13 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 2250, gradeB: 2150 },
      { size: '256GB', gradeA: 2350, gradeB: 2200 },
    ]
  },
  {
    model: 'iPhone 14',
    capacities: [
      { size: '128GB', gradeA: 1850, gradeB: 1750 },
    ]
  },
  {
    model: 'iPhone 14 Pro',
    capacities: [
      { size: '128GB', gradeA: 2400, gradeB: 2300 },
      { size: '256GB', gradeA: 2500, gradeB: 2350 },
    ]
  },
  {
    model: 'iPhone 14 Pro Max',
    capacities: [
      { size: '128GB', gradeA: 3050, gradeB: 2950 },
      { size: '256GB', gradeA: 3150, gradeB: 3000 },
    ]
  },
  {
    model: 'iPhone 15',
    capacities: [
      { size: '128GB', gradeA: 2550, gradeB: 2450 },
    ]
  },
  {
    model: 'iPhone 15 Pro',
    capacities: [
      { size: '128GB', gradeA: 3200, gradeB: 3100 },
      { size: '256GB', gradeA: 3300, gradeB: 3200 },
    ]
  },
  {
    model: 'iPhone 15 Pro Max',
    capacities: [
      { size: '256GB', gradeA: 3850, gradeB: 3750 },
    ]
  },
  {
    model: 'iPhone 16',
    capacities: [
      { size: '128GB', gradeA: 2900, gradeB: 2800 },
    ]
  },
  {
    model: 'iPhone 16 Pro',
    capacities: [
      { size: '128GB', gradeA: 4100, gradeB: 4000 },
      { size: '256GB', gradeA: 4250, gradeB: 4150 },
    ]
  },
  {
    model: 'iPhone 16 Pro Max',
    capacities: [
      { size: '256GB', gradeA: 5150, gradeB: 5050 },
    ]
  }
];

export const CATALOG: Product[] = [
  // --- TABELA FITCH 17.01 LACRADO ---
  { id: 'n_13_128', category: 'iphones_novos', name: '13 128GB - LACRADO', priceCash: 3499, price6xTotal: 3756.53, price12xTotal: 3893.34, price18xTotal: 4014.40, price21xTotal: 4128.82 },
  { id: 'n_14_128', category: 'iphones_novos', name: '14 128GB - LACRADO', priceCash: 3779, price6xTotal: 4057.13, price12xTotal: 4204.89, price18xTotal: 4335.65, price21xTotal: 4459.22 },
  { id: 'n_15_128', category: 'iphones_novos', name: '15 128GB - LACRADO', priceCash: 4299, price6xTotal: 4615.41, price12xTotal: 4783.50, price18xTotal: 4932.24, price21xTotal: 5072.82 },
  { id: 'n_16_128', category: 'iphones_novos', name: '16 128GB - LACRADO', priceCash: 4949, price6xTotal: 5313.25, price12xTotal: 5506.75, price18xTotal: 5677.99, price21xTotal: 5839.82 },
  { id: 'n_16p_128', category: 'iphones_novos', name: '16 PLUS 128GB - LACRADO', priceCash: 5199, price6xTotal: 5581.65, price12xTotal: 5784.93, price18xTotal: 5964.81, price21xTotal: 6134.82 },
  { id: 'n_16pro_128', category: 'iphones_novos', name: '16 PRO 128GB - LACRADO', priceCash: 6199, price6xTotal: 6655.25, price12xTotal: 6897.63, price18xTotal: 7112.11, price21xTotal: 7314.82 },
  { id: 'n_air_256', category: 'iphones_novos', name: 'AIR 256GB GOLD - LACRADO', priceCash: 5999, price6xTotal: 6440.53, price12xTotal: 6675.09, price18xTotal: 6882.65, price21xTotal: 7078.82 },
  { id: 'n_17_256', category: 'iphones_novos', name: '17 256GB - LACRADO', priceCash: 6099, price6xTotal: 6547.89, price12xTotal: 6786.36, price18xTotal: 6997.38, price21xTotal: 7196.82 },
  { id: 'n_17pro_256_o', category: 'iphones_novos', name: '17 PRO 256GB LARANJA - LACRADO', priceCash: 8199, price6xTotal: 8802.45, price12xTotal: 9123.03, price18xTotal: 9406.71, price21xTotal: 9674.82 },
  { id: 'n_17pro_256_s', category: 'iphones_novos', name: '17 PRO 256GB SILVER - LACRADO', priceCash: 8399, price6xTotal: 9017.17, price12xTotal: 9345.57, price18xTotal: 9636.17, price21xTotal: 9910.82 },
  { id: 'n_17pm_256_o', category: 'iphones_novos', name: '17 PRO MAX 256GB LARANJA- LACRADO', priceCash: 9249, price6xTotal: 9929.73, price12xTotal: 10291.36, price18xTotal: 10611.38, price21xTotal: 10913.82 },
  { id: 'n_17pm_256_a', category: 'iphones_novos', name: '17 PRO MAX 256GB AZUL - LACRADO', priceCash: 9299, price6xTotal: 9983.41, price12xTotal: 10347.00, price18xTotal: 10668.74, price21xTotal: 10972.82 },
  { id: 'n_17pm_256_s', category: 'iphones_novos', name: '17 PRO MAX 256GB SILVER - LACRADO', priceCash: 9499, price6xTotal: 10198.13, price12xTotal: 10569.54, price18xTotal: 10898.20, price21xTotal: 11208.82 },

  // --- TABELA FITCH 17.01 SEMINOVO ---
  { id: 's_11_64', category: 'iphones_seminovos', name: '11 64GB - SEMINOVO', priceCash: 1349, price6xTotal: 1448.29, price12xTotal: 1501.03, price18xTotal: 1547.71, price21xTotal: 1591.82 },
  { id: 's_11_128', category: 'iphones_seminovos', name: '11 128GB - SEMINOVO', priceCash: 1599, price6xTotal: 1716.69, price12xTotal: 1779.21, price18xTotal: 1834.53, price21xTotal: 1886.82 },
  { id: 's_11p_64', category: 'iphones_seminovos', name: '11 PRO 64GB - SEMINOVO', priceCash: 1649, price6xTotal: 1770.37, price12xTotal: 1834.84, price18xTotal: 1891.90, price21xTotal: 1945.82 },
  { id: 's_11pm_64', category: 'iphones_seminovos', name: '11 PRO MAX 64GB - SEMINOVO', priceCash: 1849, price6xTotal: 1985.09, price12xTotal: 2057.38, price18xTotal: 2121.36, price21xTotal: 2181.82 },
  { id: 's_12_64', category: 'iphones_seminovos', name: '12 64GB - SEMINOVO', priceCash: 1599, price6xTotal: 1716.69, price12xTotal: 1779.21, price18xTotal: 1834.53, price21xTotal: 1886.82 },
  { id: 's_12_128', category: 'iphones_seminovos', name: '12 128GB - SEMINOVO', priceCash: 1749, price6xTotal: 1877.73, price12xTotal: 1946.11, price18xTotal: 2006.63, price21xTotal: 2063.82 },
  { id: 's_12pro_128', category: 'iphones_seminovos', name: '12 PRO 128GB - SEMINOVO', priceCash: 2069, price6xTotal: 2221.28, price12xTotal: 2302.18, price18xTotal: 2373.76, price21xTotal: 2441.42 },
  { id: 's_12pm_128', category: 'iphones_seminovos', name: '12 PRO MAX 128GB - SEMINOVO', priceCash: 2719, price6xTotal: 2919.12, price12xTotal: 3025.43, price18xTotal: 3119.51, price21xTotal: 3208.42 },
  { id: 's_13_128', category: 'iphones_seminovos', name: '13 128GB - SEMINOVO', priceCash: 2299, price6xTotal: 2468.21, price12xTotal: 2558.10, price18xTotal: 2637.64, price21xTotal: 2712.82 },
  { id: 's_13pro_128', category: 'iphones_seminovos', name: '13 PRO 128GB - SEMINOVO', priceCash: 2699, price6xTotal: 2897.65, price12xTotal: 3003.18, price18xTotal: 3096.56, price21xTotal: 3184.82 },
  { id: 's_13pm_128', category: 'iphones_seminovos', name: '13 PRO MAX 128GB - SEMINOVO', priceCash: 2989, price6xTotal: 3208.99, price12xTotal: 3325.86, price18xTotal: 3429.28, price21xTotal: 3527.02 },
  { id: 's_14_128', category: 'iphones_seminovos', name: '14 128GB - SEMINOVO', priceCash: 2449, price6xTotal: 2629.25, price12xTotal: 2725.00, price18xTotal: 2809.74, price21xTotal: 2889.82 },
  { id: 's_14pro_128', category: 'iphones_seminovos', name: '14 PRO 128GB - SEMINOVO', priceCash: 3149, price6xTotal: 3380.77, price12xTotal: 3503.89, price18xTotal: 3612.85, price21xTotal: 3715.82 },
  { id: 's_14pm_128', category: 'iphones_seminovos', name: '14 PRO MAX 128GB - SEMINOVO', priceCash: 3649, price6xTotal: 3917.57, price12xTotal: 4060.24, price18xTotal: 4186.50, price21xTotal: 4305.82 },
  { id: 's_15_128', category: 'iphones_seminovos', name: '15 128GB - SEMINOVO', priceCash: 3179, price6xTotal: 3412.97, price12xTotal: 3537.27, price18xTotal: 3647.27, price21xTotal: 3751.22 },
  { id: 's_15pro_128', category: 'iphones_seminovos', name: '15 PRO 128GB - SEMINOVO', priceCash: 4149, price6xTotal: 4454.37, price12xTotal: 4616.59, price18xTotal: 4760.15, price21xTotal: 4895.82 },
  { id: 's_15pro_256', category: 'iphones_seminovos', name: '15 PRO 256GB - SEMINOVO', priceCash: 4399, price6xTotal: 4722.77, price12xTotal: 4894.77, price18xTotal: 5046.97, price21xTotal: 5190.82 },
  { id: 's_15pm_256', category: 'iphones_seminovos', name: '15 PRO MAX 256GB - SEMINOVO', priceCash: 4599, price6xTotal: 4937.49, price12xTotal: 5117.31, price18xTotal: 5276.43, price21xTotal: 5426.82 },
  { id: 's_16pro_128', category: 'iphones_seminovos', name: '16 PRO 128GB - SEMINOVO', priceCash: 4999, price6xTotal: 5366.93, price12xTotal: 5562.39, price18xTotal: 5735.35, price21xTotal: 5898.82 },
  { id: 's_16pro_256', category: 'iphones_seminovos', name: '16 PRO 256GB - SEMINOVO', priceCash: 5199, price6xTotal: 5581.65, price12xTotal: 5784.93, price18xTotal: 5964.81, price21xTotal: 6134.82 },
  { id: 's_16pm_256', category: 'iphones_seminovos', name: '16 PRO MAX 256GB - SEMINOVO', priceCash: 6599, price6xTotal: 7084.69, price12xTotal: 7342.71, price18xTotal: 7571.03, price21xTotal: 7786.82 },

  // --- TABELA FITCH 17.01 PRODUTOS APPLE ---
  { id: 'ap_max', category: 'apple', name: 'AIRPODS MAX - LACRADO', priceCash: 4399, price6xTotal: 4722.77, price12xTotal: 4894.77, price18xTotal: 5046.97, price21xTotal: 5190.82 },
  { id: 'aw_se2_40', category: 'apple', name: 'APPLE WATCH SE 2ºGER 40MM - LACRADO', priceCash: 1849, price6xTotal: 1985.09, price12xTotal: 2057.38, price18xTotal: 2121.36, price21xTotal: 2181.82 },
  { id: 'aw_se2_44', category: 'apple', name: 'APPLE WATCH SE 2ºGER 44MM - LACRADO', priceCash: 1949, price6xTotal: 2092.45, price12xTotal: 2168.65, price18xTotal: 2236.09, price21xTotal: 2299.82 },
  { id: 'aw_se3_40', category: 'apple', name: 'APPLE WATCH SE 3ºGER 40MM - LACRADO', priceCash: 2099, price6xTotal: 2253.49, price12xTotal: 2335.56, price18xTotal: 2408.18, price21xTotal: 2476.82 },
  { id: 'aw_se3_44', category: 'apple', name: 'APPLE WATCH SE 3ºGER 44MM - LACRADO', priceCash: 2299, price6xTotal: 2468.21, price12xTotal: 2558.10, price18xTotal: 2637.64, price21xTotal: 2712.82 },
  { id: 'aw_s11_42', category: 'apple', name: 'APPLE WATCH S11 42MM - LACRADO', priceCash: 2949, price6xTotal: 3166.05, price12xTotal: 3281.35, price18xTotal: 3383.39, price21xTotal: 3479.82 },
  { id: 'aw_s11_46', category: 'apple', name: 'APPLE WATCH S11 46MM - LACRADO', priceCash: 3249, price6xTotal: 3488.13, price12xTotal: 3615.16, price18xTotal: 3727.58, price21xTotal: 3833.82 },
  { id: 'mb_m2_256', category: 'apple', name: 'MACBOOK M2 256GB/16RAM', priceCash: 5599, price6xTotal: 6011.09, price12xTotal: 6230.01, price18xTotal: 6423.73, price21xTotal: 6606.82 },
  { id: 'ipad_11_128', category: 'apple', name: 'IPAD 11 A16 128GB - LACRADO', priceCash: 2899, price6xTotal: 3112.37, price12xTotal: 3225.72, price18xTotal: 3326.02, price21xTotal: 3420.82 },
  { id: 'ap_penc_2', category: 'apple', name: 'APPLE PENCIL 2º GERAÇÃO', priceCash: 989, price6xTotal: 1061.79, price12xTotal: 1100.46, price18xTotal: 1134.68, price21xTotal: 1167.02 },
  { id: 'at_pack4', category: 'apple', name: 'AIRTAG PACK C/4', priceCash: 819, price6xTotal: 879.28, price12xTotal: 911.30, price18xTotal: 939.64, price21xTotal: 966.42 },
  { id: 'ap_tv_4k', category: 'apple', name: 'APPLE TV 4K', priceCash: 1299, price6xTotal: 1394.61, price12xTotal: 1445.40, price18xTotal: 1490.34, price21xTotal: 1532.82 },

  // --- TABELA FITCH 17.01 ANDROID ---
  { id: 'an_red_a5', category: 'android', name: 'XIAOMI REDMI A5 128GB/4GB', priceCash: 839, price6xTotal: 900.75, price12xTotal: 940.51, price18xTotal: 962.58, price21xTotal: 990.02 },
  { id: 'an_red_15c', category: 'android', name: 'XIAOMI REDMI 15C 256GB/8GB', priceCash: 1089, price6xTotal: 1169.15, price12xTotal: 1220.76, price18xTotal: 1249.41, price21xTotal: 1285.02 },
  { id: 'an_note14_256', category: 'android', name: 'XIAOMI NOTE 14 256GB/8RAM - LACRADO', priceCash: 1389, price6xTotal: 1491.23, price12xTotal: 1557.06, price18xTotal: 1593.60, price21xTotal: 1639.02 },
  { id: 'an_note14pp_256', category: 'android', name: 'XIAOMI NOTE 14 PRO PLUS 256GB/8RAM 5G - LACRADO', priceCash: 2439, price6xTotal: 2618.51, price12xTotal: 2734.11, price18xTotal: 2798.26, price21xTotal: 2878.02 },
  { id: 'an_poco_c71', category: 'android', name: 'XIAOMI POCO C71 128GB/4RAM - LACRADO', priceCash: 889, price6xTotal: 954.43, price12xTotal: 996.56, price18xTotal: 1019.95, price21xTotal: 1049.02 },
  { id: 'an_poco_c85', category: 'android', name: 'XIAOMI POCO C85 256GB/12RAM C/NFC- LACRADO', priceCash: 1099, price6xTotal: 1179.89, price12xTotal: 1231.97, price18xTotal: 1260.88, price21xTotal: 1296.82 },
  { id: 'an_poco_x7_512', category: 'android', name: 'XIAOMI POCO X7 512/12RAM - LACRADO', priceCash: 1949, price6xTotal: 2092.45, price12xTotal: 2184.82, price18xTotal: 2236.09, price21xTotal: 2299.82 },
  { id: 'an_poco_x7pro_512', category: 'android', name: 'XIAOMI POCO X7 PRO 512GB/12RAM -LC', priceCash: 2539, price6xTotal: 2725.87, price12xTotal: 2846.21, price18xTotal: 2912.99, price21xTotal: 2996.02 },
  { id: 'an_poco_f7_512', category: 'android', name: 'XIAOMI POCO F7 512GB/12RAM -LC', priceCash: 3249, price6xTotal: 3488.13, price12xTotal: 3642.11, price18xTotal: 3727.58, price21xTotal: 3833.82 },
  { id: 'an_real_n60', category: 'android', name: 'REALME NOTE 60 128GB/4RAM', priceCash: 839, price6xTotal: 900.75, price12xTotal: 940.51, price18xTotal: 962.58, price21xTotal: 990.02 },
  { id: 'an_real_t14', category: 'android', name: 'REALME T14 256GB/8RAM', priceCash: 1769, price6xTotal: 1899.20, price12xTotal: 1983.04, price18xTotal: 2029.57, price21xTotal: 2087.42 },
  { id: 'an_real_12p', category: 'android', name: 'REALME 12 PRO PLUS 512GB/8GB', priceCash: 2409, price6xTotal: 2586.30, price12xTotal: 2700.48, price18xTotal: 2763.85, price21xTotal: 2842.62 },
  { id: 'an_umi_90a', category: 'android', name: 'UMIDIGI NOTE 90A 64GB/4RAM', priceCash: 719, price6xTotal: 771.92, price12xTotal: 806.00, price18xTotal: 824.91, price21xTotal: 848.42 },
  { id: 'an_umi_90c', category: 'android', name: 'UMIDIGI NOTE 90C 64GB/4RAM', priceCash: 889, price6xTotal: 954.43, price12xTotal: 996.56, price18xTotal: 1019.95, price21xTotal: 1049.02 },
  { id: 'an_red_14c', category: 'android', name: 'REDMI 14C 256GB - SEMINOVO', priceCash: 749, price6xTotal: 804.13, price12xTotal: 839.63, price18xTotal: 859.33, price21xTotal: 883.82 },
  { id: 'an_red_note13pro', category: 'android', name: 'REDMI NOTE 13 PRO 256GB/8RAM - SEMINOVO', priceCash: 1399, price6xTotal: 1501.97, price12xTotal: 1568.27, price18xTotal: 1605.07, price21xTotal: 1650.82 },
  { id: 'an_poco_c75', category: 'android', name: 'POCO C75 256GB/8RAM - SEMINOVO', priceCash: 999, price6xTotal: 1072.53, price12xTotal: 1119.87, price18xTotal: 1146.15, price21xTotal: 1178.82 },

  // --- TABELA FITCH 17.01 ELETRÔNICOS ---
  { id: 'el_ps5_825', category: 'eletronicos', name: 'VIDEOGAME PS5 825 C/JOGO', priceCash: 3529, price6xTotal: 3788.73, price12xTotal: 3955.99, price18xTotal: 4048.82, price21xTotal: 4164.22 },
  { id: 'el_xbox_s', category: 'eletronicos', name: 'VIDEOGAME XBOX - S 512GB', priceCash: 2999, price6xTotal: 3219.73, price12xTotal: 3361.86, price18xTotal: 3440.75, price21xTotal: 3538.82 },
  { id: 'el_n_switch', category: 'eletronicos', name: 'VIDEOGAME NINTENDO SWITC', priceCash: 1399, price6xTotal: 1501.97, price12xTotal: 1568.27, price18xTotal: 1605.07, price21xTotal: 1650.82 },
  { id: 'el_ctrl_ps5', category: 'eletronicos', name: 'CONTROLE PS5', priceCash: 559, price6xTotal: 600.14, price12xTotal: 626.64, price18xTotal: 641.34, price21xTotal: 659.62 },
  { id: 'el_galaxy_tab_a9', category: 'eletronicos', name: 'GALAXY TAB A9 64GB CHIP + WIFI PRETO - LACRADO', priceCash: 1059, price6xTotal: 1136.94, price12xTotal: 1187.13, price18xTotal: 1214.99, price21xTotal: 1249.62 },
  { id: 'el_tablet_pos', category: 'eletronicos', name: 'TABLET POSITIVO 7"', priceCash: 569, price6xTotal: 610.88, price12xTotal: 637.85, price18xTotal: 652.81, price21xTotal: 671.42 },
  { id: 'el_starlink', category: 'eletronicos', name: 'ANTENA STARLINK', priceCash: 2299, price6xTotal: 2468.21, price12xTotal: 2577.17, price18xTotal: 2637.64, price21xTotal: 2712.82 },
  { id: 'el_dji_mini', category: 'eletronicos', name: 'DRONE DJI MINI 4K - 1 CONTROLE - 1 BATERIA', priceCash: 3049, price6xTotal: 3273.41, price12xTotal: 3417.91, price18xTotal: 3498.12, price21xTotal: 3597.82 },

  // --- ACESSÓRIOS ---
  { id: 'acc_c1', category: 'acessorios', name: 'FONTE USB-C ORIGINAL APPLE', priceCash: 219, price6xTotal: 235.12, price12xTotal: 243.68, price18xTotal: 251.26, price21xTotal: 260 },
  { id: 'acc_cs1', category: 'acessorios', name: 'CASE ORIGINAL APPLE', priceCash: 30, price6xTotal: 32.21, price12xTotal: 33.38, price18xTotal: 34.42, price21xTotal: 35 },
];
