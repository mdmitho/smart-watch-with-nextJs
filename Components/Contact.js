import React from 'react';

const Contact = () => {
    return (
      <div className="bg-base-200 text-center py-10 ">
        <h1 className="text-5xl font-bold mb-5">Contact Me</h1>
        <div className="hero  ">
          <div className="hero-content w-3/6">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Number</span>
                  </label>
                  <input type="text" placeholder="number" className="input input-bordered" />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-secondary w-full"
                    placeholder="Message Me"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Me massage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;