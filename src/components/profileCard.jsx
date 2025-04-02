import React from "react";

const ProfileCard = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="font-bold">Gravatar User Profile</h2>
      <div className="flex justify-center">
        <img
          src={profileData.gravatarImage || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-md"
        />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold">{profileData.gravatarName || profileData.fullname}</h2>
        <p className="text-gray-600">@{profileData.username}</p>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">📧 {profileData.email}</p>
        <p className="text-sm text-gray-500">📞 {profileData.phone || "Not Provided"}</p>
      </div>

      <p className="text-center text-gray-600">
        📍 {profileData.gravatarLocation || profileData.location}
      </p>

      <p className="text-center text-gray-700 italic">{profileData.gravatarBio || profileData.bio}</p>

      {profileData.website && (
        <div className="text-center">
          <a
            href={profileData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            🌐 Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
