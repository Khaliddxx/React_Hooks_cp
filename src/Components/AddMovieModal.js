import React from "react";
import { Form, Modal, Button, Container } from "react-bootstrap";
import { movies } from "../movies";
import { useState } from "react";

const AddMovieModal = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(movies);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        style={{
          position: "relative",
          marginTop: "100px",
          marginBottom: "200px",
        }}
        onClick={handleShow}
      >
        Add Movie
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter the details of the movie you want to add.</Modal.Body>

        <Container>
          <Form>
            <Form.Group controlId="movie-name">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                placeholder="Enter Movie Name"
                // Appending the input to movies through a previous state
                // onChange={(e) => setData({ val: e.target.title })}
                // type="text"
              />
            </Form.Group>

            <Form.Group controlId="movie-details">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Movie's Description" />
            </Form.Group>

            <Form.Group controlId="poster-url">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control placeholder="URL of Movie Poster" />
            </Form.Group>

            <Form.Group controlId="movie-rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control placeholder="Movie's Rating (out of 10)" />
            </Form.Group>
          </Form>
        </Container>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="add-movie-btn"
            variant="primary"
            onClick={() => {
              setData((prev) => {
                prev.push({
                  title: "ahmed",
                  description: "ahmed",
                  posterURL: "https://via.placeholder.com/200x300",
                  rating: 10,
                });
                return [...prev];
              });
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovieModal;