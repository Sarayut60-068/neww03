import React, { useEffect, useState, createRef, useRef } from "react";
import NavLayout from "../layouts/NavLayout";
import styles from "./styles.module.css";
import axios from "axios";


const trade: React.FC = () => {
    const [token1, setToken1] = useState("");
    const [token2, setToken2] = useState("");
    const [allData, setAllData] = useState([]);
    const [display, setDisplay] = useState(0);

    const getApi = async (e: React.FormEvent) => {
        e.preventDefault()
        if (token1 == null || token1 == '' || token2 == null || token2 == '') {
            window.alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        const url = `https://api1.binance.com/api/v3/avgPrice?symbol=${token1}${token2}`;
        const resBinance = await fetch(url);
        const Binance = await resBinance.json();
        const priceBinance: number = Binance.price;
        // const name1Binance: string = Binance.price.name;

        const url2 = await axios.get('./api/FTX', {
            params: { token1, token2 }
        })
        const priceFTX: number = url2.data.result.price;


    }



    const Show = () => {
        return (
            <div>

            </div>
        );
    };


    return (
        <NavLayout>
            <div className="bg-lightbg min-h-screen">
                <div className="flex justify-center w-full px-16 relative mb-14">
                    <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
                        <form>
                            <h1 className="text-3xl font-bold text-center mb-7">Market Diff</h1>
                            <div className="flex justify-center mb-5 space-x-12">

                                <label className="text-lg">Token 1 </label>
                                <div style={{ margin: "10px" }}>
                                    <input type="text" id="token1" name="token1"
                                        placeholder="Fill in token"
                                        className="p-2 rounded shadow w-full"
                                        onChange={(e) => setToken1(e.target.value)} />
                                </div >
                                <label className="text-lg">Token 2 </label>
                                <div style={{ margin: "10px" }}>
                                    <input type="text" id="token2" name="token2"
                                        placeholder="Fill in token"
                                        className="p-2 rounded shadow w-full"
                                        onChange={(e) => setToken2(e.target.value)} />
                                </div>

                            </div>
                            <div style={{ margin: "10px" }} className="flex justify-center">
                                <input type="submit" value="Fetch" className="rounded bg-darkbg text-white px-12 py-4 " onClick={getApi}></input>
                            </div>
                        </form>
                    </div>

                    <div className="bg-darkbg h-full w-full absolute -top-20" />

                </div>
                <div className="flex w-full px-16">
                    <div className="flex justify-center w-full  ">{display > 0 && <Show />}</div>
                </div>
            </div>


        </NavLayout>

    );
}

export default trade