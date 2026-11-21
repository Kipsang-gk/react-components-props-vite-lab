function About({
  image = "https://via.placeholder.com/215",
  about = "Personal blog by Korir Kipsang. I explain with words and code",
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;