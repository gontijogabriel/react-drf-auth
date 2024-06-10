import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

interface UserProfile {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    cpf: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('http://localhost:8000/api/v1/auth-user/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setProfile(data);
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loading />;

  if (!profile) return <div>Error loading profile.</div>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 border rounded">
        <h2 className="text-2xl mb-4">Profile:</h2>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>First Name:</strong> {profile.first_name}</p>
        <p><strong>Last Name:</strong> {profile.last_name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>CPF:</strong> {profile.cpf}</p>
      </div>
    </div>
  );
};

export default Profile;
