"use client";

type UserInfoCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export default function UserInfoCard({ firstName, lastName, email, phone }: UserInfoCardProps) {
  return (
    <div 
      role="region"
      aria-labelledby="personal-info-heading"
      className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 
            id="personal-info-heading"
            className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6"
          >
            Personal Information
          </h4>

          <dl className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div className="flex flex-col">
              <dt 
                id="first-name-label"
                className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"
              >
                First Name
              </dt>
              <dd 
                aria-labelledby="first-name-label"
                className="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                {firstName}
              </dd>
            </div>

            <div className="flex flex-col">
              <dt 
                id="last-name-label"
                className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"
              >
                Last Name
              </dt>
              <dd 
                aria-labelledby="last-name-label"
                className="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                {lastName}
              </dd>
            </div>

            <div className="flex flex-col">
              <dt 
                id="email-label"
                className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"
              >
                Email address
              </dt>
              <dd 
                aria-labelledby="email-label"
                className="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                {email}
              </dd>
            </div>

            <div className="flex flex-col">
              <dt 
                id="phone-label"
                className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400"
              >
                Phone
              </dt>
              <dd 
                aria-labelledby="phone-label"
                className="text-sm font-medium text-gray-800 dark:text-white/90"
              >
                {phone}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}