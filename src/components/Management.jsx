import React from "react";

const Management = () => {
  return (
    <div>
      <div className="container">
        <div className="manage_box">
          <h2 className="box_title">
            My 상비약 관리<span>(일반 의약품)</span>
          </h2>
          <div className="manage_search_box">
            <form>
              <div className="product_search ">
                <p>상품명</p>
                <input type="text" placeholder="상품명 검색" />
                <button className="btn">검색</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
