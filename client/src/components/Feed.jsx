import React, { useState } from "react";
import { Button, Card, Form, Container } from "react-bootstrap";

// import { likeController, commentController, likeService} from "../services/feedService";

const Feed = ({sessionUserId, entireThoughtSec}) => {

  const{thought, likes, comments } = entireThoughtSec;

  const [tweet, setTweet] = useState({
    // username: "Tejas Kulkarni",
    location: "Mumbai, India",
    content: thought,
    likes: likes,
    comments: comments || "No comments",
  });

  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setTweet((prevTweet) => ({
      ...prevTweet,
      likes: isLiked ? prevTweet.likes - 1 : prevTweet.likes + 1,
    }));
  };

  const [newComment, setNewComment] = useState("");
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setTweet((prevTweet) => ({
        ...prevTweet,
        comments: [
          ...prevTweet.comments,
          { user: "Anonymous", comment: newComment },
        ],
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
                  <strong>{comment.user}:</strong> {comment.comment}
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
            className="input-box mt-3"  // Ensure this class is applied for width
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
