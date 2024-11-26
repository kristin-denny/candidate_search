import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/candidateCard';
import '../index.css';

const CandidateSearch = () => {


//use state variables
  const [users, setUsers] = useState<string[]>([]);
  const [profile, setProfile] = useState<Candidate>({
    Login: '',
    Location: '',
    Email: '',
    Company: '',
    Bio: '',
    Avatar_url: ''
  });
  const [index, setIndex] = useState<number>(0);
  const [haveCandidates, setHaveCandidates] = useState(true);
  const [savedProfiles, updateSavedProfiles] = useState<any[]>([]);


  //get the array of github users and add the user names to an array
  useEffect(() => {
    const storedProfiles = localStorage.getItem("savedCandidates");
    if (storedProfiles !== null) {
      updateSavedProfiles(JSON.parse(storedProfiles))
    }

    const searchForUsers = async () => {
      const githubCandidates: [] = await searchGithub();
      console.log("pre-parse: ", githubCandidates);
      const parsedGithubCandidates = githubCandidates.map((user: any) => {
        return user.login;
      })
      setUsers(parsedGithubCandidates);

    };
    searchForUsers();
  }, []);

//get the individual user profile
  useEffect(() => {
    const searchForProfile = async () => {
      if (users.length > 0 && index < users.length) {
        try {

          const githubProfile = await searchGithubUser(users[index]);

          setProfile({
            Login: githubProfile.login,
            Location: githubProfile.location || "Not specified by user",
            Email: githubProfile.email || "Not specified by user",
            Company: githubProfile.company || "Not specified by user",
            Bio: githubProfile.bio || "Not specified by user",
            Avatar_url: githubProfile.avatar_url
          });
        }
        catch {
          console.log("user does not exist");
        }
      }
    };
    searchForProfile();
  }, [users, index]);

//save profile to local storage
  const saveProfile = () => {
    const tempProfiles = [...savedProfiles, profile];
    updateSavedProfiles(tempProfiles);
    localStorage.setItem("savedCandidates", JSON.stringify(tempProfiles));
    updateIndex();
  };

//if user passes on profile don't do anything with it just increment index
  const passProfile = () => {
    updateIndex();
  };

//update the index, if the user is at the end of the array of profiles hide the interface
  const updateIndex = () => {
    if (index < users.length) {
      setIndex(index + 1);
    } else {
      setHaveCandidates(false);
      console.log(savedProfiles);
    }
  };




  return (
    <>

      <h1>Candidate Search</h1>
      <section id="candidate">
        {haveCandidates && <CandidateCard currentCandidate={profile} saveCandidate={saveProfile} passCandidate={passProfile} />}
      </section>

    </>
  );
};

export default CandidateSearch;
