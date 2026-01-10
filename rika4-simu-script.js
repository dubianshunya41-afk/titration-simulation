function calculate() {
  const acidType = document.getElementById("acidType").value;
  const acidConc = Number(document.getElementById("acidConc").value);
  const acidVol = Number(document.getElementById("acidVol").value) / 1000;

  // NaOH
  const naohConc = 4.67;
  const naohVol = 0.045;
  const nOH = naohConc * naohVol;

  // 酸のH+量
  let nH = acidConc * acidVol;
  if (acidType === "H2SO4") {
    nH *= 2;
  }

  const totalVol = naohVol + acidVol;
  const diff = nH - nOH;

  let pH, nature;

  if (Math.abs(diff) < 1e-5) {
    pH = 7;
    nature = "中性";
    nature = "中性";
  } else if (diff > 0) {
    const H = diff / totalVol;
    pH = -Math.log10(H);
    nature = "酸性";
  } else {
    const OH = Math.abs(diff) / totalVol;
    const pOH = -Math.log10(OH);
    pH = 14 - pOH;
    nature = "塩基性";
  }

  document.getElementById("result").innerHTML =
    `pH：${pH.toFixed(2)}<br>液性：${nature}`;

}


