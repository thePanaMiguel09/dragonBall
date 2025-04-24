import "./PersonalCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

interface Props {
  name: string;
  career: string;
  semester: string;
  img: string;
  git: string;
  instagram: string;
}

function PersonalCard({ img, name, career, semester, git, instagram }: Props) {
  return (
    <div className="personalCardContainer">
      <div id="headingCard">
        <div className="imageCardContainer">
          <img src={img} alt="" className="avatarImage" />
        </div>
      </div>

      <div className="bodyCard fontFamily">
        <div>
          {name}
          <h4 className="titleColor">Name</h4>
        </div>
        <div>
          {career}
          <h4 className="titleColor">Career</h4>
        </div>
        <div>
          {semester} <h4 className="titleColor">Semester</h4>
        </div>
        <div className="personalLinksContainer">
          <a href={git}>
            <GitHubIcon fontSize={"medium"} color="secondary" />
          </a>
          <a href={instagram}>
            <InstagramIcon fontSize={"medium"} color="info" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
