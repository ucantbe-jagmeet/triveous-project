"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading ....</p>
      ) : user ? (
        <p> Welcome, {user.displayName} - you are logged in to the profile</p>
      ) : (
        <p>You must be logged in to view this page - protected route </p>
      )}
    </div>
  );
};

export default Page;
