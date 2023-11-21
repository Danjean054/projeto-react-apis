import { useLocation, useNavigate } from "react-router-dom";
import {
  // goToPokeDetail,
  goToPokeList,
  goToPokePage,
} from "../../routes/coordinator";
import { Button, Container, ContainerImg, MainContainer } from "./headerStyle";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    if (location.pathname === "/") {
      return (
        <Container>
          <ContainerImg>
            <img
              src="data:image/png;base64,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"
              alt="poke"
            />
          </ContainerImg>
          <Button onClick={() => goToPokeList(navigate)}>
            Ver minha pokedex
          </Button>
        </Container>
      );
    } else if (location.pathname === "/PokeList") {
      return (
        <Container>
          <ContainerImg>
            <img
              src="data:image/png;base64,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"
              alt="poke"
            />
          </ContainerImg>
          <Button
            onClick={() => {
              goToPokePage(navigate);
            }}
          >
            Voltar para Lista
          </Button>
        </Container>
      );
    } else if (location.pathname === "/PokeDetail") {
      return (
        <Container>
          <ContainerImg>
            <img
              src="data:image/png;base64,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"
              alt="poke"
            />
          </ContainerImg>
          <Button
            onClick={() => {
              goToPokePage(navigate);
            }}
          >
            Todos os Pokemons
          </Button>
        </Container>
      );
    }
    return <MainContainer> {renderHeader()}</MainContainer>;
  };

  return renderHeader();
};

export default Header;