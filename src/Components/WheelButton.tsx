import { Button, Container } from './Styles/WheelButton.styled';

type WheelButtonProps = {
  event: () => void;
  isDisabled: boolean;
};
function WheelButton({ event, isDisabled }: WheelButtonProps) {
  const handleButtonClick = () => {
    if (!isDisabled) {
      event();
    }
  };
  return (
    <Container>
      <div>
        <Button
          id="spin"
          disabled={isDisabled}
          onClick={() => handleButtonClick()}
        >
          Spin
        </Button>
      </div>
    </Container>
  );
}
export default WheelButton;
