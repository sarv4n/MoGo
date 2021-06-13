'use strict'

let spoilersArray = document.body.querySelectorAll('.spoiler__input');
spoilersArray[0].checked = true;
let previousSpoiler = spoilersArray[0];

//comments carousel code
 let firstCommentsBlock = {
 commentsCount : document.body.querySelectorAll('.comment').length,
 currentCommentNumber : 0,
 commentsBlock : document.body.querySelector('.comments'),
 rightBtnComments : document.body.querySelector('.comment__arrow_right'),
 leftBtnComments : document.body.querySelector('.comment__arrow_left'),
 comment : document.body.querySelector('.comment').offsetWidth,
 }
 let secondCommentsBlock = {
    commentsCount : document.body.querySelectorAll('.comment_2').length,
    currentCommentNumber : 0,
    commentsBlock : document.body.querySelector('.comments_2'),
    rightBtnComments : document.body.querySelector('.comment_2__arrow_right'),
    leftBtnComments : document.body.querySelector('.comment_2__arrow_left'),
    comment : document.body.querySelector('.comment_2').offsetWidth,
    }
//comments carousel code


/* functions 
 Spoilers auto closing */ 
function spoilersAutoClosing(spoilerActive){
    spoilerActive.checked = true;
    // for(let elem of spoilersArray){
    //     if(elem !== spoilerActive){
    //         elem.checked = false;
    //     }
    // }
    if(spoilerActive !== previousSpoiler){
        previousSpoiler.checked = false;
    }
    previousSpoiler = spoilerActive;
};
// Carousel with comments
function carouselCommentsNext(obj){
    if(obj.currentCommentNumber !== obj.commentsCount - 1){
        obj.currentCommentNumber += 1;
        obj.commentsBlock.style.right = `${obj.currentCommentNumber * obj.comment}px`;
        obj.leftBtnComments.style.opacity = '100%';
    }else if(obj.currentCommentNumber == obj.commentsCount - 1){
        obj.rightBtnComments.style.opacity = '50%';
    }
    console.log(obj.currentCommentNumber);
};
function carouselCommentsPrevious(obj){
    if(obj.currentCommentNumber !== 0){
        obj.currentCommentNumber -= 1;
        obj.commentsBlock.style.right = `${obj.currentCommentNumber * obj.comment}px`;
        obj.rightBtnComments.style.opacity = '100%';
    }else if(obj.currentCommentNumber == 0){
        obj.leftBtnComments.style.opacity = '50%';
    }
};
