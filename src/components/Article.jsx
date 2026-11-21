function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  let minutesRead = null;

  if (typeof minutes === "number") {
    if (minutes < 30) {
      const cupCount = Math.ceil(minutes / 5);
      minutesRead = `${"☕️".repeat(cupCount)} ${minutes} min read`;
    } else {
      const bentoCount = Math.ceil(minutes / 10);
      minutesRead = `${"🍱".repeat(bentoCount)} ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {minutesRead ? ` · ${minutesRead}` : null}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;