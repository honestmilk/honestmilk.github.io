import React from 'react';

function ContactMenu() {
  return (
    <div 
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }}
      className="floating"
      id="contact-menu"
    >
      <div className="mb-1 menu" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="icon icon-lg icon-shape bg-gradient-white  rounded-circle text-primary mb-1">
          <i className="ni ni-email-83 text-primary" />
        </div>
        <div className="icon icon-lg icon-shape bg-gradient-white  rounded-circle text-primary mb-1">
          <i className="fa fa-phone text-primary" />
        </div>
        <div className="icon icon-lg icon-shape bg-gradient-white  rounded-circle text-primary">
          <i className="fa fa-whatsapp text-primary" />
        </div>
      </div>

      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
        <i className="ni ni-chat-round text-primary" />
      </div>
    </div>
  )
}

export default ContactMenu;