//import scss
import classes from "./cardDetails.module.scss";
//import from react library
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import { Button, ButtonGroup } from '@mui/material';
const CardDetails = () => {
  const [card, setCard] = useState();
  const urlparams = useParams();

  useEffect(() => {
    fetchcards();
  }, []);

  const fetchcards = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${urlparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        console.log(card);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  console.log(card);

  return (
    <>
      <NavBar />
      {card ? (
        <div className={classes.cardContainer}>
          <div className={classes.cardbg}>
            <div className={classes.icons}>
            {/* <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.buy}>
                  <div className={classes.buyinfo}>
                   Buy Book
                    <p className={classes.buyparagraph}>
                      you can read the book online from the link here
                    </p>
                  </div>
                </div>
              </a> */}
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.laptop}>
                  <div className={classes.laptopinfo}>
                    Read Online
                    <p className={classes.laptopparagraph}>
                      you can read the book online from the link here
                    </p>
                  </div>
                </div>
              </a>
              <a >
                <div className={classes.addtocart}>
                  <div className={classes.addtocartinfo}>
                    Add To Cart
                    <p className={classes.addtocartparagraph}>
                    you can add the book to the cart so you can buy it anytime
                      <Button className='favbtn' variant="contained" >Add to Favourite</Button>
                    </p>
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.addtofav}>
                  <div className={classes.addtofavinfo}>
                    Add To Favourite
                    <p className={classes.addtofavparagraph}>
                      you can add the book to your favourite
                      <Button className='favbtn' variant="contained" >Add to Favourite</Button>
                    </p>
                    
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.record}>
                  <div className={classes.recordinfo}>
                    Book record
                    <p className={classes.recordparagraph}>
                      Users recorded the book
                      <div className={classes.user}></div>
                      <p>open the book record</p>
                      <div className={classes.user}></div>
                      <p>open the book record</p>
                      <hr />
                      <p>you can also record the book and win points</p>
                      <div className={classes.points}></div>
                    </p>
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.events}>
                  <div className={classes.eventsinfo}>
                    Book Events
                    <p className={classes.eventsparagraph}>
                      old and latest events on the book
                    </p>
                  </div>
                </div>
              </a>
              <a>
                <div className={classes.borrowlend}>
                  <div className={classes.borrowlendinfo}>
                    Borrow/Lend
                    <p className={classes.borrowlendparagraph}>
                      you can Borrow or Lend books with other users
                      <div  >
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button >Borrow</Button>
                                <Button>Lend</Button>
                            </ButtonGroup>
                            </div>
                            the book will reach at your door
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <figure className={classes.cardimg}>
                <img src={card?.volumeInfo.imageLinks?.thumbnail} alt="" />
              </figure>
            </div>
            <div>
              <h2 className={classes.title}>{card?.volumeInfo.title}</h2>
              <p className={classes.description}>
                {card?.volumeInfo.description}
              </p>
              <p>Ratings Count : {card?.volumeInfo.ratingsCount}</p>
              <h5>Authors Name : {card?.volumeInfo.authors}</h5>
              <p>page count : {card?.volumeInfo.pageCount}</p>
              <h3>Published Date : {card?.volumeInfo.publishedDate}</h3>
              <p>{card?.saleInfo.saleability}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default CardDetails;
