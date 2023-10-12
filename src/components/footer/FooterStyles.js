import styled from 'styled-components';

export const Box = styled.div`
  padding: 0px 60px;
  background: white; /* Change the background color to white */
  width: 100%;
  color: black; /* Change the text color to black */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black; /* Change the text color to black */
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 15px;
  color: black; 
  margin-bottom: 5px;
  font-weight: bold;
`;