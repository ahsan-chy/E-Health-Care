import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown, FaReply , FaStar } from 'react-icons/fa';
import "../docterdashboard.css"

const Reviews = () => {
  return (
    <div class="review-tab">
              <div class="doc-review review-listing">
                  <ul class="comments-list">
                    <li>
                      <div class="comment">
                        <img class="avatar rounded-circle" alt="User Image" src="/images/patient4.jpg" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Nicolas Flowers</span>
                            <span class="comment-date">Reviewed 2 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> I recommend the doctor</p>
                          <p class="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div class="comment-reply">
                            <a class="comment-btn" href="#">
                            <FaReply/> Reply
                            </a>
                            <p class="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" class="like-btn">
                              <FaRegThumbsUp/> Yes
                              </a>
                              <a href="#" class="dislike-btn">
                               <FaRegThumbsDown/> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul class="comments-reply">
                        <li>
                          <div class="comment">
                          <img class="avatar rounded-circle" alt="User Image" src="/images/patient4.jpg" />
                            <div class="comment-body">
                              <div class="meta-data">
                                <span class="comment-author">Dr. Mary Nielson</span>
                                <span class="comment-date">Reviewed 3 Days ago</span>
                              </div>
                              <p class="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div class="comment-reply">
                                <a class="comment-btn" href="#">
                                <FaReply/> Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>

                      </ul>

                    </li>
                  </ul>
                </div>
              </div>
  )
}

export default Reviews