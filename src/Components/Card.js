export default function Card({ selectedData, logAnything }) {
  // Seclection được truyền giá trị từ componets cha vào

  // Cấu trúc dectructor
  // moder js

  // props là dạng object
  // props luôn có dạng read-only

  const handleButtonRemoveClick = () => {
    console.log('Child clicked');
    logAnything();
  };

  return (
		<div className='card '>
			<div className='card-body'>
				<h5 className='card-title'>{selectedData.name}</h5>
				<p className={`card-text ${selectedData.type === 'income' ? 'bg-success' : 'bg-danger'}`}>
					{selectedData.type}
				</p>
				<p className='card-text'>{selectedData.amount}</p>

				<button onClick={handleButtonRemoveClick} type='button' className='btn btn-danger'>
					Xóa
				</button>
			</div>
		</div>
	);
}
