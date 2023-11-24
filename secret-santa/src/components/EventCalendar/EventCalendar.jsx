import  { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./EventCalendar.css";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState({});
  const [newEventDescription, setNewEventDescription] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);


  // Fonction pour charger les événements depuis localStorage lors du chargement de la page
useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEventDetails(JSON.parse(savedEvents));
    }
  }, []);
  
  // Fonction pour mettre à jour localStorage lorsqu'il y a un changement dans les événements
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(eventDetails));
  }, [eventDetails]);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
// Ajoutez cette fonction pour mettre à jour l'événement sélectionné
const handleUpdateEvent = () => {
    const updatedEvents = { ...eventDetails };
    updatedEvents[selectedEvent.date] = selectedEvent.description;
    setEventDetails(updatedEvents);
    setSelectedEvent(null); // Réinitialiser l'événement sélectionné après la mise à jour
  };

  
  const handleAddEvent = () => {
    const formattedSelectedDate = new Date(selectedDate.getTime() - (selectedDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    if (newEventDescription.trim() !== '') {
      setEventDetails({
        ...eventDetails,
        [formattedSelectedDate]: newEventDescription,
      });
      setNewEventDescription('');
    }
  };
  

 // Mettez à jour la partie de l'affichage des événements dans le composant EventCalendar
const handleRemoveEvent = (date) => {
    const updatedEvents = { ...eventDetails };
    delete updatedEvents[date];
    setEventDetails(updatedEvents);
  };
  // Fonction pour mettre à jour l'événement sélectionné pour l'édition
const handleEditEvent = (date) => {
    setSelectedEvent({ date, description: eventDetails[date] });
  };
  
  const eventList = Object.entries(eventDetails).map(([date, description]) => (
    <li key={date}>
      <strong>{date}:</strong> {description}
      <button className='Edit' onClick={() => handleEditEvent(date)}>EDIT</button>
      <button className='Delete' onClick={() => handleRemoveEvent(date)}>DELETE</button>
    </li>
  ));
  

  return (
    <>

    <div className='calender-container' style={{ display: 'flex' }}>
              <div className='Calender-div'>
                  <h2 className='Calendar-title'>Event Calendar</h2>
                  <div className='Calender-div2'>
                      <Calendar
                          onChange={handleDateChange}
                          value={selectedDate} />
                      <input
                          className='input-evenement'
                          type="text"
                          value={newEventDescription}
                          onChange={(e) => setNewEventDescription(e.target.value)} />
                  </div>
                  <button className='Button-evenement' onClick={handleAddEvent}>Add a event</button>
              </div>
              <div className='list-evenement'>
                  <h2 className='List-title'>Events list</h2>

                  <ul className='Ul-list'>{eventList}</ul>
                  {/* Ajoutez le formulaire d'édition ici */}
                  {selectedEvent && (
                      <div className='edit-event'>
                          <h3>Modifier l'événement du {selectedEvent.date}</h3>
                          <input
                              className='input-update'
                              type="text"
                              value={selectedEvent.description}
                              onChange={(e) => setSelectedEvent({
                                  ...selectedEvent,
                                  description: e.target.value,
                              })} />
                          <button className='Update' onClick={handleUpdateEvent}>UPDATE</button>
                      </div>
                  )}
              </div>

          </div></>
  );
};

export default EventCalendar;
