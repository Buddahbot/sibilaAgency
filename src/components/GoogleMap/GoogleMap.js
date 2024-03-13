import React from "react";

const GoogleMap = () => {
  return (
    <section className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9258.894163795672!2d-5.344432102065324!3d36.20846737770825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1710342050939!5m2!1sen!2ses"
        className="google-map__one"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
