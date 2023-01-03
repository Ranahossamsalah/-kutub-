import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import './profileeventlist.scss'
import { useDispatch } from 'react-redux'
import { DeleteOneEvent } from '../../redux/eventslice';
import { Link } from "react-router-dom";
import NavBar from '../navbar/navbar';

const ProfileEventList = () => {
    const Events = useSelector(state => state.Reducer.Events)
    const dispatch = useDispatch();
    const DeleteAttend = (index) => {
        dispatch(DeleteOneEvent(index))
    }
    const EventList =
        Events.map((event, i) => {
            return (
                <div className='singleEvent'>
                    <img src={event.photo} alt="" />
                    <div>
                        <p>{event.title}</p>
                        <p>{event.content}</p>
                        <p>{event.time}</p>
                        <p>{event.place}</p>
                    </div>
                    <Button variant='contained' onClick={() => { DeleteAttend(i) }} className='nothingButt'>cancel</Button>
                </div>
            )
        })
    return (
        <>
        <NavBar />
        {
        (Events && Events.length) > 0 ?
            <> 
                <h2 className='EventTitle'>Your Event List</h2>
                <div className='profileEventList'>
                    {EventList}
                </div>
            </> 
                :
            <div className='noThingHere'>
                <p className='nothingPar'>You havent Any Events this week</p>
                <Link to='/home'><Button variant='contained' size='large' className='nothingButt'>Back to Home</Button></Link>
            </div>}
            </>
    );
}
export default ProfileEventList;