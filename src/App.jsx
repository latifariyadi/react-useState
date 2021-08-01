import { useState } from "react";
import "./App.css";

function App() {
  //Membuat state
  const [nama, setNama] = useState("Ubah saya");
  const [warna, setWarna] = useState("#6d1cd0");
  const [ukuran, setUkuran] = useState(24);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h3 style={{ color: warna, fontSize: `${ukuran}px` }}>{nama}</h3>

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Tampilkan editor
      </button>

      {show === true && (
        <>
          <label htmlFor="text">Masukkan teks</label>
          <input
            value={nama}
            type="text"
            id="text"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />

          <label htmlFor="color">Pilih color</label>
          <input
            value={warna}
            type="color"
            id="color"
            onChange={(c) => {
              setWarna(c.target.value);
            }}
          />

          <label htmlFor="size">Ukuran teks {ukuran}</label>
          <input
            value={ukuran}
            type="range"
            min={10}
            max={120}
            id="size"
            onChange={(s) => {
              setUkuran(s.target.value);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
