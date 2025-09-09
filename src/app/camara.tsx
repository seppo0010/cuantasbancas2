import styles from "./camara.module.css";

export const Camara = ({ diputados }: {
  diputados: {
    nombre: string,
    color: string,
  }[]
}) => {
  const butacas = [
    1, 2, 3, 4, 5,
    20, 19, 18, 17, 16, 15,
    33, 34, 35, 36, 37, 38, 39, 40,
    66, 65, 64, 63, 62, 61, 60, 59, 58, 57,
    87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123,
    163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176,
    222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209,
    223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
    194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177,
    136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
    111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98,
    67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
    48, 47, 46, 45, 44, 43, 42, 41,
    21, 22, 23, 24, 25, 26,
    6, 7, 8, 9,
    10, 11, 12, 13, 14,
    32, 31, 30, 29, 28, 27,
    49, 50, 51, 52, 53, 54, 55, 56,
    86, 85, 84, 83, 82, 81, 80, 79, 78, 77,
    112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
    162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150,
    195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
    243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
    0,
  ]
  const butacaStyle: { [butaca: string]: { fill: string } } = Object.fromEntries(diputados.map(({ color }, i) => [`butaca${butacas[i]}`, { fill: color }]))
  console.log(butacaStyle)
  return (
    <svg version="1.1" viewBox="0 0 1190.6 772.2" id="svg299" xmlns="http://www.w3.org/2000/svg">
      <defs id="defs4">
        <style id="style2">
        </style>
      </defs>
      <path id="path1114" className={styles["cls-7"]} d="m 944.1,161.3 c 0,-0.1 -3.7,-2.8 -3.8,-2.9 C 844.2,86.3 724.7,43.6 595.3,43.6 c -129.4,0 -249,42.7 -345.2,114.8 -0.1,0.1 -3.6,2.7 -3.7,2.8" />
      <path id="path1116" className={styles["cls-6"]} d="M 936.4,171.1 C 843.1,101.1 720.9,54.8 595.3,54.8 469.7,54.8 353.9,96.2 260.7,166.2 l -6.5,4.9" />
      <path id="path1118" className={styles["cls-6"]} d="M 902.7,214.1 C 817.9,150.5 709.5,110.4 595.3,110.4 c -114.2,0 -219.4,37.7 -304.2,101.2 l -3.2,2.4" />
      <path id="path1120" className={styles["cls-6"]} d="M 871.8,253.4 C 795.5,196.1 698,164.6 595.3,164.6 c -102.7,0 -198,34.3 -274.3,91.5" />
      <path id="path1122" className={styles["cls-6"]} d="m 838.4,295.9 c -67.3,-50.5 -152.5,-81.1 -243.1,-81.1 -90.6,0 -175.1,31.6 -242.4,82.1" />
      <path id="path1124" className={styles["cls-6"]} d="m 804.7,339.1 c -55.6,-41.7 -134.6,-72.2 -209.4,-72.2 -74.8,0 -154.4,29.4 -210,71.1" />
      <path id="path1126" className={styles["cls-6"]} d="m 772.7,379.5 c -43.6,-36.8 -116.8,-60.3 -177.5,-60.3 -60.7,0 -132.8,26 -177.9,59.8" />
      <path id="path1128" className={styles["cls-6"]} d="m 739.3,422 c 0,-0.1 -9.8,-7.2 -9.9,-7.3 -36.4,-27.2 -85.1,-41.9 -134.1,-41.9 -49,0 -108.5,20.6 -145,48" />
      <path id="path1130" className={styles["cls-7"]} d="m 1171.3,692.6 v -73 c 0,-178.2 -80.9,-337.5 -208.1,-443.2 0,-0.1 -3.8,-3.2 -3.9,-3.3" />
      <path id="path1132" className={styles["cls-7"]} d="m 231.4,173.2 c -0.1,0.1 -4,3.2 -4.1,3.3 -127.1,105.7 -208,264.9 -208,443.1 v 73" />
      <path id="path1150" className={styles["cls-7"]} d="m 401,666 v -50.6 c 0,-105.9 87,-191.7 194.2,-191.7 107.2,0 194.2,85.8 194.2,191.7 V 666" />
      <path id="path1168" className={styles["cls-6"]} d="m 741.1,666 v -50.3 c 0,-48.8 -24.9,-91.9 -62.8,-117" />
      <path id="path1170" className={styles["cls-6"]} d="m 450.8,666 v -50.3 c 0,-48.8 24.9,-91.9 62.8,-117" />
      <path id="path1172" className={styles["cls-6"]} d="M 662,488.8 C 642.2,478.1 619.4,472 595.3,472 c -24.1,0 -46.9,6.1 -66.7,16.8" />
      <line id="line1176" className={styles["cls-7"]} x1="19.299999" y1="746.70001" x2="1171.3" y2="746.70001" />
      <path id="path1152" className={styles["cls-6"]} d="m 918.8,224.8 c 0,0.1 2,1.7 2.1,1.8 114.4,95.1 185.6,240.3 185.6,400.7 V 693" />
      <path id="path1154" className={styles["cls-6"]} d="m 886.4,266.2 c 0,0.1 6.8,5.7 6.9,5.8 102.9,85.6 161.6,217.6 161.6,361.9 V 693" />
      <path id="path1156" className={styles["cls-6"]} d="m 853.9,307.5 c 0,0.1 7.7,6.4 7.8,6.4 92.6,77 139.7,195.9 139.7,325.8 V 693" />
      <path id="path1158" className={styles["cls-6"]} d="m 820.6,350 c 0,0.1 5.9,4.4 6,4.4 83.3,69.3 123,173.8 123,290.6 v 48" />
      <path id="path1160" className={styles["cls-6"]} d="m 788.4,391.1 c 75.1,62.4 107,157.4 107,262.7 V 693" />
      <path id="path1162" className={styles["cls-6"]} d="m 755.6,433 c 0,0 2.2,1.9 2.3,1.9 67.5,56.1 87.2,140.8 87.2,235.5 V 693" />
      <path id="path1164" className={styles["cls-6"]} d="m 952,182.4 c 0,0 5.1,4.3 5.2,4.3 122.1,101.5 199.8,254.4 199.8,425.5 V 666" />
      <path id="path1134" className={styles["cls-6"]} d="m 273.4,226.8 -1.7,1.5 C 157.2,323.4 84.3,466.8 84.3,627.3 V 693" />
      <path id="path1136" className={styles["cls-6"]} d="m 306.8,269.5 c -0.1,0.1 -6.8,5.4 -6.9,5.5 C 197.1,360.6 135.8,489.5 135.8,633.8 V 693" />
      <path id="path1138" className={styles["cls-6"]} d="m 338.9,310.4 c 0,0 -7.2,6.2 -7.3,6.2 -92.7,77 -142.3,193.2 -142.3,323.1 V 693" />
      <path id="path1140" className={styles["cls-6"]} d="m 369.7,349.7 c -0.1,0.1 -5.5,4.6 -5.5,4.7 -83.3,69.3 -123.1,173.8 -123.1,290.7 V 693" />
      <path id="path1142" className={styles["cls-6"]} d="m 402.2,391.2 c 0,0 -1,0.9 -1.1,0.9 C 326,454.4 295.3,548.5 295.3,653.8 V 693" />
      <path id="path1144" className={styles["cls-6"]} d="m 435.1,433.1 -2.1,1.7 c -67.6,56.1 -87.3,140.8 -87.3,235.6 V 693" />
      <path id="path1146" className={styles["cls-6"]} d="m 238.7,182.5 c -0.1,0 -5.1,4.1 -5.2,4.2 C 111.4,288.1 33.7,441.1 33.7,612.2 V 666" />
      <circle id="butacaElement_1" className={styles["cls-4"]} style={butacaStyle.butaca1} cx="424.20001" cy="639" r="15.7" />
      <circle id="butacaElement_2" className={styles["cls-4"]} style={butacaStyle.butaca2} cx="426" cy="596.70001" r="15.7" />
      <circle id="butacaElement_3" className={styles["cls-4"]} style={butacaStyle.butaca3} cx="437.29999" cy="555" r="15.7" />
      <circle id="butacaElement_4" className={styles["cls-4"]} style={butacaStyle.butaca4} cx="460.70001" cy="515.59998" r="15.7" />
      <circle id="butacaElement_5" className={styles["cls-4"]} style={butacaStyle.butaca5} cx="491" cy="485.20001" r="15.7" />
      <circle id="butacaElement_6" className={styles["cls-4"]} style={butacaStyle.butaca6} cx="528.09998" cy="463.5" r="15.7" />
      <circle id="butacaElement_7" className={styles["cls-4"]} style={butacaStyle.butaca7} cx="572.20001" cy="451.20001" r="15.7" />
      <circle id="butacaElement_8" className={styles["cls-4"]} style={butacaStyle.butaca8} cx="618.29999" cy="451.20001" r="15.7" />
      <circle id="butacaElement_9" className={styles["cls-15"]} style={butacaStyle.butaca9} cx="662.5" cy="463.5" r="15.7" />
      <circle id="butacaElement_10" className={styles["cls-15"]} style={butacaStyle.butaca10} cx="699.5" cy="485.39999" r="15.7" />
      <circle id="butacaElement_11" className={styles["cls-3"]} style={butacaStyle.butaca11} cx="730.09998" cy="515.40002" r="15.7" />
      <circle id="butacaElement_12" className={styles["cls-3"]} style={butacaStyle.butaca12} cx="753.29999" cy="554.79999" r="15.7" />
      <circle id="butacaElement_13" className={styles["cls-3"]} style={butacaStyle.butaca13} cx="764.79999" cy="596.70001" r="15.7" />
      <circle id="butacaElement_14" className={styles["cls-3"]} style={butacaStyle.butaca14} cx="766.29999" cy="639" r="15.7" />
      <circle id="butacaElement_15" className={styles["cls-4"]} style={butacaStyle.butaca15} cx="370.79999" cy="660" r="15.7" />
      <circle id="butacaElement_16" className={styles["cls-4"]} style={butacaStyle.butaca16} cx="371.70001" cy="625.70001" r="15.7" />
      <circle id="butacaElement_17" className={styles["cls-4"]} style={butacaStyle.butaca17} cx="377.89999" cy="567.90002" r="15.7" />
      <circle id="butacaElement_18" className={styles["cls-4"]} style={butacaStyle.butaca18} cx="388.89999" cy="535" r="15.7" />
      <circle id="butacaElement_19" className={styles["cls-4"]} style={butacaStyle.butaca19} cx="415.10001" cy="489" r="15.7" />
      <circle id="butacaElement_20" className={styles["cls-4"]} style={butacaStyle.butaca20} cx="437.20001" cy="462.70001" r="15.7" />
      <circle id="butacaElement_21" className={styles["cls-4"]} style={butacaStyle.butaca21} cx="495.89999" cy="420.39999" r="15.7" />
      <circle id="butacaElement_22" className={styles["cls-4"]} style={butacaStyle.butaca22} cx="527.70001" cy="407.60001" r="15.7" />
      <circle id="butacaElement_23" className={styles["cls-2"]} style={butacaStyle.butaca23} cx="577.79999" cy="398" r="15.7" />
      <circle id="butacaElement_24" className={styles["cls-2"]} style={butacaStyle.butaca24} cx="612.70001" cy="398" r="15.7" />
      <circle id="butacaElement_25" className={styles["cls-5"]} style={butacaStyle.butaca25} cx="662.79999" cy="407.60001" r="15.7" />
      <circle id="butacaElement_26" className={styles["cls-5"]} style={butacaStyle.butaca26} cx="694.59998" cy="420.39999" r="15.7" />
      <circle id="butacaElement_27" className={styles["cls-12"]} style={butacaStyle.butaca27} cx="753.40002" cy="462.70001" r="15.7" />
      <circle id="butacaElement_28" className={styles["cls-12"]} style={butacaStyle.butaca28} cx="775.5" cy="489" r="15.7" />
      <circle id="butacaElement_29" className={styles["cls-3"]} style={butacaStyle.butaca29} cx="801.59998" cy="535" r="15.7" />
      <circle id="butacaElement_30" className={styles["cls-3"]} style={butacaStyle.butaca30} cx="812.70001" cy="567.90002" r="15.7" />
      <circle id="butacaElement_31" className={styles["cls-3"]} style={butacaStyle.butaca31} cx="818.79999" cy="625.70001" r="15.7" />
      <circle id="butacaElement_32" className={styles["cls-3"]} style={butacaStyle.butaca32} cx="819.70001" cy="660" r="15.7" />
      <circle id="butacaElement_33" className={styles["cls-4"]} style={butacaStyle.butaca33} cx="319.39999" cy="669.5" r="15.7" />
      <circle id="butacaElement_34" className={styles["cls-4"]} style={butacaStyle.butaca34} cx="319.39999" cy="635.09998" r="15.7" />
      <circle id="butacaElement_35" className={styles["cls-4"]} style={butacaStyle.butaca35} cx="321.10001" cy="588" r="15.7" />
      <circle id="butacaElement_36" className={styles["cls-4"]} style={butacaStyle.butaca36} cx="327.10001" cy="554.59998" r="15.7" />
      <circle id="butacaElement_37" className={styles["cls-4"]} style={butacaStyle.butaca37} cx="341.5" cy="511.60001" r="15.7" />
      <circle id="butacaElement_38" className={styles["cls-4"]} style={butacaStyle.butaca38} cx="357.29999" cy="480.79999" r="15.7" />
      <circle id="butacaElement_39" className={styles["cls-4"]} style={butacaStyle.butaca39} cx="381.60001" cy="445.89999" r="15.7" />
      <circle id="butacaElement_40" className={styles["cls-4"]} style={butacaStyle.butaca40} cx="405.10001" cy="420.79999" r="15.7" />
      <circle id="butacaElement_41" className={styles["cls-4"]} style={butacaStyle.butaca41} cx="461" cy="379" r="15.7" />
      <circle id="butacaElement_42" className={styles["cls-4"]} style={butacaStyle.butaca42} cx="505.1" cy="359.8" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 69.000084, 800.700004)" />
      <circle id="butacaElement_43" className={styles["cls-10"]} style={butacaStyle.butaca43} cx="538.09998" cy="350.79999" r="15.7" />
      <circle id="butacaElement_44" className={styles["cls-2"]} style={butacaStyle.butaca44} cx="578" cy="345.29999" r="15.7" />
      <circle id="butacaElement_45" className={styles["cls-2"]} style={butacaStyle.butaca45} cx="612.5" cy="345.29999" r="15.7" />
      <circle id="butacaElement_46" className={styles["cls-5"]} style={butacaStyle.butaca46} cx="652.40002" cy="350.79999" r="15.7" />
      <circle id="butacaElement_47" className={styles["cls-5"]} style={butacaStyle.butaca47} cx="685.40002" cy="359.79999" r="15.7" />
      <circle id="butacaElement_48" className={styles["cls-5"]} style={butacaStyle.butaca48} cx="729.59998" cy="379" r="15.7" />
      <circle id="butacaElement_49" className={styles["cls-12"]} style={butacaStyle.butaca49} cx="785.40002" cy="420.79999" r="15.7" />
      <circle id="butacaElement_50" className={styles["cls-12"]} style={butacaStyle.butaca50} cx="808.90002" cy="445.89999" r="15.7" />
      <circle id="butacaElement_51" className={styles["cls-12"]} style={butacaStyle.butaca51} cx="833.20001" cy="480.79999" r="15.7" />
      <circle id="butacaElement_52" className={styles["cls-3"]} style={butacaStyle.butaca52} cx="849" cy="511.60001" r="15.7" />
      <circle id="butacaElement_53" className={styles["cls-3"]} style={butacaStyle.butaca53} cx="863.40002" cy="554.59998" r="15.7" />
      <circle id="butacaElement_54" className={styles["cls-3"]} style={butacaStyle.butaca54} cx="869.40002" cy="588" r="15.7" />
      <circle id="butacaElement_55" className={styles["cls-3"]} style={butacaStyle.butaca55} cx="871.20001" cy="635.09998" r="15.7" />
      <circle id="butacaElement_56" className={styles["cls-3"]} style={butacaStyle.butaca56} cx="871.20001" cy="669.5" r="15.7" />
      <circle id="butacaElement_57" className={styles["cls-4"]} style={butacaStyle.butaca57} cx="266.5" cy="673.20001" r="15.7" />
      <circle id="butacaElement_58" className={styles["cls-4"]} style={butacaStyle.butaca58} cx="266.70001" cy="638.79999" r="15.7" />
      <circle id="butacaElement_59" className={styles["cls-4"]} style={butacaStyle.butaca59} cx="267.10001" cy="602.59998" r="15.7" />
      <circle id="butacaElement_60" className={styles["cls-4"]} style={butacaStyle.butaca60} cx="270.89999" cy="568.59998" r="15.7" />
      <circle id="butacaElement_61" className={styles["cls-4"]} style={butacaStyle.butaca61} cx="278.39999" cy="533.09998" r="15.7" />
      <circle id="butacaElement_62" className={styles["cls-4"]} style={butacaStyle.butaca62} cx="289.79999" cy="500.60001" r="15.7" />
      <circle id="butacaElement_63" className={styles["cls-4"]} style={butacaStyle.butaca63} cx="306.5" cy="464.89999" r="15.7" />
      <circle id="butacaElement_64" className={styles["cls-4"]} style={butacaStyle.butaca64} cx="323.70001" cy="435.89999" r="15.7" />
      <circle id="butacaElement_65" className={styles["cls-4"]} style={butacaStyle.butaca65} cx="348.70001" cy="403.79999" r="15.7" />
      <circle id="butacaElement_66" className={styles["cls-4"]} style={butacaStyle.butaca66} cx="372.5" cy="379" r="15.7" />
      <circle id="butacaElement_67" className={styles["cls-4"]} style={butacaStyle.butaca67} cx="425.29999" cy="339.10001" r="15.7" />
      <circle id="butacaElement_68" className={styles["cls-4"]} style={butacaStyle.butaca68} cx="455.89999" cy="323.39999" r="15.7" />
      <circle id="butacaElement_69" className={styles["cls-10"]} style={butacaStyle.butaca69} cx="499.29999" cy="306.29999" r="15.7" />
      <circle id="butacaElement_70" className={styles["cls-10"]} style={butacaStyle.butaca70} cx="532.70001" cy="298.39999" r="15.7" />
      <circle id="butacaElement_71" className={styles["cls-2"]} style={butacaStyle.butaca71} cx="578" cy="292.60001" r="15.7" />
      <circle id="butacaElement_72" className={styles["cls-2"]} style={butacaStyle.butaca72} cx="612.5" cy="292.60001" r="15.7" />
      <circle id="butacaElement_73" className={styles["cls-5"]} style={butacaStyle.butaca73} cx="657.79999" cy="298.39999" r="15.7" />
      <circle id="butacaElement_74" className={styles["cls-5"]} style={butacaStyle.butaca74} cx="691.20001" cy="306.29999" r="15.7" />
      <circle id="butacaElement_75" className={styles["cls-5"]} style={butacaStyle.butaca75} cx="734.59998" cy="323.39999" r="15.7" />
      <circle id="butacaElement_76" className={styles["cls-5"]} style={butacaStyle.butaca76} cx="765.29999" cy="339.10001" r="15.7" />
      <circle id="butacaElement_77" className={styles["cls-12"]} style={butacaStyle.butaca77} cx="818.09998" cy="379" r="15.7" />
      <circle id="butacaElement_78" className={styles["cls-12"]} style={butacaStyle.butaca78} cx="841.79999" cy="403.79999" r="15.7" />
      <circle id="butacaElement_79" className={styles["cls-12"]} style={butacaStyle.butaca79} cx="866.90002" cy="435.89999" r="15.7" />
      <circle id="butacaElement_80" className={styles["cls-12"]} style={butacaStyle.butaca80} cx="884" cy="464.89999" r="15.7" />
      <circle id="butacaElement_81" className={styles["cls-3"]} style={butacaStyle.butaca81} cx="900.79999" cy="500.60001" r="15.7" />
      <circle id="butacaElement_82" className={styles["cls-3"]} style={butacaStyle.butaca82} cx="912.20001" cy="533.09998" r="15.7" />
      <circle id="butacaElement_83" className={styles["cls-3"]} style={butacaStyle.butaca83} cx="919.70001" cy="568.59998" r="15.7" />
      <circle id="butacaElement_84" className={styles["cls-3"]} style={butacaStyle.butaca84} cx="923.40002" cy="602.59998" r="15.7" />
      <circle id="butacaElement_85" className={styles["cls-3"]} style={butacaStyle.butaca85} cx="923.90002" cy="638.79999" r="15.7" />
      <circle id="butacaElement_86" className={styles["cls-3"]} style={butacaStyle.butaca86} cx="924" cy="673.20001" r="15.7" />
      <circle id="butacaElement_87" className={styles["cls-4"]} style={butacaStyle.butaca87} cx="214.3" cy="673.5" r="15.7" />
      <circle id="butacaElement_88" className={styles["cls-4"]} style={butacaStyle.butaca88} cx="214.3" cy="639.20001" r="15.7" />
      <circle id="butacaElement_89" className={styles["cls-4"]} style={butacaStyle.butaca89} cx="215" cy="598.59998" r="15.7" />
      <circle id="butacaElement_90" className={styles["cls-4"]} style={butacaStyle.butaca90} cx="218.2" cy="564.5" r="15.7" />
      <circle id="butacaElement_91" className={styles["cls-4"]} style={butacaStyle.butaca91} cx="226.3" cy="525.09998" r="15.7" />
      <circle id="butacaElement_92" className={styles["cls-4"]} style={butacaStyle.butaca92} cx="236.39999" cy="492.60001" r="15.7" />
      <circle id="butacaElement_93" className={styles["cls-4"]} style={butacaStyle.butaca93} cx="252.10001" cy="455.39999" r="15.7" />
      <circle id="butacaElement_94" className={styles["cls-4"]} style={butacaStyle.butaca94} cx="267.70001" cy="425.60001" r="15.7" />
      <circle id="butacaElement_95" className={styles["cls-4"]} style={butacaStyle.butaca95} cx="289.60001" cy="393" r="15.7" />
      <circle id="butacaElement_96" className={styles["cls-4"]} style={butacaStyle.butaca96} cx="315.5" cy="362" r="15.7" />
      <circle id="butacaElement_97" className={styles["cls-4"]} style={butacaStyle.butaca97} cx="339.89999" cy="337.60001" r="15.7" />
      <circle id="butacaElement_98" className={styles["cls-4"]} style={butacaStyle.butaca98} cx="382.70001" cy="304.5" r="15.5" />
      <circle id="butacaElement_99" className={styles["cls-4"]} style={butacaStyle.butaca99} cx="410.5" cy="287.39999" r="15.5" />
      <circle id="butacaElement_100" className={styles["cls-4"]} style={butacaStyle.butaca100} cx="444.29999" cy="270.89999" r="15.5" />
      <circle id="butacaElement_101" className={styles["cls-4"]} style={butacaStyle.butaca101} cx="474.20001" cy="259.60001" r="15.5" />
      <circle id="butacaElement_102" className={styles["cls-10"]} style={butacaStyle.butaca102} cx="510.79999" cy="249" r="15.5" />
      <circle id="butacaElement_103" className={styles["cls-10"]} style={butacaStyle.butaca103} cx="542.29999" cy="243.39999" r="15.5" />
      <circle id="butacaElement_104" className={styles["cls-10"]} style={butacaStyle.butaca104} cx="579" cy="240" r="15.5" />
      <circle id="butacaElement_105" className={styles["cls-10"]} style={butacaStyle.butaca105} cx="611.5" cy="240" r="15.5" />
      <circle id="butacaElement_106" className={styles["cls-10"]} style={butacaStyle.butaca106} cx="648.29999" cy="243.39999" r="15.5" />
      <circle id="butacaElement_107" className={styles["cls-5"]} style={butacaStyle.butaca107} cx="679.79999" cy="248.5" r="15.5" />
      <circle id="butacaElement_108" className={styles["cls-5"]} style={butacaStyle.butaca108} cx="716.40002" cy="259.60001" r="15.5" />
      <circle id="butacaElement_109" className={styles["cls-5"]} style={butacaStyle.butaca109} cx="746.29999" cy="270.89999" r="15.5" />
      <circle id="butacaElement_110" className={styles["cls-5"]} style={butacaStyle.butaca110} cx="780.09998" cy="287.39999" r="15.5" />
      <circle id="butacaElement_111" className={styles["cls-5"]} style={butacaStyle.butaca111} cx="807.79999" cy="304.29999" r="15.5" />
      <circle id="butacaElement_112" className={styles["cls-12"]} style={butacaStyle.butaca112} cx="850.70001" cy="337.60001" r="15.7" />
      <circle id="butacaElement_113" className={styles["cls-12"]} style={butacaStyle.butaca113} cx="875.09998" cy="362" r="15.7" />
      <circle id="butacaElement_114" className={styles["cls-12"]} style={butacaStyle.butaca114} cx="901" cy="393" r="15.7" />
      <circle id="butacaElement_115" className={styles["cls-12"]} style={butacaStyle.butaca115} cx="922.79999" cy="425.60001" r="15.7" />
      <circle id="butacaElement_116" className={styles["cls-12"]} style={butacaStyle.butaca116} cx="938.5" cy="455.39999" r="15.7" />
      <circle id="butacaElement_117" className={styles["cls-16"]} style={butacaStyle.butaca117} cx="954.09998" cy="492.60001" r="15.7" />
      <circle id="butacaElement_118" className={styles["cls-3"]} style={butacaStyle.butaca118} cx="964.20001" cy="525.09998" r="15.7" />
      <circle id="butacaElement_119" className={styles["cls-3"]} style={butacaStyle.butaca119} cx="972.40002" cy="564.5" r="15.7" />
      <circle id="butacaElement_120" className={styles["cls-3"]} style={butacaStyle.butaca120} cx="975.59998" cy="598.59998" r="15.7" />
      <circle id="butacaElement_121" className={styles["cls-3"]} style={butacaStyle.butaca121} cx="976.29999" cy="639.20001" r="15.7" />
      <circle id="butacaElement_122" className={styles["cls-3"]} style={butacaStyle.butaca122} cx="976.29999" cy="673.5" r="15.7" />
      <circle id="butacaElement_123" className={styles["cls-4"]} style={butacaStyle.butaca123} cx="161.7" cy="673.09998" r="15.7" />
      <circle id="butacaElement_124" className={styles["cls-4"]} style={butacaStyle.butaca124} cx="161.7" cy="639" r="15.7" />
      <circle id="butacaElement_125" className={styles["cls-4"]} style={butacaStyle.butaca125} cx="162.10001" cy="603.70001" r="15.7" />
      <circle id="butacaElement_126" className={styles["cls-4"]} style={butacaStyle.butaca126} cx="164.7" cy="570" r="15.7" />
      <circle id="butacaElement_127" className={styles["cls-4"]} style={butacaStyle.butaca127} cx="170" cy="535.90002" r="15.7" />
      <circle id="butacaElement_128" className={styles["cls-4"]} style={butacaStyle.butaca128} cx="178.2" cy="502.79999" r="15.7" />
      <circle id="butacaElement_129" className={styles["cls-4"]} style={butacaStyle.butaca129} cx="188.89999" cy="469.29999" r="15.7" />
      <circle id="butacaElement_130" className={styles["cls-4"]} style={butacaStyle.butaca130} cx="202.39999" cy="437.29999" r="15.7" />
      <circle id="butacaElement_131" className={styles["cls-4"]} style={butacaStyle.butaca131} cx="218.8" cy="405.10001" r="15.7" />
      <circle id="butacaElement_132" className={styles["cls-4"]} style={butacaStyle.butaca132} cx="236.7" cy="376.89999" r="15.7" />
      <circle id="butacaElement_133" className={styles["cls-4"]} style={butacaStyle.butaca133} cx="259.29999" cy="346.89999" r="15.7" />
      <circle id="butacaElement_134" className={styles["cls-4"]} style={butacaStyle.butaca134} cx="283" cy="320.20001" r="15.7" />
      <circle id="butacaElement_135" className={styles["cls-4"]} style={butacaStyle.butaca135} cx="307.79999" cy="296.39999" r="15.7" />
      <circle id="butacaElement_136" className={styles["cls-4"]} style={butacaStyle.butaca136} cx="351" cy="262.60001" r="15.7" />
      <circle id="butacaElement_137" className={styles["cls-4"]} style={butacaStyle.butaca137} cx="379" cy="245.10001" r="15.7" />
      <circle id="butacaElement_138" className={styles["cls-4"]} style={butacaStyle.butaca138} cx="422.89999" cy="223" r="15.7" />
      <circle id="butacaElement_139" className={styles["cls-10"]} style={butacaStyle.butaca139} cx="453.89999" cy="211" r="15.7" />
      <circle id="butacaElement_140" className={styles["cls-21"]} style={butacaStyle.butaca140} cx="499" cy="197.89999" r="15.7" />
      <circle id="butacaElement_141" className={styles["cls-10"]} style={butacaStyle.butaca141} cx="531.59998" cy="192.10001" r="15.7" />
      <circle id="butacaElement_142" className={styles["cls-10"]} style={butacaStyle.butaca142} cx="577.90002" cy="187.60001" r="15.7" />
      <circle id="butacaElement_143" className={styles["cls-10"]} style={butacaStyle.butaca143} cx="612.59998" cy="187.60001" r="15.7" />
      <circle id="butacaElement_144" className={styles["cls-10"]} style={butacaStyle.butaca144} cx="659" cy="192.10001" r="15.7" />
      <circle id="butacaElement_145" className={styles["cls-5"]} style={butacaStyle.butaca145} cx="691.5" cy="197.89999" r="15.7" />
      <circle id="butacaElement_146" className={styles["cls-5"]} style={butacaStyle.butaca146} cx="736.59998" cy="211" r="15.7" />
      <circle id="butacaElement_147" className={styles["cls-5"]} style={butacaStyle.butaca147} cx="767.70001" cy="223" r="15.7" />
      <circle id="butacaElement_148" className={styles["cls-5"]} style={butacaStyle.butaca148} cx="811.5" cy="245.10001" r="15.7" />
      <circle id="butacaElement_149" className={styles["cls-5"]} style={butacaStyle.butaca149} cx="839.5" cy="262.60001" r="15.7" />
      <circle id="butacaElement_150" className={styles["cls-12"]} style={butacaStyle.butaca150} cx="882.70001" cy="296.39999" r="15.7" />
      <circle id="butacaElement_151" className={styles["cls-12"]} style={butacaStyle.butaca151} cx="907.5" cy="320.20001" r="15.7" />
      <circle id="butacaElement_152" className={styles["cls-12"]} style={butacaStyle.butaca152} cx="931.20001" cy="346.89999" r="15.7" />
      <circle id="butacaElement_153" className={styles["cls-12"]} style={butacaStyle.butaca153} cx="953.79999" cy="376.89999" r="15.7" />
      <circle id="butacaElement_154" className={styles["cls-12"]} style={butacaStyle.butaca154} cx="971.70001" cy="405.10001" r="15.7" />
      <circle id="butacaElement_155" className={styles["cls-12"]} style={butacaStyle.butaca155} cx="988.20001" cy="437.29999" r="15.7" />
      <circle id="butacaElement_156" className={styles["cls-3"]} style={butacaStyle.butaca156} cx="1001.6" cy="469.29999" r="15.7" />
      <circle id="butacaElement_157" className={styles["cls-3"]} style={butacaStyle.butaca157} cx="1012.3" cy="502.79999" r="15.7" />
      <circle id="butacaElement_158" className={styles["cls-3"]} style={butacaStyle.butaca158} cx="1020.6" cy="535.9" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 328.100237, 1457.499978)" />
      <circle id="butacaElement_159" className={styles["cls-3"]} style={butacaStyle.butaca159} cx="1025.8" cy="570" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 298.800163, 1491.299904)" />
      <circle id="butacaElement_160" className={styles["cls-3"]} style={butacaStyle.butaca160} cx="1028.4" cy="603.7" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 267.800199, 1522.099954)" />
      <circle id="butacaElement_161" className={styles["cls-3"]} style={butacaStyle.butaca161} cx="1028.9" cy="639" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 233.300158, 1552.299906)" />
      <circle id="butacaElement_162" className={styles["cls-3"]} style={butacaStyle.butaca162} cx="1028.9" cy="673.1" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 199.700173, 1580.899882)" />
      <circle id="butacaElement_163" className={styles["cls-4"]} style={butacaStyle.butaca163} cx="109.3" cy="673.09998" r="15.7" />
      <circle id="butacaElement_164" className={styles["cls-4"]} style={butacaStyle.butaca164} cx="109.3" cy="639" r="15.7" />
      <circle id="butacaElement_165" className={styles["cls-4"]} style={butacaStyle.butaca165} cx="109.5" cy="600.90002" r="15.7" />
      <circle id="butacaElement_166" className={styles["cls-4"]} style={butacaStyle.butaca166} cx="112.2" cy="566.70001" r="15.7" />
      <circle id="butacaElement_167" className={styles["cls-4"]} style={butacaStyle.butaca167} cx="117.9" cy="530.2" r="15.7" transform="matrix(0.995056, -0.09932, 0.09932, 0.995056, -51.699999, 14.199993)" />
      <circle id="butacaElement_168" className={styles["cls-4"]} style={butacaStyle.butaca168} cx="125.2" cy="497.20001" r="15.7" />
      <circle id="butacaElement_169" className={styles["cls-4"]} style={butacaStyle.butaca169} cx="135.7" cy="462" r="15.7" />
      <circle id="butacaElement_170" className={styles["cls-4"]} style={butacaStyle.butaca170} cx="148.10001" cy="429.79999" r="15.7" />
      <circle id="butacaElement_171" className={styles["cls-4"]} style={butacaStyle.butaca171} cx="164.39999" cy="395.5" r="15.7" />
      <circle id="butacaElement_172" className={styles["cls-4"]} style={butacaStyle.butaca172} cx="181.3" cy="365.70001" r="15.7" />
      <circle id="butacaElement_173" className={styles["cls-4"]} style={butacaStyle.butaca173} cx="202.3" cy="334.60001" r="15.7" />
      <circle id="butacaElement_174" className={styles["cls-4"]} style={butacaStyle.butaca174} cx="224" cy="307.20001" r="15.7" />
      <circle id="butacaElement_175" className={styles["cls-4"]} style={butacaStyle.butaca175} cx="250" cy="278.60001" r="15.7" />
      <circle id="butacaElement_176" className={styles["cls-4"]} style={butacaStyle.butaca176} cx="275.29999" cy="254.89999" r="15.7" />
      <circle id="butacaElement_177" className={styles["cls-4"]} style={butacaStyle.butaca177} cx="315.39999" cy="223.60001" r="15.5" />
      <circle id="butacaElement_178" className={styles["cls-4"]} style={butacaStyle.butaca178} cx="342.89999" cy="206.2" r="15.5" />
      <circle id="butacaElement_179" className={styles["cls-14"]} style={butacaStyle.butaca179} cx="375.79999" cy="186.8" r="15.5" />
      <circle id="butacaElement_180" className={styles["cls-14"]} style={butacaStyle.butaca180} cx="405.10001" cy="173.7" r="15.5" />
      <circle id="butacaElement_181" className={styles["cls-14"]} style={butacaStyle.butaca181} cx="440.10001" cy="159.7" r="15.5" />
      <circle id="butacaElement_182" className={styles["cls-10"]} style={butacaStyle.butaca182} cx="470.70001" cy="150.7" r="15.5" />
      <circle id="butacaElement_183" className={styles["cls-10"]} style={butacaStyle.butaca183} cx="507.6" cy="142.6" r="15.5" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 285.500065, 620.799974)" />
      <circle id="butacaElement_184" className={styles["cls-9"]} style={butacaStyle.butaca184} cx="539.90002" cy="138.10001" r="15.5" />
      <circle id="butacaElement_185" className={styles["cls-9"]} style={butacaStyle.butaca185} cx="578.20001" cy="135" r="15.5" />
      <circle id="butacaElement_186" className={styles["cls-9"]} style={butacaStyle.butaca186} cx="612.29999" cy="135" r="15.5" />
      <circle id="butacaElement_187" className={styles["cls-18"]} style={butacaStyle.butaca187} cx="650.59998" cy="138.39999" r="15.5" />
      <circle id="butacaElement_188" className={styles["cls-13"]} style={butacaStyle.butaca188} cx="685.40002" cy="142.60001" r="15.5" />
      <circle id="butacaElement_189" className={styles["cls-13"]} style={butacaStyle.butaca189} cx="719.90002" cy="150.7" r="15.5" />
      <circle id="butacaElement_190" className={styles["cls-13"]} style={butacaStyle.butaca190} cx="750.40002" cy="159.7" r="15.5" />
      <circle id="butacaElement_191" className={styles["cls-13"]} style={butacaStyle.butaca191} cx="785.5" cy="173.7" r="15.5" />
      <circle id="butacaElement_192" className={styles["cls-5"]} style={butacaStyle.butaca192} cx="814.79999" cy="186.8" r="15.5" />
      <circle id="butacaElement_193" className={styles["cls-5"]} style={butacaStyle.butaca193} cx="847.59998" cy="206.2" r="15.5" />
      <circle id="butacaElement_194" className={styles["cls-5"]} style={butacaStyle.butaca194} cx="875.20001" cy="223.60001" r="15.5" />
      <circle id="butacaElement_195" className={styles["cls-12"]} style={butacaStyle.butaca195} cx="915.20001" cy="254.89999" r="15.7" />
      <circle id="butacaElement_196" className={styles["cls-12"]} style={butacaStyle.butaca196} cx="940.5" cy="278.60001" r="15.7" />
      <circle id="butacaElement_197" className={styles["cls-12"]} style={butacaStyle.butaca197} cx="966.59998" cy="307.20001" r="15.7" />
      <circle id="butacaElement_198" className={styles["cls-12"]} style={butacaStyle.butaca198} cx="988.20001" cy="334.60001" r="15.7" />
      <circle id="butacaElement_199" className={styles["cls-12"]} style={butacaStyle.butaca199} cx="1009.2" cy="365.70001" r="15.7" />
      <circle id="butacaElement_200" className={styles["cls-12"]} style={butacaStyle.butaca200} cx="1026.1" cy="395.5" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 471.300166, 1344.999851)" />
      <circle id="butacaElement_201" className={styles["cls-12"]} style={butacaStyle.butaca201} cx="1042.5" cy="429.79999" r="15.7" />
      <circle id="butacaElement_202" className={styles["cls-3"]} style={butacaStyle.butaca202} cx="1054.9" cy="462" r="15.7" />
      <circle id="butacaElement_203" className={styles["cls-3"]} style={butacaStyle.butaca203} cx="1065.3" cy="497.20001" r="15.7" />
      <circle id="butacaElement_204" className={styles["cls-3"]} style={butacaStyle.butaca204} cx="1072.7" cy="530.20001" r="15.7" />
      <circle id="butacaElement_205" className={styles["cls-3"]} style={butacaStyle.butaca205} cx="1078.3" cy="566.70001" r="15.7" />
      <circle id="butacaElement_206" className={styles["cls-3"]} style={butacaStyle.butaca206} cx="1081" cy="600.90002" r="15.7" />
      <circle id="butacaElement_207" className={styles["cls-3"]} style={butacaStyle.butaca207} cx="1081.3" cy="639" r="15.7" />
      <circle id="butacaElement_208" className={styles["cls-3"]} style={butacaStyle.butaca208} cx="1081.3" cy="673.09998" r="15.7" />
      <circle id="butacaElement_209" className={styles["cls-4"]} style={butacaStyle.butaca209} cx="56.6" cy="636.4" r="15.7" transform="matrix(0.033155, -0.99945, 0.99945, 0.033155, -581.299993, 671.799988)" />
      <circle id="butacaElement_210" className={styles["cls-4"]} style={butacaStyle.butaca210} cx="57.1" cy="602.5" r="15.7" transform="matrix(0.033155, -0.99945, 0.99945, 0.033155, -547.000005, 639.5)" />
      <circle id="butacaElement_211" className={styles["cls-4"]} style={butacaStyle.butaca211} cx="59.9" cy="562.9" r="15.7" transform="matrix(0.033155, -0.99945, 0.99945, 0.033155, -504.699986, 603.999939)" />
      <circle id="butacaElement_212" className={styles["cls-4"]} style={butacaStyle.butaca212} cx="64.5" cy="528.9" r="15.7" transform="matrix(0.033155, -0.99945, 0.99945, 0.033155, -466.300022, 575.799988)" />
      <circle id="butacaElement_213" className={styles["cls-4"]} style={butacaStyle.butaca213} cx="72.6" cy="490.9" r="15.7" transform="matrix(0.033155, -0.99945, 0.99945, 0.033155, -420.399998, 547.099976)" />
      <circle id="butacaElement_214" className={styles["cls-4"]} style={butacaStyle.butaca214} cx="81.699997" cy="457.79999" r="15.7" />
      <circle id="butacaElement_215" className={styles["cls-4"]} style={butacaStyle.butaca215} cx="94.800003" cy="421.29999" r="15.7" />
      <circle id="butacaElement_216" className={styles["cls-4"]} style={butacaStyle.butaca216} cx="108.8" cy="389.39999" r="15.7" />
      <circle id="butacaElement_217" className={styles["cls-4"]} style={butacaStyle.butaca217} cx="127.4" cy="354.1" r="15.7" transform="matrix(0.995056, -0.09932, 0.09932, 0.995056, -34.300001, 14.299995)" />
      <circle id="butacaElement_218" className={styles["cls-4"]} style={butacaStyle.butaca218} cx="144.89999" cy="325.10001" r="15.7" />
      <circle id="butacaElement_219" className={styles["cls-4"]} style={butacaStyle.butaca219} cx="168.7" cy="292.10001" r="15.7" />
      <circle id="butacaElement_220" className={styles["cls-4"]} style={butacaStyle.butaca220} cx="190.8" cy="265.10001" r="15.7" />
      <circle id="butacaElement_221" className={styles["cls-4"]} style={butacaStyle.butaca221} cx="218.10001" cy="236.2" r="15.7" />
      <circle id="butacaElement_222" className={styles["cls-4"]} style={butacaStyle.butaca222} cx="243.2" cy="213.60001" r="15.7" />
      <circle id="butacaElement_223" className={styles["cls-20"]} style={butacaStyle.butaca223} cx="283.10001" cy="181.8" r="15.5" />
      <circle id="butacaElement_224" className={styles["cls-20"]} style={butacaStyle.butaca224} cx="315.70001" cy="160.39999" r="15.5" />
      <circle id="butacaElement_225" className={styles["cls-1"]} style={butacaStyle.butaca225} cx="343.89999" cy="144.7" r="15.5" />
      <circle id="butacaElement_226" className={styles["cls-1"]} style={butacaStyle.butaca226} cx="377.79999" cy="127.9" r="15.5" />
      <circle id="butacaElement_227" className={styles["cls-1"]} style={butacaStyle.butaca227} cx="407.39999" cy="116" r="15.5" />
      <circle id="butacaElement_228" className={styles["cls-1"]} style={butacaStyle.butaca228} cx="443.39999" cy="104.1" r="15.5" />
      <circle id="butacaElement_229" className={styles["cls-1"]} style={butacaStyle.butaca229} cx="475" cy="96.199997" r="15.5" />
      <circle id="butacaElement_230" className={styles["cls-9"]} style={butacaStyle.butaca230} cx="512" cy="88.400002" r="15.5" />
      <circle id="butacaElement_231" className={styles["cls-9"]} style={butacaStyle.butaca231} cx="544.29999" cy="84.699997" r="15.5" />
      <circle id="butacaElement_232" className={styles["cls-9"]} style={butacaStyle.butaca232} cx="579" cy="82.5" r="15.5" />
      <circle id="butacaElement_233" className={styles["cls-9"]} style={butacaStyle.butaca233} cx="611.5" cy="82.5" r="15.5" />
      <circle id="butacaElement_234" className={styles["cls-9"]} style={butacaStyle.butaca234} cx="646.29999" cy="84.599998" r="15.5" />
      <circle id="butacaElement_235" className={styles["cls-13"]} style={butacaStyle.butaca235} cx="678.5" cy="88.400002" r="15.5" />
      <circle id="butacaElement_236" className={styles["cls-13"]} style={butacaStyle.butaca235} cx="715.59998" cy="96.199997" r="15.5" />
      <circle id="butacaElement_237" className={styles["cls-13"]} style={butacaStyle.butaca236} cx="747.09998" cy="104.1" r="15.5" />
      <circle id="butacaElement_238" className={styles["cls-13"]} style={butacaStyle.butaca237} cx="783.09998" cy="116" r="15.5" />
      <circle id="butacaElement_239" className={styles["cls-13"]} style={butacaStyle.butaca238} cx="812.79999" cy="127.9" r="15.5" />
      <circle id="butacaElement_240" className={styles["cls-13"]} style={butacaStyle.butaca239} cx="846.59998" cy="144.7" r="15.5" />
      <circle id="butacaElement_241" className={styles["cls-13"]} style={butacaStyle.butaca240} cx="874.79999" cy="160.39999" r="15.5" />
      <circle id="butacaElement_242" className={styles["cls-13"]} style={butacaStyle.butaca241} cx="907.5" cy="181.8" r="15.5" />
      <circle id="butacaElement_243" className={styles["cls-12"]} style={butacaStyle.butaca242} cx="947.40002" cy="213.60001" r="15.7" />
      <circle id="butacaElement_244" className={styles["cls-12"]} style={butacaStyle.butaca243} cx="972.40002" cy="236.2" r="15.7" />
      <circle id="butacaElement_245" className={styles["cls-12"]} style={butacaStyle.butaca244} cx="999.70001" cy="265.10001" r="15.7" />
      <circle id="butacaElement_246" className={styles["cls-12"]} style={butacaStyle.butaca245} cx="1021.9" cy="292.1" r="15.7" transform="matrix(0.159881, -0.987136, 0.987136, 0.159881, 569.900095, 1253.999849)" />
      <circle id="butacaElement_247" className={styles["cls-12"]} style={butacaStyle.butaca246} cx="1045.7" cy="325.10001" r="15.7" />
      <circle id="butacaElement_248" className={styles["cls-12"]} style={butacaStyle.butaca247} cx="1063.2" cy="354.10001" r="15.7" />
      <circle id="butacaElement_249" className={styles["cls-12"]} style={butacaStyle.butaca248} cx="1081.8" cy="389.39999" r="15.7" />
      <circle id="butacaElement_250" className={styles["cls-12"]} style={butacaStyle.butaca249} cx="1095.7" cy="421.29999" r="15.7" />
      <circle id="butacaElement_251" className={styles["cls-12"]} style={butacaStyle.butaca250} cx="1108.8" cy="457.79999" r="15.7" />
      <circle id="butacaElement_252" className={styles["cls-12"]} style={butacaStyle.butaca251} cx="1118" cy="490.89999" r="15.7" />
      <circle id="butacaElement_253" className={styles["cls-19"]} style={butacaStyle.butaca252} cx="1126.1" cy="528.90002" r="15.7" />
      <circle id="butacaElement_254" className={styles["cls-11"]} style={butacaStyle.butaca253} cx="1130.6" cy="562.90002" r="15.7" />
      <circle id="butacaElement_255" className={styles["cls-11"]} style={butacaStyle.butaca254} cx="1133.5" cy="602.5" r="15.7" />
      <circle id="butacaElement_256" className={styles["cls-11"]} style={butacaStyle.butaca255} cx="1133.9" cy="636.40002" r="15.7" />
      <circle id="butacaElement_0" className={styles["cls-3"]} style={butacaStyle.butaca0} cx="595.29999" cy="639.5" r="15.7" />
    </svg>
  )
}
