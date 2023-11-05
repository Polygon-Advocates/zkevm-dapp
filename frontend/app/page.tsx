'use client'

import React, { useEffect } from "react";
import { ConnectKitButton } from "connectkit";
import "./globals.css";

import MyContract from '../MyContract.json';
import { useContractRead } from "wagmi";

const CONTRACT_ADDRESS = '0x4aB2f5Bc640c5D8272a479C7d277CBD23027b662'

export default function Home() {

  // const { data, isError, isLoading } = useContractRead({
  //   address: "0x4aB2f5Bc640c5D8272a479C7d277CBD23027b662",
  //   abi: MyContract.abi,
  //   functionName: 'getCount',
  // })

  const { data, isError, isLoading } = useContractRead({
    address: "0x87d45B5651dAf43E442Be3FDC79Df2D291fEA30A",
    abi: MyContract.abi,
    functionName: 'getCount',
  });

  useEffect(() => {
    console.log("data", data)
  }, [data, isLoading, isError])

  return (
    <main className="container element">
      <div className="nav">
        <div className="navTitle">
          <p>
            Counter dApp built using
            <b> zkEVMs</b>, <b>CW3D</b> and, <b>Next.js</b>
          </p>
        </div>
        <div className="navRightBox">
          <ConnectKitButton />
        </div>
      </div>

      <div className="counterBox">
        <div>
          <h1 className="counterText">12</h1>
          <div className="buttonBox">
            <button className="button">Increase ( +1 )</button>
            <button className="button">Decrease ( -1 )</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <a
          href="https://github.com/Polygon-Advocates/zkevm-nextjs-counter-dapp"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            GitHub
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Checkout this project repo</p>
        </a>

        <a
          href="https://polygon.technology/polygon-zkevm"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            zkEVM
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Bring Ethereum to everyone</p>
        </a>

        <a
          href="https://createweb3dapp.alchemy.com/"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            CW3D
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Toolkit for Ethereum development</p>
        </a>

        <a
          href="https://nextjs.org/"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            Next.js
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">The React Framework for the web</p>
        </a>
      </div>
    </main>
  );
}