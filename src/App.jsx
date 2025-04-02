
import './App.css'
import UserForm from './components/UserForm'
import ProfileCard from './components/profileCard';
import fetchingGravatar from './components/fetchingGravatar';
import { useState } from 'react';

const App = () => {
  const [profileData, setProfileData] = useState(null);

const handleFormSubmit = async (formData) => {
  const gravatarData = await fetchingGravatar(formData.email);

  setProfileData({
    fullname: formData.fullname,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    location: formData.location,
    bio: formData.bio,
    website: formData.website,
    ...gravatarData, // Merge Gravatar data if available
  });
};

  return (
    <>
    <div className="min-h-screen flex items-center justify-center  bg-gray-100"> 
      <UserForm onSubmit={handleFormSubmit} /> 
      {profileData && <ProfileCard profileData={profileData} />}
    </div>    </>
  )
};

export default App
