export const Senadores = ({ senadores }: {
  senadores: {
    nombre: string,
    color: string,
  }[]
}) => {
  const butacas = [
    72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48,
    47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24,
    23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  ]
  const butacaStyle: { [butaca: string]: { fill: string } } = Object.fromEntries(senadores.map(({ color }, i) => [`butaca${butacas[i]}`, { fill: color }]))
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 340.2 220.5">
      <g>
        <g id="Layer_1">
          <circle style={butacaStyle.butaca1} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-16"  cx="183" cy="116.4" r="7.1" transform="translate(38.7 278.4) rotate(-80.8)" />
          <circle style={butacaStyle.butaca2} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-8-2" cx="199.1" cy="124.3" r="7.1" />
          <circle style={butacaStyle.butaca3} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-6-5" cx="212" cy="136.2" r="7.1" />
          <circle style={butacaStyle.butaca4} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-65-7" cx="219.3" cy="151.9" r="7.1" />
          <circle style={butacaStyle.butaca5} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-4-3" cx="219.3" cy="169.9" r="7.1" />
          <circle style={butacaStyle.butaca6} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-0-3" cx="257.5" cy="174.5" r="7.1" />
          <circle style={butacaStyle.butaca7} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-7-4" cx="256.8" cy="156.3" r="7.1" />
          <circle style={butacaStyle.butaca8} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-2-7" cx="254.7" cy="138.8" r="7.1" />
          <circle style={butacaStyle.butaca9} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-3-6" cx="247.3" cy="122.5" r="7.1" />
          <circle style={butacaStyle.butaca10} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-5-5" cx="234" cy="106.5" r="7.1" />
          <circle style={butacaStyle.butaca11} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-07-8" cx="218.6" cy="94.3" r="7.1" />
          <circle style={butacaStyle.butaca12} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-47-4" cx="201.1" cy="84.9" r="7.1" />
          <circle style={butacaStyle.butaca13} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-33-2" cx="182.4" cy="79.5" r="7.1" />
          <circle style={butacaStyle.butaca14} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-72-1" cx="183.3" cy="48.3" r="7.1" />
          <circle style={butacaStyle.butaca15} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-1-1" cx="201.6" cy="52.2" r="7.1" />
          <circle style={butacaStyle.butaca16} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-17-9" cx="219.3" cy="58.3" r="7.1" />
          <circle style={butacaStyle.butaca17} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-15-5" cx="235.6" cy="67.2" r="7.1" />
          <circle style={butacaStyle.butaca18} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-23-2" cx="250.7" cy="78.6" r="7.1" />
          <circle style={butacaStyle.butaca19} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-28-0" cx="264.5" cy="91.3" r="7.1" />
          <circle style={butacaStyle.butaca20} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-21-54" cx="275.4" cy="105.7" r="7.1" />
          <circle style={butacaStyle.butaca21} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-27-8" cx="283" cy="121.3" r="7.1" />
          <circle style={butacaStyle.butaca22} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-12-5" cx="287" cy="137.9" r="7.1" />
          <circle style={butacaStyle.butaca23} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-13-2" cx="288.4" cy="155.2" r="7.1" />
          <circle style={butacaStyle.butaca24} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-09-8" cx="288.7" cy="172" r="7.1" />
          <circle style={butacaStyle.butaca25} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-150-6" cx="318.4" cy="166" r="7.1" />
          <circle style={butacaStyle.butaca26} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-9-7" cx="318.7" cy="147.4" r="7.1" />
          <circle style={butacaStyle.butaca27} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-92-2" cx="317.4" cy="128.4" r="7.1" />
          <circle style={butacaStyle.butaca28} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-95-4" cx="313.5" cy="109" r="7.1" />
          <circle style={butacaStyle.butaca29} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-98-7" cx="306" cy="91.5" r="7.1" />
          <circle style={butacaStyle.butaca30} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-50-1" cx="294.9" cy="75.5" r="7.1" />
          <circle style={butacaStyle.butaca31} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-954-2" cx="282.3" cy="59.8" r="7.1" />
          <circle style={butacaStyle.butaca32} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-99-93" cx="267" cy="45.3" r="7.1" />
          <circle style={butacaStyle.butaca33} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-52-6" cx="249.4" cy="32.7" r="7.1" />
          <circle style={butacaStyle.butaca34} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-153-0" cx="230.7" cy="24.6" r="7.1" />
          <circle style={butacaStyle.butaca35} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-37-4" cx="211.4" cy="17.9" r="7.1" />
          <circle style={butacaStyle.butaca36} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-56-1" cx="192.5" cy="15.2" r="7.1" />
          <circle style={butacaStyle.butaca37} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-16-6" cx="157.2" cy="116.4" r="7.1" />
          <circle style={butacaStyle.butaca38} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-8-2-1" cx="141.1" cy="124.3" r="7.1" />
          <circle style={butacaStyle.butaca39} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-6-5-7" cx="128.2" cy="136.2" r="7.1" />
          <circle style={butacaStyle.butaca40} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-65-7-5" cx="120.9" cy="151.9" r="7.1" />
          <circle style={butacaStyle.butaca41} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-4-3-8" cx="120.9" cy="169.9" r="7.1" />
          <circle style={butacaStyle.butaca42} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-0-3-2" cx="82.7" cy="174.5" r="7.1" />
          <circle style={butacaStyle.butaca43} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-7-4-1" cx="83.4" cy="156.3" r="7.1" />
          <circle style={butacaStyle.butaca44} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-2-7-6" cx="85.5" cy="138.8" r="7.1" />
          <circle style={butacaStyle.butaca45} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-3-6-4" cx="92.9" cy="122.5" r="7.1" />
          <circle style={butacaStyle.butaca46} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-5-5-0" cx="106.3" cy="106.5" r="7.1" />
          <circle style={butacaStyle.butaca47} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-07-8-5" cx="121.6" cy="94.3" r="7.1" />
          <circle style={butacaStyle.butaca48} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-47-4-6" cx="139.1" cy="84.9" r="7.1" />
          <circle style={butacaStyle.butaca49} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-33-2-0" cx="157.8" cy="79.5" r="7.1" />
          <circle style={butacaStyle.butaca50} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-72-1-1" cx="156.9" cy="48.3" r="7.1" />
          <circle style={butacaStyle.butaca51} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-1-1-2" cx="138.6" cy="52.2" r="7.1" />
          <circle style={butacaStyle.butaca52} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-17-9-9" cx="120.9" cy="58.3" r="7.1" />
          <circle style={butacaStyle.butaca53} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-15-5-9" cx="104.6" cy="67.2" r="7.1" />
          <circle style={butacaStyle.butaca54} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-23-2-0" cx="89.5" cy="78.6" r="7.1" />
          <circle style={butacaStyle.butaca55} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-28-0-6" cx="75.7" cy="91.3" r="7.1" />
          <circle style={butacaStyle.butaca56} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-21-54-3" cx="64.8" cy="105.7" r="7.1" />
          <circle style={butacaStyle.butaca57} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-27-8-1" cx="57.2" cy="121.3" r="7.1" />
          <circle style={butacaStyle.butaca58} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-12-5-3" cx="53.2" cy="137.9" r="7.1" />
          <circle style={butacaStyle.butaca59} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-13-2-6" cx="51.8" cy="155.2" r="7.1" />
          <circle style={butacaStyle.butaca60} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-09-8-3" cx="51.5" cy="172" r="7.1" />
          <circle style={butacaStyle.butaca61} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-150-6-3" cx="21.8" cy="166" r="7.1" />
          <circle style={butacaStyle.butaca62} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-9-7-9" cx="21.5" cy="147.4" r="7.1" />
          <circle style={butacaStyle.butaca63} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-92-2-0" cx="22.8" cy="128.4" r="7.1" />
          <circle style={butacaStyle.butaca64} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-95-4-8" cx="25.6" cy="109" r="7.1" />
          <circle style={butacaStyle.butaca65} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-98-7-6" cx="34.2" cy="91.5" r="7.1" />
          <circle style={butacaStyle.butaca66} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-50-1-2" cx="45.3" cy="75.5" r="7.1" />
          <circle style={butacaStyle.butaca67} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-954-2-7" cx="57.9" cy="59.8" r="7.1" />
          <circle style={butacaStyle.butaca68} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-99-93-8" cx="73.2" cy="45.3" r="7.1" />
          <circle style={butacaStyle.butaca69} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-52-6-1" cx="90.8" cy="32.7" r="7.1" />
          <circle style={butacaStyle.butaca70} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-153-0-4" cx="109.5" cy="24.6" r="7.1" />
          <circle style={butacaStyle.butaca71} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-37-4-9" cx="128.8" cy="17.9" r="7.1" />
          <circle style={butacaStyle.butaca72} id="circle9-0-08-4-0-9-36-4-0-0-8-5-9-56-1-2" cx="147.7" cy="15.2" r="7.1" />
        </g>
      </g>
    </svg>
  )
}
