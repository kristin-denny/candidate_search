import { useState, useEffect } from 'react';
import CandidateTableRow from '../components/candidateTableRow';
import '../index.css';

const SavedCandidates = () => {
  const [storedProfiles, updateStoredProfiles] = useState<any[]>([]);

  //get canidates from storage
  useEffect(() => {
    const profilesFromStorage = localStorage.getItem("savedCandidates");
    if (profilesFromStorage !== null) {
      updateStoredProfiles(JSON.parse(profilesFromStorage))
    }
  }, []);
  
  //delete the canidate and update storage to reflect deletion
  const deleteCandidate = (login: string | null) => {
    const tempProfiles = storedProfiles.filter((profile) => profile.Login != login);
    updateStoredProfiles(tempProfiles);
    localStorage.setItem("savedCandidates", JSON.stringify(tempProfiles));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
        </thead>
        <tbody>
          {storedProfiles.map((profile) => (
            <CandidateTableRow key={storedProfiles.indexOf(profile)} currentCandidate={profile} deleteCandidate={deleteCandidate} />))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
