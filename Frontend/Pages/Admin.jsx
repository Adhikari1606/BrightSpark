import React from 'react';

const Admin = () => {
  return (
    <div className="flex mx-auto max-w-max px-6 lg:px-8 ">
      <aside className="w-48 p-4 bg-gray-100">
        <div className="w-36 h-36 bg-blue-500 text-white flex items-center justify-center rounded-lg">
          Dashboard
        </div>
      </aside>
      <main className="flex-grow p-4 flex flex-col">
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Submission</h2>
          {/* Add submission content here */}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Feed</h2>
          {/* Add feed content here */}
        </section>
      </main>
    </div>
  );
}

export default Admin;
