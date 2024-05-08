import { CheckCheckIcon, SendIcon } from 'lucide-react';
import React, { useState } from 'react';

export const ContactMe = () => {
  const [sentMessage, setSendMessage] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: ''
    });
    setSendMessage(true)
  };

  return (
    <div className='contact-area w-full' data-aos='fade-left'>
      <div className="contact-form">
        <div className="shadow-box">
          <img src="bg1.png" alt="BG" className="bg-img" />
          <img src="icon3.png" alt="Icon" />
          <h1
            dangerouslySetInnerHTML={{
              __html: "Let's Chat"
            }}
          ></h1>

          {
            sentMessage
            &&
            <div role="alert" className="alert mb-4 rounded-xl">
              <CheckCheckIcon size={25} strokeWidth={1.5} absoluteStrokeWidth className='text-success' />
              <span>Message has been dispatched!</span>
            </div>
          }

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="topic"
                id="topic"
                required
                placeholder="Topic *"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <button type='submit' className="btn btn-neutral">
                <SendIcon size={20} strokeWidth={1.8} absoluteStrokeWidth />
                Dispatch Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
