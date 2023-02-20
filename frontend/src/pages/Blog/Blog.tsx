import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import ReactPaginate from "react-paginate";
import "./Blog.scss"

const BlogItem: React.FC<{
  blogContent: string;
  imgSrc: string;
}> = ({ blogContent, imgSrc }) => {
  return (
    <div className="w-full bg-[#131740] relative px-[20px] py-[20px] rounded-[4px]">
      <div className="float-left w-[100%] lg:w-[40%] relative">
        <img className="" src={imgSrc}></img>
        <div className="blog-item-date">
          <span className="date-type">15</span>
          <span className="years-type">Dec, 21</span>
        </div>
      </div>
      <div className="float-right w-[100%] lg:w-[60%] lg:px-[30px] lg:py-0">
        <div className="float-left mb-[15px] mt-[15px] lg:mt-0">
          <span className="text-[16px] text-[#ddd] font-[400] pr-[10px]">
            <FontAwesomeIcon className="text-[#ff06b7] mr-[5px]" icon={solid("user")} />
            Admin
          </span>
          <span className="text-[16px] text-[#ddd] font-[400] pr-[10px]">
            <FontAwesomeIcon className="text-[#ff06b7] mr-[5px]" icon={solid("comment")} />
            16
          </span>
        </div>
        <div className="clear-both"></div>
        <Link className="text-[#fff] hover:text-[#ff06b7]" to="detail"><h4 className="text-[22px] text-left transition duration-400">{blogContent}</h4></Link>
        <Link className="blog-btn" to="detail">Read more ...</Link>
      </div>
    </div>
  );
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  let blogData = [];
  blogData = [{ blogContent: "Creative design clients response is better", imgSrc: "assets/images/b1.jpg" },
  { blogContent: "Make sure the prototype looks finished by.", imgSrc: "assets/images/b2.jpg" },
  { blogContent: "Designer have to make sure the prototype looks", imgSrc: "assets/images/b3.jpg" },
  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b4.jpg" },
  { blogContent: "Make sure the prototype looks finished by.", imgSrc: "assets/images/b5.jpg" },
  { blogContent: "Designer have to make sure the prototype looks", imgSrc: "assets/images/b6.jpg" },

  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b5.jpg" },
  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b4.jpg" },
  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b3.jpg" },
  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b2.jpg" },
  { blogContent: "Creative design clients response is better", imgSrc: "assets/images/b1.jpg" },];

  const handlePageClick = (selectedItem: { selected: number }) => {
    console.log("pageNum", selectedItem);
    setCurrentPage(selectedItem.selected);
  }

  return (
    <div className="justify-between mx-auto w-[95%] lg:w-[90%] py-[150px]">
      <div className="w-[100%] rounded-[5px] h-[300px] py-[130px] px-[50px] pageheader">
        <p className="text-[42px] leading-[50px] font-nunito text-left font-bold font-josefin text-[#fff]">
          Latest news
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mt-[50px]">
        {
          blogData.map((item, index) => {
            if (index >= 6 * currentPage && index < 6 * (currentPage + 1)) {
              return <BlogItem key={index} blogContent={item.blogContent} imgSrc={item.imgSrc} />;
            }
          })
        }
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={Math.ceil(blogData.length / 6)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Blog;
