// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CriticalThinker {

    struct QuestionData {
        address user;
        string imageLink;
        string question;
        string details;
    }

    struct CommentData {
        address commenter;
        string commentText; 
        uint256 upvotes;
        uint256 downvotes;
    }

    QuestionData[] public questions;
    mapping(uint => CommentData[]) public comments; // Mapping from questionId to list of comments

    // Event for when a question is submitted
    event QuestionSubmitted(address indexed user, string imageLink, string question, string details);
    event CommentSubmitted(address indexed commenter, uint questionId, uint commentId);
    event CommentUpvoted(uint questionId, uint commentId, uint upvotes);
    event CommentDownvoted(uint questionId, uint commentId, uint downvotes);

    // Function to submit a new question
    function submitQuestion(string memory _imageLink, string memory _question, string memory _details) public {
        QuestionData memory newQuestion = QuestionData({
            user: msg.sender,
            imageLink: _imageLink,
            question: _question,
            details: _details
        });

        questions.push(newQuestion);
        emit QuestionSubmitted(msg.sender, _imageLink, _question, _details);
    }

    // Function to submit a comment for a specific question
    function addComment(uint questionId, string memory commentText) public {
        require(questionId < questions.length, "Invalid questionId");

        CommentData memory newComment = CommentData({
            commenter: msg.sender,
            commentText: commentText,  // Store the actual comment text
            upvotes: 0,
            downvotes: 0
        });

        comments[questionId].push(newComment);
        emit CommentSubmitted(msg.sender, questionId, comments[questionId].length - 1);
    }


    // Function to upvote a comment
    function upvoteComment(uint questionId, uint commentId) public {
        require(questionId < questions.length, "Invalid questionId");
        require(commentId < comments[questionId].length, "Invalid commentId");

        comments[questionId][commentId].upvotes += 1;
        emit CommentUpvoted(questionId, commentId, comments[questionId][commentId].upvotes);
    }

    // Function to downvote a comment
    function downvoteComment(uint questionId, uint commentId) public {
        require(questionId < questions.length, "Invalid questionId");
        require(commentId < comments[questionId].length, "Invalid commentId");

        comments[questionId][commentId].downvotes += 1;
        emit CommentDownvoted(questionId, commentId, comments[questionId][commentId].downvotes);
    }

    // Function to get all questions
    function getAllQuestions() public view returns (QuestionData[] memory) {
        return questions;
    }

    // Function to get all comments for a specific question
    function getComments(uint questionId) public view returns (CommentData[] memory) {
        require(questionId < questions.length, "Invalid questionId");
        return comments[questionId];
    }
}
