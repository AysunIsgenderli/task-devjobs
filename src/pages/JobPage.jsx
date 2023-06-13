import { useParams } from "react-router-dom";
import cardsInfo from "../cardsInfo.json";
import JobPageFilter from "./JobPageFilter";
import "./JobPageStyle.css";

function JobPage() {
  const { id } = useParams();
  const cardData = cardsInfo.find((card) => card.id === id);

  return (
    <>
      <div className="job-page-container">
        <JobPageFilter />

        <main className="main">
          <div className="top-info">
            {cardsInfo.map((cardInfo) => {
              return (
                <>
                  <div className="top-info-left">
                    <div className="date" key={cardInfo.id}>
                      {" "}
                      <span className="activeTime">
                        {cardInfo.activeTime}
                      </span>. {cardInfo.workTime}{" "}
                    </div>
                    <h4 className="position">{cardInfo.position}</h4>
                    <div className="country">{cardInfo.country}</div>
                  </div>
                </>
              );
            })}

            <button className="applyBtn">Apply now</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div className="jobItem">
            <h4>Requirements</h4>
            <p>{cardData.requirements}</p>
            <ul>
              {cardData.requirementsList.map((reqList) => {
                return (
                  <>
                    <li key={cardData.id}>{reqList}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="jobItem">
            <h4>What you will do?</h4>
            <p>{cardData.thingsToDo}</p>
            <ul>
              {" "}
              {cardData.thingsToDoList.map((todoList) => {
                return (
                  <>
                    <li key={cardData.id}>{todoList}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
      <footer>
        <div className="job-page-container">
          <div>
            <h4>Senior Software Engineer</h4>
            <span>So Digital Inc.</span>
          </div>
          <button className="applyBtn">Apply now</button>
        </div>
      </footer>
    </>
  );
}

export default JobPage;
