import type Candidate from "../interfaces/Candidate.interface";

type candidateTableRowProps = {
    currentCandidate: Candidate;
    deleteCandidate: (login: string | null) => void;
};
//set up row props to pass to
const CandidateTableRow = ({
    currentCandidate,
    deleteCandidate
}: candidateTableRowProps) => {
    return (
        <>
            <tr>
                <th><img src={`${currentCandidate.Avatar_url}`} alt={`${currentCandidate.Login}`} /></th>
                <td>{currentCandidate.Login}</td>
                <td>{currentCandidate.Location}</td>
                <td>{currentCandidate.Email}</td>
                <td>{currentCandidate.Company}</td>
                <td>{currentCandidate.Bio}</td>
                <td><button id="tablePass" onClick={() => deleteCandidate(currentCandidate.Login)}>-</button></td>
            </tr>
        </>
    );
};
export default CandidateTableRow;