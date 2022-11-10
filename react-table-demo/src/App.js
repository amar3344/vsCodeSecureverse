import React, { useMemo,useState, useEffect } from "react";
import axios from "axios"

import Table from "./table";
import "./App.css";

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.etherscan.io/api?module=account&action=txlist&address=0x6dfc34609a05bC22319fA4Cce1d1E2929548c0D7&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=IW9FKB2254UUN54IE52QKMQCIYNF61R4X5");
      //console.log(result)
      setData(result.data.result);
      console.log(data)
    })();
  }, []);

  const columns = useMemo(
    () => [
          {
            Header: "From",
            accessor: "data"
          },
          {
            Header: "To",
            accessor: "data"
          },
          {
            Header: "BlockNumber",
            accessor: "data"
          },
          {
            Header: "Hash",
            accessor: "data"
          },
          {
            Header: "Time",
            accessor: "data"
          }
        ],
      
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;