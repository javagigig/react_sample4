import React,{ useState } from "react";
import './Search.css';
import '../components/Menu.css';

const Search = ()=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () =>{
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="container">
             <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>모달 내용을 여기에 추가하세요.</p>
          </div>
        </div>
      )}
        </div>
        </div> 
    ); 
};

export default Search;