import styled from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"

export const PrivacyWrapper = styled.div`
  width: 100%;
  background: ${bgDark};
  padding-top: 75px;
  color: white;
  height: 100%;
  padding-bottom: 5rem;
`
export const PrivacyContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const Title = styled.h2`
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align: center;
`
export const ParagraphTitle = styled.h4`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 18px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`
export const List = styled.ul`
 list-style: circle inside;
 padding: 0;
`
export const ListItem = styled.li`
`