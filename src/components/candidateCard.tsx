import type Candidate from '../interfaces/Candidate.interface';
import '../index.css';

type candidateCardProps = {
    currentCandidate: Candidate;
    saveCandidate?: (() => void) | null;
    passCandidate?: (() => void) | null;
};

const CandidateCard = ({
    currentCandidate,
    saveCandidate,
    passCandidate,
}: candidateCardProps) => {
    return (
        <>
        
                <div className="candidateCard">

                    <img src={`${currentCandidate.Avatar_url}`} alt={`${currentCandidate.Login}`} />

                    <article className="candidateInfo">
                        <h2>{currentCandidate.Login}</h2>
                        <p>
                            <strong>Location: </strong> {currentCandidate.Location}
                        </p>
                        <p>
                            <strong>Email: </strong> {currentCandidate.Email}
                        </p>
                        <p>
                            <strong>Company: </strong> {currentCandidate.Company}
                        </p>
                        <p>
                            <strong>Bio: </strong> {currentCandidate.Bio}
                        </p>
                    </article>

                    <button id="pass" onClick={() => passCandidate?.()}>-</button>
                    <button id="add" onClick={() => saveCandidate?.()}>+</button>
                </div>
            

        </>
    );
};

export default CandidateCard;