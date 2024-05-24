import { useState, useEffect } from "react";
import axios from "axios";

const AddNoteForm = () => {
  const [note, setNote] = useState({
    commend: "",
    rating: 0,
  });

  const storeid = "r4444";
  const productid = "u4434";
  const userid = "t4322";

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    if (note.rating < 1) {
      e.preventDefault();
      return;
    }
    setNote({ ...note, [e.target.name]: e.target.value });
    adjustTextareaHeight(e.target);
  };

  const handleRatingChange = (newRating) => {
    setNote({ ...note, rating: newRating });
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/notes/");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/notes/", {
        storeid,
        productid,
        userid,
        ...note,
      });

      setNote({
        commend: "",
        rating: 0,
      });

      document.getElementById("multiline-input").style.height = "auto";
      setNotes((prevNotes) => [...prevNotes, response.data]);
      await fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="star">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{ cursor: "pointer" }}
              onClick={() => handleRatingChange(star)}
            >
              {star <= note.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="commend">
          <textarea
            name="commend"
            className="multiline-input"
            id="multiline-input"
            value={note.commend}
            onChange={handleChange}
            placeholder="Your opinion"
            maxLength="255"
            required
          />
          <button
            type="submit"
            disabled={note.rating < 1 || note.commend.trim() === ""}
          >
            Add Note
          </button>
        </div>
      </form>

      <h2>Notes</h2>
      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <ul>
          {notes.map((item) => (
            <li key={item.id}>
              <p className="star">
                {/* Display rating star */}
                {[...Array(item.rating)].map((_, index) => "★").join("")}
                {[...Array(5 - item.rating)].map((_, index) => "☆").join("")}
              </p>
              <strong>Writer:</strong> {item.userid}, <strong>Comment:</strong>{" "}
              {item.commend}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AddNoteForm;
