// This component will be using emotion
import styled from "@emotion/styled"

const FreshHeading = styled.h1`
    color: yellow;
    font-weight: 700;
`;

// Extending a style
const ThinHeading = styled(FreshHeading)`
    font-weight: 200;
`

// Accepting props 
const MixList = styled.div`
 grid-column: 2;
  grid-row: 1 / span 2;       /* right side spans both rows */
  overflow: auto;
  background-color: ${(props) => props.bg};
`

export function MixedList(props) {
    return (
        <MixList bg={props.bg}>
            <FreshHeading>Mixed</FreshHeading>
            <ThinHeading>Thin</ThinHeading>
        </MixList>
    )
}