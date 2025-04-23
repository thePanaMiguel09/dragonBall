import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { Button } from "@mui/material";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="pageContainer">
      <div className="dialogContainer">
        <h2>Page Not Found</h2>
        <h3>Ooops! You Look lost</h3>
        <Button
          variant="outlined"
          type="button"
          color="warning"
          onClick={handleNavigate}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
