import React from "react";
import Card from "../Component/Card";
import "./Team.css";
import Rudra from "../Asset/Image/RUDRA.png";
import Adil from "../Asset/Image/ADIL.png";
import Nihal from "../Asset/Image/NIHAL.png";
import Smruti from "../Asset/Image/SMRUTIKANT.png";
export default function Team() {
  return (
    <div>
      <h1> My Team</h1>

      <div className="flex">
        <div
          style={{
            top: "200px",
            left: "70px",
            width: "348px",
            height: "456px",
            position: "absolute",
          }}
        >
          <Card imgRudra={Rudra} Name="RUDRA" Email="rd43057@gmail.com" />
        </div>
        <div
          style={{
            left: "390px",
            top: "200px",
            position: "absolute",
          }}
        >
          <Card imgRudra={Adil} Name="ADIL" Email="adil@234gmail.com" />
        </div>
        <div
          style={{
            left: "710px",
            top: "200px",
            position: "absolute",
          }}
        >
          <Card imgRudra={Nihal} Name="NIHAL" Email="nihal@234gmail.com" />
        </div>
        <div
          style={{
            left: "1020px",
            top: "200px",
            position: "absolute",
          }}
        >
          <Card
            imgRudra={Smruti}
            Name="SMRUTIKANT"
            Email="smruri@234gmail.com"
          />
        </div>
      </div>
    </div>
  );
}
