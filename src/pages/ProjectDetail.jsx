import React from "react";
import "../css/ProjectDetail.css";

const ProjectDetail = () => {
  return (
    <div className="container bg-glassmorphism">
      <h1><strong>Project Details</strong></h1>
      <div className="lg ">
        <div className="lg:ml-[calc(300px+4vw)] w-11/12 mx-auto lg:text-left">
          <h2 className="text-2xl font-semibold mt-3 mb-1">
            <hr></hr>
            Overview
            <hr></hr>
          </h2>
          <p>
            Thrift is a humanitarian effort dedicated to promoting literacy by offering "FREE OLD BOOKS" to learners.
            Along with them, you can buy OR sell "SECOND HAND BOOKS" & your handmade works as well.
            <br></br>
            A unique component of our work is the identification of adjacent NGOs that can place requests for books or other needed items for children, thereby benefiting pupils.
            <br />
          </p>

          <h2 className="text-2xl font-semibold mt-3 mb-1">
            <hr></hr>
            How it Works
            <hr></hr>
          </h2>
          <ul className="marker:text-sky-400 list-disc pl-5 space-y-1 text-black-600 text-lg flex justify-self-auto flex-col sm:flex-row ">
            <div>
              <li className="my-0">Donate button: Redirects you to the Add Listing page where you can add details about the books you're donating or selling.
              </li>
              <li className=" my-0">Donate to NGO: Redirect you to nearby NGOs.</li>
              <li className=" my-0">Orders: View the orders that arrived on your donated books.</li>
              <li className=" my-0">Once an order has been placed, the donator/seller should "Accept" the order and contact the customer using the email address supplied for book donation.</li>
              <li className=" my-0">Must "Allow" notifications before proceeding to ensure proper notifications.</li>
            </div>
          </ul>


          <div className="my-10">
            <hr></hr>
            <h2 className="text-2xl font-semibold ">Technologies Used:</h2>
            <hr></hr>
            <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-black-600  text-lg w-[300px] cursor-pointer">

              <li className="my-2"><a href="https://legacy.reactjs.org/" target="_blank" rel="noreferrer">Frontend: React.js </a></li>

              <li className="my-2"> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">Backend: Firebase</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
