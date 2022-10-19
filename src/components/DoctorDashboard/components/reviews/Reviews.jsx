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
                        <img class="avatar rounded-circle" alt="User Image" src="/images/patient1.jpg" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Zainab Ijaz</span>
                            <span class="comment-date">Reviewed 21 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> Recommend </p>
                          <p class="comment-content">
                          Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.
                          </p>
                          <div class="comment-reply">
                            
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
                    </li>
                    <li>
                      <div class="comment">
                        <img class="avatar rounded-circle" alt="User Image" src="/images/patient3.jpg" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Kashif Mushtaq</span>
                            <span class="comment-date">Reviewed 10 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> Recommend </p>
                          <p class="comment-content">
                          A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all
                          </p>
                          <div class="comment-reply">
                            
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
                    </li>
                    <li>
                      <div class="comment">
                        <img class="avatar rounded-circle" alt="User Image" src="/images/patient4.jpg" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Ayesha</span>
                            <span class="comment-date">Reviewed 2 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> Recommend </p>
                          <p class="comment-content">
                          Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.
                          </p>
                          <div class="comment-reply">
                            
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
                    </li>
                    <li>
                      <div class="comment">
                        <img class="avatar rounded-circle" alt="User Image" src="/images/T5.png" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Mahjabeen Altaf</span>
                            <span class="comment-date">Reviewed 5 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> Recommend </p>
                          <p class="comment-content">
                          Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.
                          </p>
                          <div class="comment-reply">
                            
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
                    </li>
                  </ul>
                </div>
              </div>
  )
}

export default Reviews