import { Workexperience, ListJobs } from "./WorkExperienceStyles";
import Title from "../Titles/Title";
import Button from "../Buttons/Button";
import P from "../Parrafos/P";
const WorkExperience = () => {
  return (
    <Workexperience>
      <Title size={36}>Work experience</Title>
      <P>Heres a brief rundown of my most recent experiences.</P>
      <ListJobs>
        <div className="job">
          <P pt="10px" pb="10px">
            LogicGate
          </P>
          <span></span>
          <P pt="10px" pb="10px">
            Front End Developer
          </P>
          <P pt="10px" pb="10px">
            2022
          </P>
        </div>
        <div className="job">
          <P pt="10px" pb="10px">
            Cognizant
          </P>
          <span></span>
          <P pt="10px" pb="10px">
            Full-Stack Engineer
          </P>
          <P pt="10px" pb="10px">
            2019 - 2021
          </P>
        </div>
        <div className="job">
          <P pt="10px" pb="10px">
            projekt202
          </P>
          <span></span>
          <P pt="10px" pb="10px">
            Front End Developer
          </P>
          <P pt="10px" pb="10px">
            2022
          </P>
        </div>

        <div className="job pb">
          <P pt="10px" pb="10px">
            Major 4 Apps
          </P>
          <span></span>
          <P pt="10px" pb="10px">
            Founder
          </P>
          <P pt="10px" pb="10px">
            2011 - 2018
          </P>
        </div>

        <Button type="primary">Read the CV</Button>
        <span style={{ color: "red", fontStyle: "italic" }}>
          * fictitious information for now
        </span>
      </ListJobs>
    </Workexperience>
  );
};

export default WorkExperience;
