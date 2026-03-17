import styled from "@emotion/styled"
import { Person } from "./Person";

const FreshHeading = styled.h1`
    color: yellow;
    font-weight: 700;
`;

const ThinHeading = styled(FreshHeading)`
    font-weight: 200;
`

const MixList = styled.div`
    grid-column: 2;
    grid-row: 1 / span 3;
    overflow: auto;
    background-color: ${(props) => props.bg};
`

const GroupBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;

    &:nth-child(odd) {
        background: rgba(255,255,255,0.2);
    }

    &:nth-child(even) {
        background: rgba(0,0,0,0.1);
    }

    h3 {
        grid-column: 1 / -1;
        margin: 0 0 0.5rem 0;
        color: yellow;
    }

    article {
        flex: 1 0 45%;
        max-width: unset;
    }
`

export function MixedList({ bg, groups = {} }) {
    return (
        <MixList bg={bg}>
            <FreshHeading>Mixed</FreshHeading>
            {Object.entries(groups).map(([groupId, members]) => (
                <GroupBlock key={groupId}>
                    <h3>Group {groupId}</h3>
                    {members.map(student => (
                        <Person key={student.id} {...student} />
                    ))}
                </GroupBlock>
            ))}
        </MixList>
    )
}