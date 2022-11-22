import loadingGif from "./assets/loadingGif.gif";
import { LoadingContainer } from "./styles";
export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <img src={loadingGif} alt="" />
    </LoadingContainer>
  );
};
