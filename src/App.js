import "./App.css";
// import { useState } from "react";
// // import Card from "./Components/Card";
import AppRoutes from './routes/index';
import Sidebar from "./layouts/Sidebar"; 

function App() {
  // const [listData, setListData] = useState([
  //   { id: 1, name: "Hóa đơn ăn sáng", type: "outcome", amount: 500 },
  //   { id: 2, name: "Hóa đơn ăn trưa", type: "outcome", amount: 1000 },
  //   { id: 3, name: "Hóa đơn ăn nhẹ", type: "outcome", amount: 20 },
  //   { id: 4, name: "Hóa đơn mua đồ lưu niệm", type: "outcome", amount: 120 },
  //   { id: 5, name: "Hóa đơn gửi xe", type: "outcome", amount: 10 },
  //   { id: 6, name: "Hóa đơn thuê đồ", type: "outcome", amount: 25 },
  //   { id: 7, name: "Lương công ty", type: "income", amount: 50000 },
  // ]);
  // const removeData = (data) => {
  //   const listNewData = listData.filter((item) => {
  //     return item.id !== data.id;
  //   });

  //   setListData(listNewData);
  // };

  return (
    // <div className="App">
    //   <div className="row">
    //     {listData.map((item, index) => {
    //       return (
    //         <div key={item.id} className="col-12 col-md-3">
    //           {/* 
    //             Truyền data từ cha vào component Card trên prop là selectedData và giá trị là item
    //           */}
    //           <Card selectedData={item} removeData={removeData} />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className='App'>
			<div className='d-flex align-start'>
				<Sidebar />
				<div className='w-100'>
					<AppRoutes />
				</div>
			</div>
		</div>
  );
}

export default App;
