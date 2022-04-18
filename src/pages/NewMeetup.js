import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://meetup-100c3-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
export default NewMeetupPage;
