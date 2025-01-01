import React, { useState } from "react";
import { Button, Card, Form, Container } from "react-bootstrap";
import { commentService, likeService } from "../services/feedService";

const Feed = ({ sessionUserId, entireThoughtSec }) => {
  console.log(`Session User Id from Feed: ${sessionUserId}`);
  const { _id, thought, likes, comments, userId } = entireThoughtSec;

  const [tweet, setTweet] = useState({
    userId: _id,
    username: userId.username,
    location: "India",
    content: thought,
    likes: likes,
    comments: comments || [], // Ensure comments is an array
  });

  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    const updatedLikes = isLiked ? tweet.likes - 1 : tweet.likes + 1;
    const tweetUserId = tweet.userId;
    setIsLiked(!isLiked);
    setTweet((prevTweet) => ({
      ...prevTweet,
      likes: updatedLikes,
    }));

    try {
      likeService({ tweetUserId, updatedLikes });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        commenterId: sessionUserId, // Using sessionUserId for the commenter
        commenterUsername: sessionStorage.getItem('username'), // Assuming username is passed in userId
        comment: newComment,
        commentedAt: new Date().toISOString(), // Use ISO format for timestamps
        tweetUserId: tweet.userId
      };
      console.log(`lalalala: ${tweet.userId}`)


      try{
        commentService({newCommentObj})
      }
      catch(error){
        console.log(error)
      }
      setTweet((prevTweet) => ({
        ...prevTweet,
        comments: [...prevTweet.comments, newCommentObj],
      }));
      setNewComment("");
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Container className="mt-4">
      <Card className="content">
        <Card.Body>
          <Card.Title className="text-primary">{tweet.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tweet.location}</Card.Subtitle>
          <Card.Text>{tweet.content}</Card.Text>

          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant={isLiked ? "success" : "outline-primary"}
              onClick={handleLike}
            >
              {isLiked ? "Liked" : "Like"} {tweet.likes}
            </Button>

            <Button
              variant="link"
              onClick={toggleComments}
              className="text-decoration-none text-secondary"
            >
              {showComments ? "Hide Comments" : "Show Comments"}
            </Button>
          </div>

          {showComments && (
            <div className="comments-list mt-3">
              {tweet.comments.map((comment, index) => (
                <div key={index} className="comment mb-2">
                  <strong>{comment.commenterUsername}:</strong> {comment.comment}
                  <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                    {new Date(comment.commentedAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
            className="input-box mt-3"
          />
          <Button
            variant="secondary"
            className="mt-2"
            onClick={handleCommentSubmit}
          >
            Post Comment
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Feed;
