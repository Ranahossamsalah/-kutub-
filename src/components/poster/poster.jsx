import "./poster.scss";
import photo1 from "../../assets/imgs/main.png";
import photo2 from "../../assets/imgs/main1.png";
import { Button } from "@mui/material";
import book1 from "../../assets/imgs/book1.jpg";
import book2 from "../../assets/imgs/book2.jpg";
import book3 from "../../assets/imgs/book3.jpg";
import book4 from "../../assets/imgs/book4.jpg";
import book5 from "../../assets/imgs/book5.jpg";
import { useDispatch } from "react-redux";
import { addNewEvent } from "../../redux/eventslice";
import { Link } from "react-router-dom";

const EventPoster = () => {
  const events = [
    {
      photo: book1,
      title: "Discussion",
      content: "Lorem ipsum dolor sit amet",
      time: "15/07 at 07.00pm",
      place: "online",
    },
    {
      photo: book2,
      title: "book signing",
      content: "Lorem ipsum dolor sit amet",
      time: "26/07 at 09.00pm",
      place: "at Bibliotheca Alexandrina",
    },
    {
      photo: book3,
      title: "book launch",
      content: "Lorem ipsum dolor sit amet",
      time: "31/07 at 07.00pm",
      place: "at Bibliotheca Alexandrina",
    },
    {
      photo: book4,
      title: "poet seminar",
      content: "Lorem ipsum dolor sit amet",
      time: "05/08 at 01.00pm",
      place: "online",
    },
    {
      photo: book5,
      title: "Discussion",
      content: "Lorem ipsum dolor sit amet",
      time: "10/08 at 05.00pm",
      place: "online",
    },
  ];
  const dispatch = useDispatch();
  const EventAttend = (event) => {
    dispatch(addNewEvent(event));
  };
  return (
    <>
      <div id="container">
        <div class="photobanner">
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
        </div>
        <div className="Eventbanner">
          <h1 className="pannerHeader">This Week's Events</h1>
          <div className="eventsContainer">
            {events.map((event, i) => {
              return (
                <div key={i} className={`Event Event${i + 1}`}>
                  <img src={event.photo} alt="" />
                  <div className="outerLayer">
                    <h3>{event.title}</h3>
                    <p>{event.content}</p>
                    <p>{event.time}</p>
                    <Button
                      variant="contained"
                      onClick={() => EventAttend(event)}
                    >
                      Attend
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Link to="/profile">
        <Button variant="contained" className="goToEventPage">
          Show My Events
        </Button>
      </Link>
    </>
  );
};
export default EventPoster;
