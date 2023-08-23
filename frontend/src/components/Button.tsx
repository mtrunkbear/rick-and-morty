import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const CustomButton = ({ children = "RastrearHumanos", route = "" }) => {
  const router = useRouter();
  return (
    <AnimatedButton
      variant="outlined"
      color="primary"
      onClick={() => router.push(route)}
    >
      {children}
    </AnimatedButton>
  );
};

export default CustomButton;

const fadeInAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const shineAnimation = `
  @keyframes shine {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`;

const AnimatedButton = styled(Button)`
  animation: fadeIn 5s ease-out forwards;
  ${fadeInAnimation}
  ${shineAnimation}
`;
