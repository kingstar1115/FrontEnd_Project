import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./Blog.scss"

const BlogDetail = () => {
  return (
    <div className="justify-between mx-auto w-[95%] lg:w-[90%] py-[150px]">
      <div className="w-[100%] rounded-[5px] h-[300px] py-[130px] px-[50px] pageheader">
        <p className="text-[42px] text-[#fff] leading-[50px] font-nunito text-left font-bold font-josefin">
          Blog Details
        </p>
      </div>

      <div className="blog-area blog-details mt-[50px]">
        <article className="blog-post-wrapper">
          <div className="blog-banner relative">
            <img className="w-[100%]" src="../assets/images/b1.jpg"></img>
            <div className="blog-item-date">
              <span className="date-type">15</span>
              <span className="years-type">Dec, 21</span>
            </div>

            <div className="border-none py-[30px] pl-0 bg-transparent text-left">
              <div className="mb-[10px]">
                <span className="text-[16px] text-[#ddd] font-[400] pr-[10px]">
                  <FontAwesomeIcon className="text-[#ff06b7] mr-[5px]" icon={solid("user")} />
                  Admin
                </span>
                <span className="text-[16px] text-[#ddd] font-[400] pr-[10px]">
                  <FontAwesomeIcon className="text-[#ff06b7] mr-[5px]" icon={solid("comment")} />
                  16
                </span>
              </div>
              <p className="leading-7 transition duration-400 text-[16px] font-normal mb-[15px]">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself. because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure
              </p>
              <p className="leading-7 transition duration-400 text-[16px] font-normal mb-[15px]"> because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
            </div>

            <div className="pb-[10px] text-left blog-single-tags">
              <div className="font-[700] text-[#fff] inline-block mr-[15px]">Tags:</div>
              <ul className="inline-block tag-list">
                <li className="inline-block list-none">
                  <a>
                    Ripple
                  </a>
                </li>
                <li className="inline-block list-none">
                  <a>
                    Bitcoin
                  </a>
                </li>
                <li className="inline-block list-none">
                  <a>
                    Ethereum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <div className="mt-[30px] text-left">
          <div>
            <h3 className="border-b border-solid border-[#666] text-[28px] font-[700] text-white mt-0 mb-[40px] pt-0 pb-[20px] capitalize">Related Posts</h3>
          </div>
          <div>
            <div className="w-[50%] float-left py-0 pr-[20px] mb-[40px]">
              <div className="inline-block float-left pr-[15px]">
                <img className="w-[100%] max-w-[80px] h-[80px] object-cover rounded-[3px] border border-solid border-[#020134]" src="../assets/images/b1.jpg"></img>
              </div>
              <div className="pl-[100px]">
                <p className="mb-0">
                  <Link className="text-[#ddd] text-[16px] font-[600] hover:text-[#ff06b7]" to="#">
                    Resty are offers digital marketing services
                  </Link>
                </p>
                <span className="text-[14px]">
                  26 Jan / 2021
                </span>
              </div>
            </div>
            <div className="w-[50%] float-left py-0 pr-[20px] mb-[40px]">
              <div className="inline-block float-left pr-[15px]">
                <img className="w-[100%] max-w-[80px] h-[80px] object-cover rounded-[3px] border border-solid border-[#020134]" src="../assets/images/b2.jpg"></img>
              </div>
              <div className="pl-[100px]">
                <p className="mb-0">
                  <Link className="text-[#ddd] text-[16px] font-[600] hover:text-[#ff06b7]" to="#">
                    Resty is an startup and marketing agency
                  </Link>
                </p>
                <span className="text-[14px]">
                  20 Feb / 2020
                </span>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>

          <div className="post-comments mt-[30px]">
            <div className="comments-area">
              <div className="comments-heading">
                <h3 className="border-b border-solid border-[#666] text-[28px] font-[700] text-white mx-0 mb-[40px] px-0 pb-[20px] capitalize">
                  2 comments
                </h3>
              </div>
              <div className="comments-list">
                <ul className="m-0 p-0">
                  <li className="mb-[25px] list-none">
                    <div className="comments-details bg-[#131740] border border-solid border-[#131740] p-[30px]">
                      <div className="float-left mr-[30px] rounded-[50%]">
                        <img className="rounded-[50%] border border-solid border-[#ff06b7]" src="../assets/images/avatar/avatar2.png"></img>
                      </div>
                      <div className="text-[#eee] relative text-[15px] pl-[112px]">
                        <span>
                          <b className="mr-[5px]">
                            <a className="text-[#ff06b7]" href="#">Alens</a>
                          </b>
                           Post author
                          <span className="mr-[5px]">Jan 6, 2020</span>
                          <a className="text-[#ff06b7]" href="#">Reply</a>
                        </span>
                        <p className="text-[#eee] mt-[10px] mb-0 text-[15px]">
                          Dummy text is also used to demon strate the appea rance of different typefaces and layouts, and in general the content of dummy text is nonsensical.
                        </p>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </li>
                  <li className="threaded-comments mb-[25px] list-none">
                    <div className="comments-details bg-[#131740] border border-solid border-[#131740] p-[30px]">
                      <div className="float-left mr-[30px] rounded-[50%]">
                        <img className="rounded-[50%] border border-solid border-[#ff06b7]" src="../assets/images/avatar/avatar2.png"></img>
                      </div>
                      <div className="text-[#eee] relative text-[15px] pl-[112px]">
                        <span>
                          <b className="mr-[5px]">
                            <a className="text-[#ff06b7]" href="#">Alens</a>
                          </b>
                           Post author
                          <span className="mr-[5px]">Jan 6, 2020</span>
                          <a className="text-[#ff06b7]" href="#">Reply</a>
                        </span>
                        <p className="text-[#eee] mt-[10px] mb-0 text-[15px]">
                          Dummy text is also used to demon strate the appea rance of different typefaces and layouts, and in general the content of dummy text is nonsensical.
                        </p>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="comment-respond mt-[20px]">
            <h3 className="border-b border-solid border-[#666] text-[28px] font-[700] text-white mx-0 mb-[40px] px-0 pb-[20px] capitalize">
              Leave A Reply
            </h3>
            <span className="text-[#eee] block text-[12px] mb-[10px]">
              Your email address will not be published. Required fields are marked *
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
