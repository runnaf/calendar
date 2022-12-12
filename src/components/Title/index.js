import styled from "styled-components";

const DivWrapper = styled('h1')`
        background-color: rgb(255, 208, 218);
        color: rgb(61, 59, 254);
        font-size: 36px;
        padding: 60px 0;
        margin: 0 0 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
`;

const Title = () => {
  return <DivWrapper>Organize your life</DivWrapper>
}

export { Title }