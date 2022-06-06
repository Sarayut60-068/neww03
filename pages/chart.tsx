import React, { useEffect, useState, createRef, useRef } from "react";
import axios from "axios";
import dayjs from 'dayjs';
import styles from "./styles.module.css";
import { createChart } from 'lightweight-charts';
import NavLayout from "../layouts/NavLayout";

const chart: React.FC = () => {
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
        const url = `https://api1.binance.com/api/v3/klines?interval=1h&symbol=${token1}${token2}`;
        const resBinance = await fetch(url);
        const Binance = await resBinance.json();
        const array: any = [];
        Binance.map((item: any) => {
            const formatdate = dayjs(item[0]).format("YYYY-MM-DD");
            const newobject = {
                time: formatdate,
                open: item[1],
                hight: item[2],
                low: item[3],
                close: item[4]
            };

            array.push(newobject)
        });
        console.log(array);

        // const chart = createChart(object);

        // const chart = createChart(container);

        // const areaSeries = chart.addAreaSeries();
        // areaSeries.setData([
        //     // ... other data items
        //     { time: '2018-12-31', value: 22.67 },
        // ]);

        // const candlestickSeries = chart.addCandlestickSeries();
        // candlestickSeries.setData([
        //     // ... other data items
        //     { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
        // ]);

        // // sometime later

        // // update the most recent bar
        // areaSeries.update({ time: '2018-12-31', value: 25 });
        // candlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });

        // // creating the new bar
        // areaSeries.update({ time: '2019-01-01', value: 20 });
        // candlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });
    }



    const Show = () => {
        return (
            <div>
                {/* <h2>List1</h2>
                <table>
                    <tr>
                        <th>Token1</th>
                        <th>Token2</th>
                        <th>Binance</th>
                        <th>FTX</th>
                        <th>Diff</th>
                        <th>Action</th>
                    </tr>
                    {allData.map((value, id) => (
                        <tr key={id}>
                            <td>{value.token1}</td>
                            <td>{value.token2}</td>
                            <td>{value.priceBinance}</td>
                            <td>{value.priceFTX}</td>
                            <td>{value.diff}%</td>
                            <td>
                                <button type="submit" onClick={delData} > Del</button>
                            </td>
                        </tr>
                    ))}
                </table> */}
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
};


export default chart