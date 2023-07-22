export default function Card({ selectedData, removeData }) {
  // Seclection được truyền giá trị từ componets cha vào

  // Cấu trúc dectructor
  // moder js

  // props là dạng object
  // props luôn có dạng read-only

  const handleButtonRemoveClick = () => {
    removeData(selectedData);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-tilte">{selectedData.name}</h5>
        <p className={"card-text"}>{selectedData.type}</p>
        <p className="card-text">{selectedData.amount}</p>

        <button
          onClick={handleButtonRemoveClick}
          type="button"
          class="btn btn-danger"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
