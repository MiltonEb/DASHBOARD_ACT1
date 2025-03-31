import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Milton",
  description: "This is a dashboard",
};

async function fetchUsers() {
  try {
    const resp = await fetch("https://randomuser.me/api/?results=10");
    const data = await resp.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return []; // Return empty array as fallback
  }
}

export default async function UserPage() {
  const usersInfo = await fetchUsers();

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="hidden dark:block text-2xl font-bold mb-6">User Profiles</h1>
      <h1 className="dark:hidden text-gray-dark text-2xl font-bold mb-6">User Profiles</h1>
    
      
      <div 
        className="grid grid-cols-1 gap-4 md:gap-6"
        role="list" // Indicates this is a list container
        aria-label="User profiles list"
      >
        {usersInfo.length > 0 ? (
          usersInfo.map((user, index) => (
            <section 
              key={`${user.login.uuid}-${index}`}
              role="listitem" // Indicates each item in the list
              aria-labelledby={`user-${index}-heading`}
              className="bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <h2 id={`user-${index}-heading`} className="sr-only">
                Profile of {user.name.first} {user.name.last}
              </h2>
              <UserMetaCard 
                firstName={user.name.first} 
                lastName={user.name.last} 
                location={`${user.location.city}, ${user.location.country}`} 
                picture={user.picture.medium}
              />
              <UserInfoCard 
                firstName={user.name.first} 
                lastName={user.name.last} 
                email={user.email} 
                phone={user.phone}
              />
            </section>
          ))
        ) : (
          <div role="alert" className="text-center py-10">
            <p>No user data available at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}